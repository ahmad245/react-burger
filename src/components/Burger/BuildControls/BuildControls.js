import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Price :<strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            added={() => props.added(control.type)}
            removed={() => props.removed(control.type)}
            key={control.label}
            label={control.label}
            ingredientDisabled={props.ingredientsDisabled[control.type]}
          />
        );
      })}
      <button onClick={props.ordered} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
};
export default buildControls;
