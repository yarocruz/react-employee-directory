import React from "react";
import EmployeeCard from "./EmployeeCard";


function EmployeeCardList ({ data }) { // another fancy destructuring to avoid typing props.data.map down below
    return (
        data.map(employee => (
            <EmployeeCard
                key={employee.cell}
                image={employee.picture.medium}
                firstName={employee.name.first}
                surName={employee.name.last}
                email={employee.email}
                phone={employee.phone}
            />
            ))
    )
}

export default EmployeeCardList;