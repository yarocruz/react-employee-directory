import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import employees from "../data/employees.json";

class EmployeeCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees,
        }
    }
    render() {
        return (
            this.state.employees.map(employee => (
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
}

export default EmployeeCardList;