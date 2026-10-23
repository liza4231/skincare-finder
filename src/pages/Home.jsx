import { useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";

function Home() {
  const location = useLocation();

  const [searched, setSearched] = useState(
    location.state?.searched || false
  );

  return (
    <div>
      {!searched && (
        <div className="home-intro">
          <h1>SkinCare Finder</h1>

          <p>
            Search for skincare products and learn more about
            the ingredients they contain.
          </p>

          <p>
            Search for a product or brand below to get started.
          </p>
        </div>
      )}

      <Search onSearch={setSearched} />
    </div>
  );
}

export default Home;