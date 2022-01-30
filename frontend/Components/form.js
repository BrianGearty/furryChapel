import React, { useState, useEffect } from 'react';
import '../Styles/main.scss';
import DatePicker from "react-datepicker";



const Form = (props) => {

    let isEditMode = props.editMode;
    let setIsEditMode = props.setEditMode;

    const [addMode, setAddMode ] = useState(true)

    // SET ANIMAL TYPE
    const [animalType, setAnimalType] = useState(null)
    const animalUpdate = (event) => {
        setAnimalType(event.target.value)
    }
    // SET ANIMAL NAME
    const [name, setName] = useState('')
    const nameUpdate = (event) => {
        setName(event.target.value)
    }
    // FOR USER TO CHOOSE ADTOPED OR NOT
    const [adoptionStatus, setAdoptionStatus] = useState(null)
    const adoptionUpdate = (event) => {
        setAdoptionStatus(event.target.value)
    }
    // SET EXTRA INFO ABOUT ANIMAL
    const [extraInfo, setExtraInfo] = useState('')
    const extraInfoUpdate = (event) => {
        setExtraInfo(event.target.value)
    }
    // SET REGISTER AND ADOPTION DATES
    const [selectedRegisterDate, setSelectedRegisterDate] = useState(null);
    const selectedRegisterDateUpdate = (event) => {
        setSelectedRegisterDate(event.target.value)
    }
    const [selectedAdoptionDate, setSelectedAdoptionDate] = useState(null)

    const [categoryId, setCategoryId] = useState(null)
    

    useEffect(()=>{
        if(animalType === "Cat"){
            setCategoryId(1)
        } else if (animalType === "Dog"){
            setCategoryId(2)
        }
    }, [animalType])


    useEffect(()=>{
        if(isEditMode){
            setAddMode(false)
        }
    }, [setAddMode])

    const handleSubmit = (e) => {
        e.preventDefault();
        // if its not updating the animal than its creating animaml
        return (isEditMode ? updateAnimal() : createAnimal())

    }

    const handleCancel = (e)=>{
        e.preventDefault();
        props.closeModal();

    }

    const updateAnimal = (e) => {

        // e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                animal_type: animalType,
                animal_name: name,
                adopt_status: adoptionStatus,
                extra_info: extraInfo,
                register_date: JSON.stringify(selectedRegisterDate).split("T")[0],
                adopt_date: JSON.stringify(selectedAdoptionDate).split("T")[0],
                category_id: props.update.category_id
            })
        }

        console.log("REQUEST OPTIONS", requestOptions)

        const idToUpdate = props.update.id
        console.log("ID TO UPDATE", idToUpdate)
        //  API TO PUSH FORM INFO TO DB
        fetch(`/api/animal/${idToUpdate}`, requestOptions)
            .then((response) => {
                response.json();
            }).then(
                setName(""),
                setAnimalType(null),
                setAdoptionStatus(null),
                setExtraInfo(null),
                setSelectedRegisterDate(null),
                setSelectedAdoptionDate(null),
            )
            .catch(err => {
                console.log("ERR FROM UPDATE", err)
            })

            props.closeModal()
    }

    const createAnimal = (e) => {
        let formattedDate = JSON.stringify(selectedRegisterDate)
        console.log(selectedRegisterDate)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                animal_type: animalType,
                animal_name: name,
                adopt_status: adoptionStatus,
                extra_info: extraInfo,
                register_date: selectedRegisterDate,
                adopt_date: selectedAdoptionDate,
                category_id: categoryId
            })
        }
        //  API TO PUSH FORM INFO TO DB
        fetch("/api/animal", requestOptions)
            .then((response) => {
                response.json();
            }).then(
                setName(null),
                setAnimalType(null),
                setAdoptionStatus(null),
                setExtraInfo(null),
                setSelectedRegisterDate(null),
                setSelectedAdoptionDate(null),
            )
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className={addMode ? "container col-lg-6 addForm" : "container" }>
            <h1 className='formHeader' >{addMode ? 'Add Animal' : 'Edit Animal'}</h1>
                <form className="card-text">
                    <div className="card-body">
                        <div className="form-group">
                            <label className='formHeader'>Animal Type</label>
                            <div className="form-check electricRadioBtn">
                                <input onChange={animalUpdate} checked={animalType === 'Dog'} className="form-check-input" type="checkbox" value="Dog" id="AnimalTypeRadioBtn"></input>
                                <label className="formHeader form-check-label">
                                    Dog</label>
                            </div>
                            <div className="form-check electricRadioBtn">
                                <input onChange={animalUpdate} checked={animalType === 'Cat'} className="form-check-input" type="checkbox" value="Cat" id="AnimalTypeRadioBtn"></input>
                                <label className="formHeader form-check-label">
                                    Cat</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='formHeader'>Animal Name</label>
                            <input required onChange={nameUpdate} type="text" className="form-control formInput" id="nameInput" placeholder="" name="Name"></input>
                        </div>
                        <div className="form-group">
                            <label className='formHeader'>Adoption Status</label>
                            <div className="form-check electricRadioBtn">
                                <input onChange={adoptionUpdate} checked={adoptionStatus === 'Adopted'} className="form-check-input" type="checkbox" value="Adopted" id="StatusRadioBtn"></input>
                                <label className="formHeader form-check-label">
                                    Adopted</label>
                            </div>
                            <div className="form-check electricRadioBtn">
                                <input onChange={adoptionUpdate} checked={adoptionStatus === 'Not Adopted'} className="form-check-input" type="checkbox" value="Not Adopted" id="StatusRadioBtn"></input>
                                <label className="formHeader form-check-label">
                                    Not Adopted</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='formHeader' >Extra Info</label>
                            <input required onChange={extraInfoUpdate} type="text" className="form-control formInput" id="extraInfo" placeholder="" name="Extra Info"></input>
                        </div>
                        <div className="startDate">
                            <div><label className="formHeader startDate">Register Date</label></div>
                            <DatePicker type='text' selected={selectedRegisterDate} onChange={(date) => {setSelectedRegisterDate(date)}}

                                isClearable
                                dateFormat="MM/dd/yyy"
                                placeholderText=""
                            />
                        </div>
                        <div className="adoptDate">
                            <div><label className="formHeader adoptDate">Adoption Date</label></div>
                            <DatePicker type='text' className="datePickerInput2" selected={selectedAdoptionDate} onChange={(date) => {setSelectedAdoptionDate(date)}}
                                minDate={selectedRegisterDate}
                                isClearable
                                dateFormat="MM/dd/yyy"
                                placeholderText=""
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleSubmit} className="btn btn-success updateBtn">{addMode ? ("Add Animal" ): ('Update Animal')}</button>
                        <button type="button" onClick={handleCancel} className="btn btn-danger updateBtn" data-dismiss="modal">Cancel</button>       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;