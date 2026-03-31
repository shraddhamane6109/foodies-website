import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("$", ""));
  }, 0);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-4 border-b pb-2">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-6">
            Total: ${total.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;
