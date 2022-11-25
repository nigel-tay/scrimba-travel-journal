import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import batur from "../assets/images/batur.jpg";
import hanoi from "../assets/images/hanoi.jpg";
import keelung from "../assets/images/keelung.jpg";

export default function TravelCard() {
    return (
        <div className="travelcard-container">
            <img />
            <div className="location-section">
                <FaMapMarkerAlt />
                <h3>COUNTRY TO CHANGE</h3> {/* COUNTRY */}
                <p>GOOGLE MAPS LINK</p> {/* GOOGLE MAPS LINK */}
            </div>
            <h1>LOCATION</h1> {/* LOCATION */}
            <p>DESCRIPTION</p> {/* DESCRIPTION */}
        </div>
    )
}