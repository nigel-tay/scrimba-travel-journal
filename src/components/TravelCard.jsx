import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function TravelCard({travelInfo, id}) {

    let {image, country, gmaplink, landmark, date, description} = travelInfo;

    return (
        <div className="pt-0 px-10 pb-4">
            <div className="flex">
                <img src={image} className="w-32 h-40 object-cover" />
                <div className="pl-5 h-40">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-main-red" />
                        <h3 className="font-normal text-xs pl-1">{country}</h3>
                        <p className="font-normal text-xs pl-3 flex pb-px">
                            <a className="text-link-grey " href={gmaplink} target="_blank">View on Google Maps</a>
                        </p> 
                    </div>
                    <h1 className="font-bold text-2xl">{landmark}</h1>
                    <p className="font-bold text-xs">{date}</p>
                    <p className="font-normal text-xs">{description}</p>
                </div>
            </div>
            { id === 2 ? "" : <hr className="mt-5"/> }
        </div>
    )
}