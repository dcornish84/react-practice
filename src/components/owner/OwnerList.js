import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import AnimalManager from '../../modules/AnimalManager'



class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    deleteOwner = id => {
        AnimalManager.deleteOwner(id)
            .then(() => {
                AnimalManager.getAllOwners()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Owner LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        AnimalManager.getAllOwners()
            .then((owners) => {
                this.setState({
                    owners: owners
                })
            })
    }

    render() {
        console.log("OwnerList: Render");
        return (
            <div className="container-cards">
                {this.state.owners.map(owner => (
                    <OwnerCard key={owner.id} owner={owner} deleteOwner={this.deleteOwner} />
                ))}
            </div>
        );
    }
}

export default OwnerList;
