import React from "react";

function EmployeeCard(props) {
    return (
        <div className="flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between">
            <img
                style={{ maxWidth: "90px"}}
                className="rounded-full shadow"
                src="https://randomuser.me/api/portraits/women/90.jpg"
                alt="employee"
            />
            <p>Lisa Simpson</p>
            <p>Sales</p>
            <p>lissimp@email.com</p>
            <p>555-321-2345</p>
        </div>
    )
}

export default EmployeeCard;