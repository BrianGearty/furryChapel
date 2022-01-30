import React, { useState, useEffect, useCallback } from 'react';
import DatePicker from "react-datepicker";
import '../Styles/main.scss';
import Form from '../Components/form';

const Register = () => {

    // // SET ANIMAL TYPE
    // const [animalType, setAnimalType] = useState(null)
    // const animalUpdate = (event) => {
    //     setAnimalType(event.target.value)
    // }
    // // SET ANIMAL NAME
    // const [name, setName] = useState('')
    // const nameUpdate = (event) => {
    //     setName(event.target.value)
    // }
    // // FOR USER TO CHOOSE ADTOPED OR NOT
    // const [adoptionStatus, setAdoptionStatus] = useState(null)
    // const adoptionUpdate = (event) => {
    //     setAdoptionStatus(event.target.value)
    // }
    // // SET EXTRA INFO ABOUT ANIMAL
    // const [extraInfo, setExtraInfo] = useState('')
    // const extraInfoUpdate = (event) => {
    //     setExtraInfo(event.target.value)
    // }
    // // SET REGISTER AND ADOPTION DATES
    // const [selectedRegisterDate, setSelectedRegisterDate] = useState(null)
    // const [selectedAdoptionDate, setSelectedAdoptionDate] = useState(null)

    // const [categoryId, setCategoryId] = useState(null)
    

    // // useEffect(()=>{
    // //     if(animalType === "Cat"){
    // //         setCategoryId(1)
    // //     } else if (animalType === "Dog"){
    // //         setCategoryId(2)
    // //     }
    // // }, [animalType])



    // // Submit Registration form
    // const handleSubmit = () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             animal_type: animalType,
    //             animal_name: name,
    //             adopt_status: adoptionStatus,
    //             extra_info: extraInfo,
    //             register_date: JSON.stringify(selectedRegisterDate).split("T")[0],
    //             adopt_date: JSON.stringify(selectedAdoptionDate).split("T")[0],
    //             category_id: categoryId
    //         })
    //     }
    //     //  API TO PUSH FORM INFO TO DB
    //     fetch("/api/animal", requestOptions)
    //         .then((response) => {
    //             response.json();
    //         }).then(
    //             setName(null),
    //             setAnimalType(null),
    //             setAdoptionStatus(null),
    //             setExtraInfo(null),
    //             setSelectedRegisterDate(null),
    //             setSelectedAdoptionDate(null),
    //         )
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div>
            <h4 className="card-header register">
                        Animal Registration
                    </h4>
        <Form />
        </div>
    )
}
export default Register;