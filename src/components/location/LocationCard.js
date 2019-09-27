import React, { Component } from "react";

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("./location.jpeg")} alt="Location" />
                    </picture>
                    <h3>
                        Name: <span className="card-Location">Cornfish Emporium</span>
                    </h3>
                    <p>Brick and Mortar Store</p>
                </div>
            </div>
        );
    }
}

export default LocationCard;
