import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import {db} from "../../firebase-config"
import { Textarea } from "@material-tailwind/react";
import React, {useEffect, useState} from "react";


function Contact() {
    const dbRef = collection(db, "Notifications")
    const [isDisabled, setIsDisabled] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState();

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        addDoc(dbRef, data)
            .then(docRef => {
                setIsDisabled(!isDisabled)
                console.log("Document has been added successfully");
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <section id="contact" className="justify-self-center text-white bg-base-100 select-none">


            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">..</h2>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-8  ">

                    <div className="content-center col-span-12 items-center justify-self-center text-info">


                        <p className="max-w-xl text-lg text-justify">
                            Thank you for visiting my portfolio. Your interest in my work means a lot to me, and I hope you found it informative and engaging. If you have any inquiries or job opportunities, please feel free to contact me. I'm always eager to connect with people who share my passion.
                        </p>

                        <br/>

                        <div className="text-center">
                            {/*<a href="" className="text-4xl font-bold text-gray-600">*/}
                            {/*    Sanket Harkhani*/}
                            {/*</a>*/}
                            {/*<br/>*/}

                            <br/>
                            <a href="mailto: sanketharkhani53@gmail.com" className="mt-2 text-lg font-bold text-gray-400">
                                sanketharkhani53@gmail.com
                            </a>
                            <address className=" not-italic text-lg font-bold text-gray-400">
                                Ontario, Canada
                            </address>
                            <br/>
                            <div className="flex justify-self-center space-x-6 text-white">
                                <a href="https://www.linkedin.com/in/sanket-harkhani" target="_blank">
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 link" to="" fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>






                </div>
            </div>
        </section>
    )
}
export default Contact;