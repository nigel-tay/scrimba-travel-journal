import React from "react";
import { FaGlobeAmericas } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className="flex justify-center items-center h-14 bg-main-red mb-12">
            <FaGlobeAmericas className="w-6 text-white" />
            <h2 className="text-white font-medium text-sm">my travel journal</h2>
        </div>
    )
}