import React, { useState } from 'react';
import Hall from './hall';
import Showtime from './showtime';

function TicketForm() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAudi, setSelectedAudi] = useState(null);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState(null);
  const [showSeatSelection, setShowSeatSelection] = useState(false);

  const handleSelectedTime = (selectedTime, audi) => {
    setSelectedTime(selectedTime);
    setSelectedAudi(parseInt(audi))
    setError(null);
  };

 

  const handleSeatSelection = (seatKey) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatKey)
        ? prevSelectedSeats.filter((seat) => seat !== seatKey)
        : [...prevSelectedSeats, seatKey]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedTime) {
      setShowSeatSelection(true);
    } else {
      setError('Please select a time.');
    }
  };
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
            {showSeatSelection && (
              <fieldset className="theater-hall">
                <Hall audiNumber={selectedAudi} onSeatSelection={handleSeatSelection} />
              </fieldset>
            )}
          </div>
          <fieldset>
            {error && <div className="error-div">{error}</div>}
          </fieldset>
          <fieldset className="d-flex justify-content-center button-container">
            {!showSeatSelection ? (
              <button className="continue-booking" name="continue-booking" type="submit">
                Continue Booking
              </button>
            ) : (
              <button className="continue-booking" name="continue-booking">
                Pay now
              </button>
            )}
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default TicketForm;
