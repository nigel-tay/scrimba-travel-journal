import React from "react";
import { FaGlobeAmericas } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <FaGlobeAmericas className="globe-icon" />
            <h2 className="navbar-text">my travel journal</h2>
        </div>
    )
}