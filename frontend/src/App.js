import Login from "./login";
import SearchPage from "./searchpage";
import { Route, Routes } from "react-router-dom";
import ProtectedElement from "./ProtectedElement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/search"
          element={
            <ProtectedElement>
              <SearchPage />
            </ProtectedElement>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
