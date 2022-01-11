import useFetch from "./useFetch";
import ListItem from "./ListItem";
import useDebounce from "./useDebounce";
import Spinner from "./spinner";

export default function SearchComponent({ searchInput }) {
  const [debouncedSearchInput] = useDebounce(searchInput, 250);

  const [data, loading, err] = useFetch(`http://localhost:8080/api/search/${searchInput}`, "GET", [
    debouncedSearchInput,
  ]);

  return (
    <div className="mostsearchedcontainer">
      <div className="bold">Results:</div>
      <div className="subtext">Click to track on FEDEX.com</div>
      {!data || loading ? (
        <Spinner />
      ) : (
        <>
          <ul className="list-group-flush searchul">
            {data?.map(({ id, label_id, shipping_tracking_code }) => (
              <ListItem key={id} id={id} labelId={label_id} trackingNumber={shipping_tracking_code} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
