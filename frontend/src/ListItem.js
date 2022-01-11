import useLocalStorage from "./useLocalStorage";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function ListItem({ id, labelId, trackingNumber, icon }) {
  const [_, setLocalStorage] = useLocalStorage("searches");
  const dataObj = { id: id, label_id: labelId, shipping_tracking_code: trackingNumber };

  const handleFireBase = async () => {
    const docref = doc(db, "mostsearched", id.toString());
    //get the count

    const docSnap = await getDoc(docref);

    if (docSnap.exists()) {
      const { count } = docSnap.data();
      setDoc(docref, {
        ...dataObj,
        count: count + 1,
      });
    } else {
      setDoc(docref, {
        ...dataObj,
        count: 1,
      });
    }
  };

  return (
    <li
      onClick={() => {
        setLocalStorage(dataObj);
        handleFireBase();
        window.open(`https://www.fedex.com/apps/fedextrack/?action=track&trackingnumber=${trackingNumber}`);
      }}
      className="list-group-item flex searchli">
      <div className="idlabelicon flex">
        {icon}
        <div className="idandlabel">
          <div>{`ID: ${id}`}</div>
          <div>{`Label: ${labelId}`}</div>
        </div>
      </div>
      <div className="trackingnumber">{`Tracking: ${trackingNumber}`}</div>
    </li>
  );
}
