import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>SkinCare Finder</h1>

      <p>
        Search for skincare products and learn more about
        the ingredients they contain.
      </p>

      <p>
        SkinCare Finder uses the Open Beauty Facts API to
        provide skincare product and ingredient information.
      </p>

      <Link to="/search">
        Search Products
      </Link>
    </div>
  );
}

export default Home;