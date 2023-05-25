import React, { useState } from 'react';


function Showtime({ onSelectedTime }) {
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeSelection = (time, audi) => {
        setSelectedTime(time);
        onSelectedTime(time, audi); 
        
    };
    return (
        <>
            <h3>Select Time</h3>
            <div className='row single-audi-details justify-content-between align-items-center'>
                <div className='col-3 audi'>
                    <p>Audi 1</p>
                </div>
                <div className='col-8 times'>
                    <ul>
                        <li className={'sold'}>
                            <a>9:00 AM</a>
                        </li>
                        <li className={selectedTime === '10:00 PM' ? 'selected' : ' '} onClick={() => handleTimeSelection('10:00 PM', '1')}>
                            <a onClick={() => handleTimeSelection('10:00 PM', '1')}>12:00 AM</a>
                        </li>
                        <li className={`booked ${selectedTime === '12:00 PM' ? 'selected' : ' '}`} onClick={() => handleTimeSelection('12:00 PM', '1')}>
                            <a onClick={() => handleTimeSelection('12:00 PM', '1')}>11:00 PM</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row single-audi-details justify-content-between align-items-center'>
                <div className='col-3 audi'>
                    <p>Audi 2</p>
                </div>
                <div className='col-8 times'>
                    <ul>
                    <li className={selectedTime === '1:00 PM' ? 'selected' : ' '} onClick={() => handleTimeSelection('1:00 PM', '2')}>
                            <a onClick={() => handleTimeSelection('1:00 PM', '2')}>1:00 PM</a>
                        </li>
                        <li className={selectedTime === '4:00 PM' ? 'selected' : ' '} onClick={() => handleTimeSelection('4:00 PM', '2')}>
                            <a onClick={() => handleTimeSelection('4:00 PM', '2')}>4:00 PM</a>
                        </li>
                        <li className={`booked ${selectedTime === '7:00 PM' ? 'selected' : ' '}`} onClick={() => handleTimeSelection('7:00 PM', '2')}>
                            <a onClick={() => handleTimeSelection('7:00 PM', '2')}>7:00 PM</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row single-audi-details justify-content-between align-items-center'>
                <div className='col-3 audi'>
                    <p>Audi 3</p>
                </div>
                <div className='col-8 times'>
                    <ul>
                        <li className={'sold'}>
                            <a>8:00 PM</a>
                        </li>
                        <li className={selectedTime === '11:00 PM' ? 'selected' : ' '} onClick={() => handleTimeSelection('11:00 PM', '3')}>
                            <a onClick={() => handleTimeSelection('11:00 PM', '3')}>11:00 PM</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Showtime
