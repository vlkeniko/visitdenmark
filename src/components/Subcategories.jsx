import categories from "../assets/data/en/categories.json";
import events from "../assets/data/en/categories/events.json";
import Subcategory from "./Subcategory";

export default function Subcategories(props) {
  let subcategories = [];
  let name = "";
  categories.forEach((subcategory) => {
    if (subcategory.Id === props.id) {
      subcategories = subcategory.Children;
      name = subcategory.Name;
    }

    if (props.id === 58) {
      subcategories = events;
    }
  });

  return (
    <>
      <h1>{name}</h1>
      <div className="card-carousel">
        {subcategories.map((subcategory) => (
          <Subcategory
            main={props.id}
            subcategory={subcategory}
            key={subcategory.id}
          />
        ))}
      </div>
    </>
  );
}
