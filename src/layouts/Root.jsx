import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location?.pathname === "/login";
  return (
    <>
      {noHeaderFooter || (
        <header>
          <Header></Header>
        </header>
      )}
      <main>
        <Outlet></Outlet>
      </main>
      {noHeaderFooter || (
        <footer>
          <Footer></Footer>
        </footer>
      )}
    </>
  );
};

export default Root;
