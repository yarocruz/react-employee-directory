import React from "react";

function EmployeeCard(props) {
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between">
            <img
                style={{ maxWidth: "90px"}}
                className="rounded-full shadow-md"
                src={props.image}
                alt="employee"
            />
            <p className="font-bold text-md">{props.name}</p>
            <p>{props.dept}</p>
            <p className="text-blue-500">{props.email}</p>
            <p>{props.phone}</p>
        </div>
    )
}

export default EmployeeCard;