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
                    <div className="contacts-form">
                        <form onSubmit={handleContactForm}>
                            <div className="input-container">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="form-input"
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-input"
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="form-message"
                                />
                            </div>
                            <div className="submit-btn">
                                <button type="submit">
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className="submit-icon">
                                        <AiOutlineSend
                                            className="send-icon"
                                            style={{
                                                animation: !success ? 'initial' : 'fly 0.8s linear both',
                                                position: success ? 'absolute' : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className="success-icon"
                                            style={{
                                                display: !success ? 'none' : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        {open && (
                            <div className="snackbar">
                                <div className="snackbar-content">
                                    <span>{errMsg}</span>
                                    <button onClick={handleClose} className="snackbar-close">
                                        &times;
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
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
