import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        AnimalManager.deleteLocation(this.props.locationId)
            .then(() => this.props.history.push("/location"))
    };

    componentDidMount() {

        AnimalManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./location.jpeg')} alt="Location" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Address: {this.state.address}</p>
                </div>
            </div>
        );
    }
}

export default LocationDetail;