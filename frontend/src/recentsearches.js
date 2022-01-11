import ListItem from "./ListItem";
import { FaHistory } from "react-icons/fa";
import useLocalStorage from "./useLocalStorage";

export default function RecentSearches() {
  const [data, _, clear] = useLocalStorage("searches");

  return (
    <div className="mostsearchedcontainer">
      <div className="flex">
        <div className="bold">Recent Searches</div>
        <button onClick={clear} className="btn bold">
          Clear
        </button>
      </div>
      <ul className="list-group-flush searchul">
        {!data ? (
          <div>No Recent Searches</div>
        ) : (
          data?.map(({ id, shipping_tracking_code, label_id }) => (
            <ListItem
              key={id}
              icon={<FaHistory />}
              id={id}
              labelId={label_id}
              trackingNumber={shipping_tracking_code}
            />
          ))
        )}
      </ul>
    </div>
  );
}
