import { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState('today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('lunch');

  // Calculate time remaining for slots
  const getTimeRemaining = (slot, day) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    if (slot === 'lunch') {
      if (day === 'today') {
        // Today's lunch: Can order from 7 AM - 11 AM
        if (currentHour >= 7 && currentHour < 11) {
          const hoursLeft = 11 - currentHour - 1;
          const minutesLeft = 60 - currentMinutes;
          return `${hoursLeft}h ${minutesLeft}m remaining`;
        } else if (currentHour < 7) {
          // Before 7 AM - show time until ordering opens
          const hoursUntil = 7 - currentHour - 1;
          const minutesUntil = 60 - currentMinutes;
          return `Opens in ${hoursUntil}h ${minutesUntil}m`;
        }
        return 'Closed';
      } else {
        // Tomorrow's lunch: Can order from today 7 AM - tomorrow 11 AM
        if (currentHour >= 7) {
          // After 7 AM today - calculate time until tomorrow 11 AM
          const hoursLeft = (24 - currentHour) + 11 - 1;
          const minutesLeft = 60 - currentMinutes;
          return `${hoursLeft}h ${minutesLeft}m remaining`;
        } else {
          // Before 7 AM today - ordering not open yet
          const hoursUntil = 7 - currentHour - 1;
          const minutesUntil = 60 - currentMinutes;
          return `Opens in ${hoursUntil}h ${minutesUntil}m`;
        }
      }
    } else if (slot === 'dinner') {
      if (day === 'today') {
        // Today's dinner: Can order from 7 AM - 6 PM
        if (currentHour >= 7 && currentHour < 18) {
          const hoursLeft = 18 - currentHour - 1;
          const minutesLeft = 60 - currentMinutes;
          return `${hoursLeft}h ${minutesLeft}m remaining`;
        } else if (currentHour < 7) {
          // Before 7 AM - show time until ordering opens
          const hoursUntil = 7 - currentHour - 1;
          const minutesUntil = 60 - currentMinutes;
          return `Opens in ${hoursUntil}h ${minutesUntil}m`;
        }
        return 'Closed';
      } else {
        // Tomorrow's dinner: Can order from today 7 AM - tomorrow 6 PM
        if (currentHour >= 7) {
          // After 7 AM today - calculate time until tomorrow 6 PM
          const hoursLeft = (24 - currentHour) + 18 - 1;
          const minutesLeft = 60 - currentMinutes;
          return `${hoursLeft}h ${minutesLeft}m remaining`;
        } else {
          // Before 7 AM today - ordering not open yet
          const hoursUntil = 7 - currentHour - 1;
          const minutesUntil = 60 - currentMinutes;
          return `Opens in ${hoursUntil}h ${minutesUntil}m`;
        }
      }
    }
  };

  const cartItemsArray = food_list.filter(item => cartItems[item._id] > 0);
  const hasItems = cartItemsArray.length > 0;

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h1>Food Ordering</h1>
        <p>Select your preferred time slot and order delicious meals</p>
      </div>

      <div className='cart-content'>
        {/* Left Section - Time Slot Selection */}
        <div className='cart-left'>
          {/* Day Selection */}
          <div className='selection-section'>
            <h3>Select Day</h3>
            <div className='day-buttons'>
              <button 
                className={selectedDay === 'today' ? 'active' : ''}
                onClick={() => setSelectedDay('today')}
              >
                Today
              </button>
              <button 
                className={selectedDay === 'tomorrow' ? 'active' : ''}
                onClick={() => setSelectedDay('tomorrow')}
              >
                Tomorrow
              </button>
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className='selection-section'>
            <h3>Select Time Slot</h3>
            <div className='time-slots'>
              <div 
                className={`time-slot ${selectedTimeSlot === 'lunch' ? 'selected' : ''}`}
                onClick={() => setSelectedTimeSlot('lunch')}
              >
                <div className='slot-info'>
                  <h4>Lunch</h4>
                  <p>7:00 AM - 11:00 AM</p>
                </div>
                <span className='time-remaining'>{getTimeRemaining('lunch', selectedDay)}</span>
              </div>

              <div 
                className={`time-slot ${selectedTimeSlot === 'dinner' ? 'selected' : ''}`}
                onClick={() => setSelectedTimeSlot('dinner')}
              >
                <div className='slot-info'>
                  <h4>Dinner</h4>
                  <p>7:00 AM - 6:00 PM</p>
                </div>
                <span className='time-remaining'>{getTimeRemaining('dinner', selectedDay)}</span>
              </div>
            </div>
          </div>

          {/* Items Selection */}
          <div className='selection-section'>
            <h3>Select Items</h3>
            <div className='items-grid'>
              {food_list.map((item) => (
                <div key={item._id} className='item-card'>
                  <div className='item-card-content'>
                    <img src={url + "/images/" + item.image} alt={item.name} />
                    <div className='item-info'>
                      <h4>{item.name}</h4>
                      <p className='item-price'>₹{item.price}</p>
                    </div>
                  </div>
                  <div className='item-actions'>
                    {cartItems[item._id] > 0 ? (
                      <div className='quantity-controls'>
                        <button onClick={() => removeFromCart(item._id)}>-</button>
                        <span>{cartItems[item._id]}</span>
                        <button onClick={() => addToCart(item._id)}>+</button>
                      </div>
                    ) : (
                      <button className='add-btn' onClick={() => addToCart(item._id)}>
                        Add
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className='cart-right'>
          <div className='order-summary'>
            <h3>Order Summary</h3>
            
            <div className='summary-slot'>
              <span>Slot:</span>
              <span className='slot-value'>
                {selectedTimeSlot.charAt(0).toUpperCase() + selectedTimeSlot.slice(1)} - {selectedDay === 'today' ? 'Today' : 'Tomorrow'}
              </span>
            </div>

            <div className='summary-items'>
              {!hasItems ? (
                <p className='no-items'>No items selected</p>
              ) : (
                cartItemsArray.map((item) => (
                  <div key={item._id} className='summary-item'>
                    <div className='summary-item-info'>
                      <span className='item-name'>{item.name}</span>
                      <span className='item-quantity'>x{cartItems[item._id]}</span>
                    </div>
                    <span className='item-total'>₹{(item.price * cartItems[item._id]).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            <div className='summary-divider'></div>

            <div className='summary-costs'>
              <div className='cost-row'>
                <span>Subtotal</span>
                <span>₹{getTotalCartAmount().toFixed(2)}</span>
              </div>
              <div className='cost-row'>
                <span>Delivery Fee</span>
                <span>₹{getTotalCartAmount() === 0 ? '0.00' : '2.00'}</span>
              </div>
            </div>

            <div className='summary-divider'></div>

            <div className='summary-total'>
              <span>Total:</span>
              <span className='total-amount'>
                ₹{getTotalCartAmount() === 0 ? '0.00' : (getTotalCartAmount() + 2).toFixed(2)}
              </span>
            </div>

            <button 
              className='place-order-btn'
              onClick={() => navigate('/order')}
              disabled={!hasItems}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
