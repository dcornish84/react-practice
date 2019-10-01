import React, { Component } from "react";

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("./employee.jpg")} alt="Employee" />
                    </picture>
                    <h3>
                        Name: <span className="card-petname">{this.props.employee.name}</span>
                    </h3>
                    <p>Breed: {this.props.employee.breed}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;
