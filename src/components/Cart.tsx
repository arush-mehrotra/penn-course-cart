import { useNavigate } from "react-router-dom";
import '../App.css';

const Cart = ({arr}) => {

  const checkoutEmpty = () =>{
    alert('You do not have any courses to checkout!')
  }

  // Controlls the routing to the receipt page 

  let navigate = useNavigate();
  const routeChange = () => {
    var pathArray = [];
    for (var i = 0; i < 7; i++) {
      if (arr[i] !== undefined) {
        pathArray[i] = arr[i].substring(0, arr[i].indexOf('-'));
      }
      else {
        pathArray[i] = ' ';
      }
    }
    let path = '/receipt/' + pathArray[0] + '/' + pathArray[1] + '/' + pathArray[2] + '/' + pathArray[3] + '/' + pathArray[4] + '/' + pathArray[5] + '/' + pathArray[6]
    navigate(path);
  }

  // Handles the case in which the cart is empty

  if (arr.length === 0) {
    return (
      <div className = "cart-empty">
        <button className="button-85" onClick = {checkoutEmpty}>Checkout Cart</button>
        <h4>Course Cart</h4>
        <p>Your cart is currently empty!</p>
      </div>
    )
  }

  // Handles the case in which the cart has at least one course

  else {
    return (
      <div className = "cart">
        <button className="button-85" onClick = {routeChange}>Checkout Cart</button>
        <h4>Course Cart</h4>
        <ol className = "cart-list">
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}</li>
          <li>{arr[3]}</li>
          <li>{arr[4]}</li>
          <li>{arr[5]}</li>
          <li>{arr[6]}</li>
          <li>{arr[7]}</li>
        </ol>
      </div>
    )
  }
}
  
export default Cart;
