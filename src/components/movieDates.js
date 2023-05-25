import React, { useEffect, useState } from 'react';

function MovieDates() {
    const [dates, setDates] = useState([]);

    useEffect(() => {
      const currentDate = new Date();
      const suffixes = ["th", "st", "nd", "rd"];
  
      const formattedDates = Array.from({ length: 5 }, (_, i) => {
        if (i === 0) {
          return "Today";
        } else if (i === 1) {
          return "Tomorrow";
        } else {
          const day = currentDate.getDate() + i;
          const suffix = day >= 11 && day <= 13 ? suffixes[0] : suffixes[day % 10] || suffixes[0];
          const formattedDate = `${day}${suffix} ${currentDate.toLocaleString("en-us", { month: "long" })}`;
          return formattedDate;
        }
      });
  
      setDates(formattedDates);
    }, []);
    return (
        <div className='dates'>
            <ul>
                {dates.map((date, index) => (
                    <li key={index} className={(index === 0) && 'active'}>
                        <a>{date}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieDates
