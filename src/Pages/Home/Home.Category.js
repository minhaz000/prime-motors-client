import React, { useContext } from "react";
import { RootContext } from "../../context/RootContext";
import Categories from "./Card.Categories";

function Category(props) {
  const { categories } = useContext(RootContext);
  return (
    <div className=" bg-base-200 py-10">
      <h1 className=" text-2xl font-bold text-center mb-10 text-green-500">
        Choose your <span className=" text-black"> Car type </span>
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
        {categories?.map((item, i) => {
          return (
            <Categories key={i} Data={item}>
              {" "}
            </Categories>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
