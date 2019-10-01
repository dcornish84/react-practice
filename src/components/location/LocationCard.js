import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require("./petHotel.jpg")} alt="Location" />
                    </picture>
                    <h3>
                        Name: <span className="card-petname">{this.props.location.name}</span>
                    </h3>
                    <p>Address: {this.props.location.address}</p>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Down</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;
