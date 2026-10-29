import { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";
import { Link } from "react-router";
import baseUrl from "../api/baseUrl";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/menus`)
      .then((res) => res.json())
      .then((data) => {
        const pouplarMenuData = data.filter(
          (element) => element.category === "popular",
        );
        setMenu(pouplarMenuData);
      });
  }, []);

  return (
    <div>
      <Container>
        <SectionTitle
          heading="From Popular Menu"
          subHeading="Check it out"
        ></SectionTitle>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {menu.map((element) => (
            <MenuItem key={element._id} element={element}></MenuItem>
          ))}
        </section>
        <div className="flex justify-center items-center mt-4 ">
          <Link to="/menu" className="btn btn-outline border-0 border-b-2">
            View Full Menu
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularMenu;
