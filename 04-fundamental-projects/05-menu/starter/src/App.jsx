import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

// using set instead of filter
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItem, setMenuItem] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItem={menuItem} />
      </section>
    </main>
  );
};
export default App;
