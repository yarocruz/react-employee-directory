import React from "react";
import EmployeeCard from "./EmployeeCard";


function EmployeeCardList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.id}
                image={employee.image}
                name={employee.name}
                dept={employee.department}
                email={employee.email}
                phone={employee.phone}
            />
            ))
    )
}

export default EmployeeCardList;