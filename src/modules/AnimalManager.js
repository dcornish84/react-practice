const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(result => result.json());
    },
    getAllEmployees() {
        return fetch(`${remoteURL}/employees`).then(result => result.json());
    },

    getAllLocations() {
        return fetch(`${remoteURL}/locations`).then(result => result.json());
    },

    getAllOwners() {
        return fetch(`${remoteURL}/owners`).then(result => result.json());
    },

    deleteAnimal(id) {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

    deleteEmployee(id) {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

    deleteLocation(id) {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

    deleteOwner(id) {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

}