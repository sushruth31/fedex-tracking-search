import { runTransaction, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

//hook to return a function that will update firestore db for trending search functionality in a way that can handle multiple users writing at the same time. 

export default function useFBTransaction() {
  return function transaction(site) {
    const docRef = doc(db, "trendingsearches", site);
    runTransaction(db, async transaction => {
      const siteDoc = await transaction.get(docRef);
      if (!siteDoc.exists()) {
        setDoc(docRef, { _count: 1 }, { merge: true });
      } else {
        const newCount = siteDoc.data()._count + 1;
        transaction.update(docRef, { _count: newCount });
      }
    });
  };
}
