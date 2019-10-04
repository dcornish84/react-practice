import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">

                    <picture>
                        <img src={require('./location.jpeg')} alt="Location" />
                    </picture>
                    <h3>Name: <span className="card-locationname">{firstLetterCase(this.props.loca.name)}</span></h3>
                    <p>Address: {this.props.loca.address}</p>
                    <Link to={`/locations/${this.props.loca.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => { this.props.history.push(`/locations/${this.props.loca.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.loca.id)}>Close</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;

