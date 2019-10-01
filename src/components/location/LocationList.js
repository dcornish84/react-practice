import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import AnimalManager from '../../modules/AnimalManager'



class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
        AnimalManager.deleteLocation(id)
            .then(() => {
                AnimalManager.getAllLocations()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Location LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAllLocations()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }

    render() {
        console.log("LocationList: Render");
        return (
            <div className="container-cards">
                {this.state.locations.map(location =>
                    <LocationCard key={location.id} location={location} deleteLocation={this.deleteLocation} />
                )}
            </div>
        )
    }
}

export default LocationList
