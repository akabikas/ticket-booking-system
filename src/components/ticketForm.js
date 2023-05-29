import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Hall from './hall';
import Showtime from './showtime';
import Checkout from './checkout';

function TicketForm() {
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAudi, setSelectedAudi] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [countdown, setCountdown] = useState(10);

  const [showSeatSelection, setShowSeatSelection] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleSelectedTime = (selectedTime, audi) => {
    setSelectedTime(selectedTime);
    setSelectedAudi(parseInt(audi));
    setError(null);
  };

  const handleSeatSelection = (seatKey) => {
    setSelectedSeats((prevSelectedSeats) => {
      const isSelected = prevSelectedSeats.includes(seatKey);

      if (isSelected) {
        return prevSelectedSeats.filter((seat) => seat !== seatKey);
      } else {
        setError(null);
        return [...prevSelectedSeats, seatKey];
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedTime) {
      setShowSeatSelection(true);
    } else {
      setError('Please select a time.');
    }
  };

  const handleCheckout = () => {
    if (selectedSeats.length > 0) {
      setShowCheckout(true);
    } else {
      setError('Please select at least one seat.');
    }
  };

  const handlePayment = () => {
    setSuccess('Checkout successful! Thank you for your purchase.');
    startCountdown();
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      redirectToHomePage();
    }, countdown * 1000);
  };

  const redirectToHomePage = () => {
    router.push('/');
  };

  const seatCount = selectedSeats.length;
  const seatPrice = 7;
  const totalPrice = seatCount * seatPrice;

  return (
    <>
      <div className="ticket-form-all">
        <form className="ticket-form" name="ticket-form" onSubmit={handleFormSubmit}>
          <div className="data-container">
            {!showSeatSelection && (
              <fieldset>
                <Showtime onSelectedTime={handleSelectedTime} />
              </fieldset>
            )}
            {showSeatSelection && !showCheckout && (
              <fieldset className="theater-hall">
                <Hall audiNumber={selectedAudi} onSeatSelection={handleSeatSelection} />
              </fieldset>
            )}
            {showSeatSelection && showCheckout && (
              <>
                <Checkout seatCount={seatCount} totalPrice={totalPrice} />
              </>
            )}
          </div>
          <fieldset>
            {error && <div className="error-div">{error}</div>}
            {success && (
              <div className="success-div">
                {`${success} Redirecting in ${countdown}...`}
              </div>
            )}
          </fieldset>
          <fieldset className="d-flex justify-content-center button-container">
            {!showSeatSelection ? (
              <button className="continue-booking" name="continue-booking" type="submit">
                Continue Booking
              </button>
            ) : !showCheckout ? (
              <button className="continue-booking" name="continue-booking" onClick={handleCheckout}>
                Pay now
              </button>
            ) : (
              <>
                <button className="continue-booking" name="checkout" onClick={handlePayment}>
                  Checkout
                </button>
              </>
            )}
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default TicketForm;
