import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0); 
  const [cart, setCart] = useState([]);
 
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  /* function to add a item to the cart */
  const add = (item) => setCart([...cart, item]);

  /* calculate the total prices after adding the items */
  const calculateTotal = () => {
    let price = 0;
    let i = 0
    while(i<cart.length){
      price += cart[i].price
      i++
    }
    setTotal(price.toFixed(2));
  };

  return (
    <div className="App">
      <h1 className="Header">Zhangyi's Bakery &#40;Cart at the bottom!&#41;</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="App">{bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <div class="card">
          <img src={item.image} width={500}/>
          <div class="container">
            <h4><b>{item.name}</b></h4>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button className="button" onClick={() => add(item)}><span>Add</span></button>
           </div>
          </div>
      ))}</div>
      

      <div className="cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}: ${item.price.toFixed(2)}</p>
        </div>
        ))}
        <b>Total: ${total}</b>
      </div>
    </div>
  );
}

export default App;
