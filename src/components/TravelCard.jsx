import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function TravelCard({travelInfo, id}) {

    let {image, country, gmaplink, landmark, date, description} = travelInfo;

    return (
        <div className="travelcard-container">
            <div className="row-container">
                <img src={image} className="card-image" />
                <div className="text-container">
                    <div className="location-section">
                        <FaMapMarkerAlt className="marker-icon" />
                        <h3>{country}</h3> {/* COUNTRY */}
                        <p className="google-link">
                            <a href={gmaplink} target="_blank">View on Google Maps</a> {/* GOOGLE MAPS LINK */}
                        </p> 
                    </div>
                    <h1 className="location-text">{landmark}</h1> {/* LANDMARK */}
                    <p className="date-range">{date}</p> {/* DATE RANGE */}
                    <p className="description-text">{description}</p> {/* DESCRIPTION */}
                </div>
            </div>
            { id === 2 ? "" : <hr className="horizontal-rule"/> }
        </div>
    )
}