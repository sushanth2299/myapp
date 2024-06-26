import React, { useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { socialsData } from "../data/socialsData";
import { contactsData } from "../data/contactsData";
import "./Contacts.css";

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();
        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = { name, email, message };
                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    setSuccess(true);
                    setErrMsg('');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                }).catch(err => {
                    setErrMsg('Something went wrong. Please try again.');
                    setOpen(true);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className="contacts">
            <div className="contacts--container">
                <h1>Contact Me</h1>
                <div className="contacts-body">
                    
                    <div className="contacts-details">
                        <a href={`mailto:${contactsData.email}`} className="personal-details">
                            <div className="details-icon">
                                <FiAtSign />
                            </div>
                            <p>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className="personal-details">
                            <div className="details-icon">
                                <FiPhone />
                            </div>
                            <p>{contactsData.phone}</p>
                        </a>
                        <div className="personal-details">
                            <div className="details-icon">
                                <HiOutlineLocationMarker />
                            </div>
                            <p>{contactsData.address}</p>
                        </div>
                        <div className="socialmedia-icons">
                            {socialsData.twitter && (
                                <a href={socialsData.twitter} target="_blank" rel="noreferrer" className="social-icon">
                                    <FaTwitter aria-label="Twitter" />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target="_blank" rel="noreferrer" className="social-icon">
                                    <FaGithub aria-label="GitHub" />
                                </a>
                            )}
                            {socialsData.linkedin && (
                                <a href={socialsData.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                                    <FaLinkedinIn aria-label="LinkedIn" />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a href={socialsData.instagram} target="_blank" rel="noreferrer" className="social-icon">
                                    <FaInstagram aria-label="Instagram" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contacts;
