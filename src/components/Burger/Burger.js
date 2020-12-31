import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  let integradents = Object.keys(props.integradents)
    .map((inKey) => {
      return [...Array(props.integradents[inKey])]
        .fill()
        .map((_, index) => (
          <BurgerIngredient key={inKey + index} type={inKey} />
        ));
    })
    .flat();
  if (integradents.length === 0) {
    integradents = <p>please choise your integredient</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {integradents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
