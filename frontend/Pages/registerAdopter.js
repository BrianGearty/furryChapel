import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';

const RegisterAdopter = () => {
    // Loading for Animals to populate drop down
    const [loading, setLoading] = React.useState(true);
    // ANIMALS TO DISPLAY FOR ADOPTION
    const [animals, setAnimals] = useState({
        animalsToAdopt: []
    })
    const animalUpdate = (event) => {
        setAnimals({ animalsToAdopt: [event.currentTarget.value] })
        console.log("SELECTED ADOPT ANIMAL", event.currentTarget.value)
    }
    // // SET ANIMAL ADOPTED BY
    // const [adoptedAnimal, setAdoptedAnimal] = useState(null)
    // const adoptedAnimalUpdate = (event) => {
    //     setAdoptedAnimal(event.target.value)
    // }
    // SET ANIMAL ADOPTED BY
    const [adoptedBy, setAdoptedBy] = useState(null)
    const adoptedByUpdate = (event) => {
        setAdoptedBy(event.target.value)
    }
    // SET ANIMAL ADOPTER PHONE NUMBER
    const [adoptedByPhone, setAdoptedByPhone] = useState(null)
    const adoptedByPhoneUpdate = (event) => {
        setAdoptedByPhone(event.target.value)
    }
    // SET ANIMAL ADOPTER ADDRESS
    const [adoptedByAddress, setAdoptedByAddress] = useState(null)
    const adoptedByUpdateAddress = (event) => {
        setAdoptedByAddress(event.target.value)
    }

    useEffect(() => {
        fetch("/api/animal/adopt").then(res => res.json()).then((data) => {
            setAnimals({ ...animals, animalsToAdopt: data })
            setLoading(false);
        })
    }, [])

    console.log(animals)

    // Submit Registration form
    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                animal_id: animals.animalsToAdopt[0],
                adopter_name: adoptedBy,
                phone_number: adoptedByPhone,
                adopter_address: adoptedByAddress
            })
        }
        //  API TO PUSH FORM INFO TO DB
        fetch("/api/adopter", requestOptions)
            .then((response) => {
                response.json();
            }).then(
                setAnimals(''),
                setAdoptedBy(''),
                setAdoptedByPhone(''),
                setAdoptedByAddress(''),
            )
            .catch(err => {
                console.log(err)
            })
    }

    // console.log(animals.animalsToAdopt)


    return (
        <div>
            <div className="container RegisterForms ml-2">

                <div className="card card-text">
                    <h4 className="card-header">
                        Adopter Information</h4>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="form-group">
                                <label>Adopted Animal</label>
                                <select disabled={loading} required onChange={e => animalUpdate(e)}  placeholder={"Animals To Adopt"}  value={{ label: "Select Dept"}} className="form-control formInput" id="animal-name" name="Adopted Animal">
                                    {animals.animalsToAdopt.map((animal, i) => {
                                        return (
                                            <option value={animal.id} key={i}>{animal.animal_name}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Adopted By</label>
                                <input required onChange={adoptedByUpdate} type="input" className="form-control formInput" id="nameInput" placeholder="Adopted By" name="adoptedBy"></input>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input required onChange={adoptedByPhoneUpdate} type="input" className="form-control formInput" id="nameInput" placeholder="Adopted By" name="phoneNumber"></input>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input required onChange={adoptedByUpdateAddress} type="input" className="form-control formInput" id="nameInput" placeholder="Adopted By" name="address"></input>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="formSubmit btn">Register Adopter!</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterAdopter;