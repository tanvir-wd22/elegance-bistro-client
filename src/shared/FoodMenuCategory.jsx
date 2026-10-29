import { Link } from "react-router";
import MenuItem from "./MenuItem";
import Container from "./Container";

const FoodMenuCategory = ({ categoryData, categoryName }) => {
  return (
    <div>
      <Container>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {categoryData.map((element) => (
            <MenuItem key={element._id} element={element}></MenuItem>
          ))}
        </section>
        <div className="flex justify-center items-center mt-4 ">
          <Link
            to={`/shop/${categoryName}`}
            className="btn btn-outline border-0 border-b-2"
          >
            Order Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FoodMenuCategory;
