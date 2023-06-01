import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Hall from './hall';
import Showtime from './showtime';
import Checkout from './checkout';

function TicketForm() {
  const audiData = {
    1: {
      seatArray: [
        ['A1R1S1', 'A1R1S2', 'A1R1S3', 'A1R1S4', 'A1R1S5', 'A1R1S6', 'A1R1S7', 'A1R1S9', 'A1R1S10', 'A1R1S11', 'A1R1S12', 'A1R1S13', 'A1R1S14', 'A1R1S15', 'A1R1S16', 'A1R1S17', 'A1R1S18', 'A1R1S19', 'A1R1S20'],
        ['A1R2S1', 'A1R2S2', 'A1R2S3', 'A1R2S4', 'A1R2S5', 'A1R2S6', 'A1R2S7', 'A1R2S9', 'A1R2S10', 'A1R2S11', 'A1R2S12', 'A1R2S13', 'A1R2S14', 'A1R2S15', 'A1R2S16', 'A1R2S17', 'A1R2S18', 'A1R2S19', 'A1R2S20'],
        ['A1R3S1', 'A1R3S2', 'A1R3S3', 'A1R3S4', 'A1R3S5', 'A1R3S6', 'A1R3S7', 'A1R3S9', 'A1R3S10', 'A1R3S11', 'A1R3S12', 'A1R3S13', 'A1R3S14', 'A1R3S15', 'A1R3S16', 'A1R3S17', 'A1R3S18', 'A1R3S19', 'A1R3S20'],
        ['A1R4S1', 'A1R4S2', 'A1R4S3', 'A1R4S4', 'A1R4S5', 'A1R4S6', 'A1R4S7', 'A1R4S9', 'A1R4S10', 'A1R4S11', 'A1R4S12', 'A1R4S13', 'A1R4S14', 'A1R4S15', 'A1R4S16', 'A1R4S17', 'A1R4S18', 'A1R4S19', 'A1R4S20'],
        ['A1R5S1', 'A1R5S2', 'A1R5S3', 'A1R5S4', 'A1R5S5', 'A1R5S6', 'A1R5S7', 'A1R5S9', 'A1R5S10', 'A1R5S11', 'A1R5S12', 'A1R5S13', 'A1R5S14', 'A1R5S15', 'A1R5S16', 'A1R5S17', 'A1R5S18', 'A1R5S19', 'A1R5S20'],
        ['A1R6S1', 'A1R6S2', 'A1R6S3', 'A1R6S4', 'A1R6S5', 'A1R6S6', 'A1R6S7', 'A1R6S9', 'A1R6S10', 'A1R6S11', 'A1R6S12', 'A1R6S13', 'A1R6S14', 'A1R6S15', 'A1R6S16', 'A1R6S17', 'A1R6S18', 'A1R6S19', 'A1R6S20'],
        ['A1R7S1', 'A1R7S2', 'A1R7S3', 'A1R7S4', 'A1R7S5', 'A1R7S6', 'A1R7S7', 'A1R7S9', 'A1R7S10', 'A1R7S11', 'A1R7S12', 'A1R7S13', 'A1R7S14', 'A1R7S15', 'A1R7S16', 'A1R7S17', 'A1R7S18', 'A1R7S19', 'A1R7S20'],
      ],
      bookedSeats: ['A1R6S10', 'A1R6S11'],
      soldSeats: ['A1R6S14', 'A1R6S15', 'A1R6S18', 'A1R6S19', 'A1R6S20'],

    }
  };


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

  console.log(selectedSeats)
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
