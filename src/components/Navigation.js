import React from "react";

function Navigation(props) {
    return (
        <div className="flex justify-between mt-12">
            <div className="flex">
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1 mr-4">Name</button>
                <button className="bg-white shadow text-gray-800 rounded px-8 py-1">Dept</button>
            </div>
            <input className="px-8 shadow rounded" type="text" placeholder="search employee"/>
        </div>
    )
}

export default Navigation;