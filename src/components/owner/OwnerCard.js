import React, { Component } from "react";

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("./owner.PNG")} alt="Owner" />
                    </picture>
                    <h3>
                        Name: <span className="card-Location">Darrell</span>
                    </h3>
                    <p>Owner</p>
                </div>
            </div>
        );
    }
}

export default OwnerCard;
