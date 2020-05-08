import React from "react";

function Navigation(props) {
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1 mr-4">Name</button>
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1">Dept</button>
            </div>
            <input className="shadow pl-5 rounded" type="text" placeholder="search employee"/>
        </div>
    )
}

export default Navigation;