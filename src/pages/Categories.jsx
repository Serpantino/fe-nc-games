import styles from "./Categories.module.css";
import { useEffect, useState } from "react";
import { GetCategories } from "../components/FetchData";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryJSX, setCategoryJSX] = useState([]);
  useEffect(() => {
    GetCategories().then(({ categories }) => {
      console.log(categories);
      setCategories(categories);
      buildCategoryJSX();
    });
  }, []);

  function buildCategoryJSX() {
    const tempCatJSX = categories.map((category) => {
      return (
        <li>
          <h3>{category.slug}</h3>
          <p>{category.description}</p>
        </li>
      );
    });
    setCategoryJSX(tempCatJSX);
  }

  return (
    <section className={styles.page_categories}>
      <h2>Categories</h2>
      {categoryJSX && <ul className={styles['container_categories-list']}>{categoryJSX}</ul>}
    </section>
  );
}
