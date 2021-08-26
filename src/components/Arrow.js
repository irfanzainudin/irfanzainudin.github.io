import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp,
    faArrowRight,
    faArrowLeft,
    faArrowDown
} from '@fortawesome/free-solid-svg-icons';

function whichArrow(direction) {
    if (direction === "up") {
        return <FontAwesomeIcon icon={faArrowUp} />
    } else if (direction === "left") {
        return <FontAwesomeIcon icon={faArrowLeft} />
    } else if (direction === "down") {
        return <FontAwesomeIcon icon={faArrowDown} />
    } else {
        return <FontAwesomeIcon icon={faArrowRight} />
    }
}

export default function Arrow({ direction, changePage }) {
    return (
        <div className="arrows" onClick={changePage}>
            {
                whichArrow(direction)
            }
        </div>
    )
}