import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HiOutlineBarsArrowDown, HiOutlineBarsArrowUp} from 'react-icons/hi2';
import { setModalData } from "../redux/slices/jobsSlice";
import { useDispatch } from "react-redux";

export default function Header () {
    const dispatch = useDispatch();
    const [openNav, setOpenNav] = useState(false);
    const toggle = () => {setOpenNav(!openNav)}
    const openModal = () => {
        dispatch(setModalData({data: '', openModal: true}))
        setOpenNav(false)
    }
    return (
        <div className="header">
            
            <div className="container">
                <Link to='/' className="logo">
                    <img src="https://freesvg.org/img/AnimalSilhouettes2-Penguin.png" alt="logo" />
                    Unemployed
                </Link>
                <nav className="desktop-nav">
                    <ul>
                        <li>
                            <Link to='/' className="active">Find Job</Link>
                        </li>
                        <li>
                            <Link to="/">Companies</Link>
                        </li>                  
                        <li>
                            <p onClick={() => dispatch(setModalData({data: '', openModal: true}))}>Add Job</p>
                        </li>
                    </ul>
                </nav>
                <HiOutlineBarsArrowDown onClick={toggle} className={openNav ? "d-none" : "open-nav-icon"} />
                <HiOutlineBarsArrowUp onClick={toggle} className={openNav ? "close-nav-icon" : "d-none"} />
                <div className={openNav ? "t-1 mobile" : "t-0 mobile"}>
                    <nav className="mobile-nav">
                        <ul>
                            <li>
                                <Link to='/' className="active">Find Job</Link>
                            </li>
                            <li>
                                <Link to="/">Companies</Link>
                            </li>                  
                            <li>
                                <p onClick={() => openModal()}>Add Job</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}