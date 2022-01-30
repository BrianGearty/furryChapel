import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = ({ }) => {

    return (
        <nav className="navbar navbar-expand-lg comp-navigation ">
            <div className="collapse navbar-collapse" id="navbarSupported">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/animals">Shelter Animals</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/register">Register Animal</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/adopter">Register Adopter</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}
export default Navigation;