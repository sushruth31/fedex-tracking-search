import ListItem from "./ListItem";
import { useStore } from "./datastore";
import useFireStoreQuery from "./useFireStoreQuery";
import { query, collection, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";
import Spinner from "./spinner";
import { FaArrowUp } from "react-icons/fa";

export default function MostSearchedList() {
  const { popSearches, setPopSearches } = useStore();
  const fbQuery = query(collection(db, "mostsearched"), orderBy("count", "desc"), limit(3));
  const [loading] = useFireStoreQuery(fbQuery, [], popSearches, setPopSearches);

  return (
    <div className="mostsearchedcontainer">
      <div className="bold">Popular Searches</div>
      <ul className="list-group-flush searchul">
        {loading ? (
          <Spinner />
        ) : !popSearches ? (
          <div>No Results</div>
        ) : (
          popSearches.map(({ data: { label_id, shipping_tracking_code, id } }) => (
            <ListItem
              icon={<FaArrowUp />}
              id={id}
              key={id}
              labelId={label_id}
              trackingNumber={shipping_tracking_code}
            />
          ))
        )}
      </ul>
    </div>
  );
}
