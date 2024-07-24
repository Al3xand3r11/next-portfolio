"use client"

import React, {useRef} from "react";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [isError, setIsError] = useState(false)

    const form = useRef();

    const handleScroll = () => {
        window.scrollTo({
          top:0,
          behavior:'smooth',
        })
      }
    

    const sendEmail = (e: any) => {
        e.preventDefault();

        const serviceID = 'service_pma3dql'
        const templateID = 'template_wrc6l1a'
        const publicKey = '7rv-9u7Zg-84Mkoh-'

        const templateParams = {
            from_name: name,
            email: email,
            to_name: 'Brandon',
            message: message,
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response: any) => {
            console.log('Email sent successfully', response)
            setName('');
            setEmail('');
            setMessage('');
            handleScroll();
            setIsError(false)
            setShowModal(true)
        }).catch((error: Error) => {
            console.error('Error sending email', error);
            handleScroll();
            setIsError(true)
            setShowModal(true)
        });
    }


    return (
    <div className='bg-tan w-full h-auto bg-cover bg-center pt-60'>
        <div className=" px-4 mx-auto max-w-screen-md  rounded-lg">
            <div className="p-4">
                {showModal && (
                    <div>
                    { !isError ? (
                <div className="p-4 mb-4 text-green-800 border border-green-900 rounded-lg bg-green-300 flex flex-row justify-between">
                <div>
                <p>Your form has been sent successfully. Brandon will reach out to you soon!</p>
                </div>
                <div onClick={() => {
                setShowModal(false);
                }}>
                    <IoIosClose className="text-2xl"/>
                </div>
                </div>
                ) : (
                    <div className="p-4 mb-4 text-red-800 border border-red-900 rounded-lg bg-red-300 flex flex-row justify-between">
                    <div>
                    <p>There was an error in submitting your form!</p>
                    </div>
                    <div onClick={() => {
                    setShowModal(false);
                    }}>
                        <IoIosClose className="text-2xl"/>
                    </div>
                    </div>
                )} 
                    </div>
                )}
                
                <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Whether you are looking for guidance, looking for an employee or just want to chat</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="fname" className="block mb-2 text-sm font-medium text-black">Name</label>
                        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                            type="text" 
                            name="user_name"
                            id="fname" 
                            placeholder="John Smith" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                            type="email" 
                            name="user_email" 
                            id="email"  
                            placeholder="name@brandon.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                            id="message" 
                            name="message"  
                            placeholder="Leave a comment..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            > 
                            </textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg border-black border">Send message</button>
                </form>
             </div>
        </div>
    </div>
    );
}

export default Contact;