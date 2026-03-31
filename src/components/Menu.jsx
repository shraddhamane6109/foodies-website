import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Butter Chicken",
    category: "Dinner",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=500",
  },
  {
    id: 2,
    name: "Grilled Herb Chicken",
    category: "Dinner",
    price: "$14.50",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=500",
  },
  {
    id: 3,
    name: "Vegetable Platter",
    category: "Dinner",
    price: "$11.99",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500",
  },
  {
    id: 4,
    name: "Ricotta Shells",
    category: "Dinner",
    price: "$15.00",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500",
  },

  {
    id: 5,
    name: "Garden Salad",
    category: "Lunch",
    price: "$9.50",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500",
  },
  {
    id: 6,
    name: "Artisan Pesto Pasta",
    category: "Lunch",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 7,
    name: "Caprese Salad",
    category: "Lunch",
    price: "$8.00",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=500",
  },
  {
    id: 8,
    name: "Classic Club Sandwich",
    category: "Lunch",
    price: "$9.50",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500",
  },

  {
    id: 9,
    name: "Avocado Toast",
    category: "Breakfast",
    price: "$8.00",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500",
  },
  {
    id: 10,
    name: "Shakshuka (Eggs)",
    category: "Breakfast",
    price: "$12.50",
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 11,
    name: "Waffles with Berries",
    category: "Breakfast",
    price: "$10.00",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 12,
    name: "Classic Eggs Benedict",
    category: "Breakfast",
    price: "$11.50",
    image:
      "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=500",
  },
];

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

function Menu() {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useContext(CartContext);

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section id="menu" className="min-h-screen bg-gray-50 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Menu</h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-lg"
              />

              <h3 className="mt-3 font-bold">{item.name}</h3>
              <p className="text-orange-500">{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                aria-label={`Add ${item.name} to cart`}
                className="mt-3 w-full bg-gray-900 text-white py-2 rounded hover:bg-orange-500"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
