import { useState } from "react";
import MostSearchedList from "./mostsearched";
import RecentSearches from "./recentsearches";
import SearchComponent from "./searchcomponent";

export default function SearchPage() {
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {isSearchOn && <div onClick={() => setIsSearchOn(false)} className="backdrop"></div>}
      <div className="searchcontainer">
        <div className="title bold">Welcome to Fedex Tracking Search!</div>
        <div className="subtext">Click on an item to open tracking info</div>
        <input
          onChange={e => {
            if (!isSearchOn) setIsSearchOn(true);
            setSearchInput(e.target.value);
          }}
          onClick={() => !isSearchOn && setIsSearchOn(true)}
          className="searchinput form-control"
          placeholder="Click here to start searching"
        />

        {isSearchOn && !searchInput && (
          <div className="searchcontents">
            <MostSearchedList />
            <RecentSearches />
          </div>
        )}
        {isSearchOn && searchInput && (
          <div className="searchcontents">
            <SearchComponent searchInput={searchInput} />
          </div>
        )}
      </div>
    </>
  );
}
