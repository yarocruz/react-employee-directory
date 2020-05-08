import React from "react";

 function EmployeeCard({ name, image, dept, email, phone}) { // it's probably easier to not destructure for an example like this, but it's just for practice
    return (
        <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between">
            <img
                style={{ maxWidth: "50px"}}
                className="rounded-full shadow-md"
                src={image}
                alt="employee"
            />
            <p className="font-bold text-md">{name}</p>
            <p>{dept}</p>
            <p className="text-blue-500">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeCard;