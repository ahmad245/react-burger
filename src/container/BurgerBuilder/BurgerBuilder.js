import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREGIANT_PRICE={
  cheese:2.2,
  salad:4.5,
  meat:3,
  bacon:5
}
class  BurgerBuilder extends Component{
 state={
   integradents:{
     cheese:0,
     salad:0,
     meat:0,
     bacon:0
   },
   totalPrice:4,
   purchasable:false,
   purchasing:false
 }
 addIngredient=(type)=>{
    let newCount=this.state.integradents[type]+1;
    let ingredientCopy={  ...this.state.integradents};
    ingredientCopy[type]=newCount;
    let newPrice=this.state.totalPrice + INGREGIANT_PRICE[type];
    this.setState({totalPrice:newPrice,integradents:ingredientCopy});
    this.updatePurchasableState(ingredientCopy);
 }
 removeIngredient=(type)=>{
   if(this.state.integradents[type] <= 0) return;
  let newCount=this.state.integradents[type]-1;
  let ingredientCopy={  ...this.state.integradents};
  ingredientCopy[type]=newCount;
  let newPrice=this.state.totalPrice - INGREGIANT_PRICE[type];
  this.setState({totalPrice:newPrice,integradents:ingredientCopy});
  this.updatePurchasableState(ingredientCopy);
 }
 updatePurchasableState(integradents){
   const sum=Object.keys(integradents).map((ingkey)=>{
     return integradents[ingkey]
   }).reduce((acc,el)=>acc+el,0);
   
   this.setState({purchasable:sum > 0});
 }

 handlePurchasing=()=>{
   this.setState({purchasing:true})
 }
 changePurchasing=()=>{
  this.setState({purchasing:false})
 }

 
  render(){

    const ingredientsDisabled={...this.state.integradents};
    for (const key in ingredientsDisabled) {
      ingredientsDisabled[key]=ingredientsDisabled[key] > 0
    }  

    return (
      <React.Fragment>
        <Burger integradents={this.state.integradents} />
        <BuildControls ordered={this.handlePurchasing}  purchasable={this.state.purchasable} ingredientsDisabled={ingredientsDisabled} price={this.state.totalPrice} added={this.addIngredient} removed={this.removeIngredient} />
        <Modal hide={this.changePurchasing} show={this.state.purchasing}>
          <OrderSummary hide={this.changePurchasing} ingredients={this.state.integradents} />
        </Modal>
      </React.Fragment>
  );
  }
   
}
export default BurgerBuilder;