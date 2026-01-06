
import React from "react";


function Certificates() {

    return (
        <section id="certificates" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">My Certifications.</h2>
                </div>
                <div className="mt-8  gap-8 justify-self-center">

                    <ul className="menu w-100 bg-neutral p-8 shadow-lg rounded-box">
                        <li className="menu-title">
                            <span>In-Progress</span>
                        </li>
                        <li><a>‣ SAP EWM</a></li>
                        <br/>
                        <li className="menu-title">
                            <span>Completed</span>
                        </li>
                        <li><a>‣ SAP S4/HANA essential Training</a></li>
                        <li><a>‣ SAP Material Management</a></li>
                        <li><a>‣ SAP Sales & Distribution</a></li>
                        <li><a>‣ SAP Production Planning</a></li>
                        <li><a>‣ Advance MS Excel</a></li>
                        <li><a>‣ Atlassian Project Management Certificate</a></li>
                        <li><a>‣ Analyzing and Visualizing Data with Microsoft Power BI</a></li>
                        <li><a>‣ Lean six sigma: Green Belt</a></li>
                        <li><a>‣ Adult First Aid/CPR/AED certified</a></li>
                        <li><a>‣ ISO 45001: Occupational Health and Safety Management Systems Certified</a></li>
                    </ul>


                </div>
            </div>
        </section>
    )
}
export default Certificates;