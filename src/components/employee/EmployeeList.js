import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import AnimalManager from '../../modules/AnimalManager'
import "./Employee.css"


class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    deleteEmployee = id => {
        AnimalManager.deleteEmployee(id)
            .then(() => {
                AnimalManager.getAllEmployees()
                    .then((newEmployees) => {
                        this.setState({
                            employees: newEmployees
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        AnimalManager.getAllEmployees()
            .then((employees) => {
                this.setState({
                    employees: employees
                })
            })
    }

    render() {
        console.log("EmployeeList: Render");
        return (
            <div className="container-cards">
                {this.state.employees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} deleteEmployee={this.deleteEmployee} />
                ))}
            </div>
        );
    }
}

export default EmployeeList;
