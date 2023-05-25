
import React from "react";
function MovieStatus(props) {
    const itemType = props.itemType;

    return (
        <div className='status'>
            <ul>
                <li><a><i className="fa-regular fa-circle"></i>SOLD</a></li>
                <li><a><i className="fa-regular fa-circle"></i>BOOKED</a></li>
                <li><a><i className="fa-regular fa-circle"></i>AVAILABLE</a></li>
                {itemType != "no-selected" &&
                    <li><a><i className="fa-regular fa-circle"></i>SELECTED</a></li>

                }
            </ul>
        </div>
    )
}

export default MovieStatus
