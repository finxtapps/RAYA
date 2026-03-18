import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { selectedDay, food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Get food items for the selected day
  const dayFoods = selectedDay ? food_list.filter(food => food.category === selectedDay) : [];

  // Group items by meal type
  const mealTypes = ["Breakfast", "Lunch", "Dinner"];
  const groupedByMeal = {};
  mealTypes.forEach(type => {
    groupedByMeal[type] = dayFoods.filter(food => food.mealType === type);
  });

  const getTotalPrice = () => {
    let total = 0;
    dayFoods.forEach(food => {
      if (cartItems[food._id] && cartItems[food._id] > 0) {
        total += food.price * cartItems[food._id];
      }
    });
    return total;
  };

  const getTotalItems = () => {
    let total = 0;
    dayFoods.forEach(food => {
      if (cartItems[food._id] && cartItems[food._id] > 0) {
        total += cartItems[food._id];
      }
    });
    return total;
  };

  const handlePlaceOrder = () => {
    if (getTotalItems() === 0) {
      alert("Please add at least one item");
      return;
    }
    navigate("/order");
  };

  if (!selectedDay) {
    return (
      <div className="cart-container">
        <p>Please select a day from the menu</p>
        <button onClick={() => navigate("/")}> Back to Home</button>
      </div>
    );
  }

  return (
    <div className="meal-plan-page">
      {/* Header */}
      <div className="meal-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>
        <h1>Order for {selectedDay}</h1>
        <img src={assets.selector_icon} alt="notification" className="notification" />
      </div>

      {/* Meals Container */}
      <div className="meals-container">
        {mealTypes.map((mealType) => {
          const meals = groupedByMeal[mealType];
          if (meals.length === 0) return null;

          return (
            <div key={mealType}>
              {/* Meal Type Header */}
              <div className="meal-type-header">
                <h2 className="meal-type-title">{mealType}</h2>
              </div>

              {/* Items for this meal type */}
              {meals.map((food) => {
                const quantity = cartItems[food._id] || 0;

                return (
                  <div key={food._id} className="meal-section">
                    <div className="meal-item">
                      <div className="meal-content">
                          <h3 className="meal-name">{food.name}</h3>
                          <p className="meal-price">₹{food.price}</p>
                      </div>
                      <div className="meal-controls">
                        {quantity > 0 ? (
                          <div className="quantity-controls">
                            <button
                              className="qty-btn minus-btn"
                              onClick={() => removeFromCart(food._id)}
                            >
                              −
                            </button>
                            <span className="qty-display">{quantity}</span>
                            <button
                              className="qty-btn plus-btn active"
                              onClick={() => addToCart(food._id)}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            className="qty-btn plus-btn active"
                            onClick={() => addToCart(food._id)}
                          >
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Order Summary */}
      <div className="order-summary-section">
        <div className="summary-row">
          <div className="summary-col">
            <span className="summary-icon">🍽️</span>
            <div className="summary-text">
              <span className="summary-label">Total Items:</span>
              <span className="summary-value">{getTotalItems()}</span>
            </div>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-col">
            <span className="summary-label">Total Price:</span>
            <span className="summary-value">₹{getTotalPrice()}</span>
          </div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
