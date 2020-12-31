import React from 'react';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
 const ingredientSummary=   Object.keys(props.ingredients)
                           .map((igkey,key)=>{
                           return <li key={igkey}>{igkey} : {props.ingredients[igkey]}</li>
                           })
    return (
     <React.Fragment>
       <h3>You Order</h3>
       <p>A delicious burger with the following ingredients :</p>
       <ul>
           {ingredientSummary}
       </ul>
       <Button clicked={props.hide} btnType="Danger">Cancel</Button>
       <Button clicked={props.hide} btnType="Success">Continue</Button>
     </React.Fragment>
    );
}

export default orderSummary;