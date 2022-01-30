import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';
import Modal from '../Components/modal';

const ShelterAnimals = () => {


    const [state, setState] = useState({
        animals: [],
        filteredAnimals: [],
        animalsToUpdate: []
    })


    useEffect(() => {
        fetch("/api/animal").then(res => res.json()).then((data) => {
            console.log("DATA FROM DB", data)

            setState({ ...state, animals: data, filteredAnimals: data })

        })
    }, [state.animalsToUpdate])

    const handleNameTyping = (event) => {
        let newFiltered = []

        for (let i = 0; i < state.animals.length; i++) {

            if (event.target.value.toLowerCase() === state.animals[i].name.substr(0, event.target.value.length).toLowerCase()) {
                newFiltered.push(state.animals[i])
            }
        }

        setState({ ...state, filteredAnimals: newFiltered })
    }

    const handleTypeTyping = (event) => {
        let newFiltered = []

        for (let i = 0; i < state.animals.length; i++) {

            if (event.target.value.toLowerCase() === state.animals[i].animalType.substr(0, event.target.value.length).toLowerCase()) {
                newFiltered.push(state.animals[i])
            }
        }

        setState({ ...state, filteredAnimals: newFiltered })
    }

    let animalsToDisplay = state.filteredAnimals;

    const updateAnimal = (animal) => {
        const updateForm = document.getElementById("updateForm")
        updateForm.removeAttribute("class");

        setState({ ...state, animalsToUpdate: animal })
    }

    const deleteAnimal = (animal) => {
        fetch(`/api/animal/${animal.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setState({ ...state, animalsToUpdate: animal })
    }


    return (
        <div>
            <div>
                <div className="search text-center">
                    <div>
                    <label><h5 className="input">Animal Type</h5>
                    <input type='text' className="textArea" onChange={handleTypeTyping}></input>
                    </label>
                    </div>
                    <div>
                    <label><h5 className="input">Animal Name</h5>
                    <input type='text' className="textArea" onChange={handleNameTyping}></input>
                    </label>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 register">
                            <table className='table' style={{ width: "80%", margin: "auto" }}>
                                <tbody>
                                    <tr>
                                        <th><h4 className="tableHeader"></h4></th>
                                        <th><h4 className="tableHeader"></h4></th>
                                        <th><h4 className="tableHeader">Name</h4></th>
                                        <th><h4 className="tableHeader">Animal Type</h4></th>
                                        <th><h4 className="tableHeader">Adoption Status</h4></th>
                                        <th><h4 className="tableHeader">Extra Info</h4></th>
                                        <th><h4 className="tableHeader">Entered Shelter on</h4></th>
                                        <th><h4 className="tableHeader">Adoption Date</h4></th>
                                        <th><h4 className="tableHeader">Adopted By</h4></th>
                                    </tr>
                                </tbody>
                                {animalsToDisplay.map((animal, i) => {
                                    return (
                                        <tbody key={animal.id}>
                                            <tr>
                                                <td><button className="btn-sm editBtn btn-success" onClick={() => updateAnimal(animal)}>Edit</button></td>
                                                <td><button className="btn-sm deleteBtn btn-danger" onClick={() => deleteAnimal(animal)}>Delete</button></td>
                                                <td><h3 className="animalName">{animal.animal_name} </h3></td>
                                                <td><h4 className="animalAttr">{animal.animal_type}</h4></td>
                                                <td><h4 className="animalAttr">{animal.adopt_status}</h4></td>
                                                <td><h4 className="animalAttr">{animal.extra_info}</h4></td>
                                                <td><h4 className="animalAttr">{animal.register_date}</h4></td>
                                                <td><h4 className="animalAttr">{animal.adopt_date}</h4></td>
                                                {animal.adopters.map((adopter, i) => (
                                                    <td key={i}><h4 className="animalAttr">{adopter.adopter_name}<div>{adopter.adopter_address}</div><div>{adopter.phone_number}</div></h4></td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    )
                                })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="updateForm" className="hide">
                    <div className="row">
                        <div className="col-lg-12">
                            <Modal update={state.animalsToUpdate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShelterAnimals;

