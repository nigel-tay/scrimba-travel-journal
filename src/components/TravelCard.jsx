import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import batur from "../assets/images/batur.jpg";
import hanoi from "../assets/images/hanoi.jpg";
import keelung from "../assets/images/keelung.jpg";

export default function TravelCard() {
    return (
        <div className="travelcard-container">
            <div className="row-container">
                <img className="card-image" src={batur} />
                <div className="text-container">
                    <div className="location-section">
                        <FaMapMarkerAlt className="marker-icon" />
                        <h3>COUNTRY TO CHANGE</h3> {/* COUNTRY */}
                        <p className="google-link">
                            <a href="#">View on Google Maps</a> {/* GOOGLE MAPS LINK */}
                        </p> 
                    </div>
                    <h1 className="location-text">LOCATION</h1> {/* LOCATION */}
                    <p className="date-range">DATE RANGE</p>
                    <p className="description-text">
                        It is a long established fact 
                        that a reader will be distracted by the readable content of a page when looking at its
                    </p> {/* DESCRIPTION */}
                </div>
            </div>
            <hr className="horizontal-rule"/> {/* has to be conditional to see if it is the last card or not */}
        </div>
    )
}