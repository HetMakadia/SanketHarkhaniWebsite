import "./LandingPage.css"
import img from "./hero_main.PNG"
import {Link} from "react-scroll";

function LandingPage() {
    return (
        <section id="main" className=" items-center bg-base-100 content-center grid grid-cols-2 select-none">
            <div className="col-span-2 lg:col-span-1 justify-self-center text-info p-14 lg:p-24">
                <h1 className="main-heading">
                    Bonjour 👋, <br/>   I'm <span className="font-bold text-gray-400">Sanket Harkhani</span>, <br/> <span className="font-bold text-gray-400"></span>Your Next Consultant
                </h1>
                <br/>
                <p className="main-text">
                    Driven by data, structure, and execution within supply chain and operations roles.
                    Strong hands-on exposure to multiple ERP and WMS systems, using data and reporting to improve inventory accuracy, visibility, and execution.
                    Focused on strengthening supply chains through structured processes, collaboration, and continuous improvement.
                    Commitment towards work and strong work ethics are my driving force and contributes significantly towards success of the organization.
                    Whether it's a simple supply chain problem or a complex set of data, I'm always up for a challenge.

                </p>
                <br/>
                <div className="btn p-0">
                    <Link className="group relative rounded-xl inline-block text-sm font-medium focus:outline-none focus:ring text-base-100" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <span className="absolute inset-0 border border-primary group-active:border-primary"/>
                        <span className="block border border-neutral bg-primary px-12 py-3 transition-transform active:border-primary active:bg-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
                         <a>Contact Me</a>
                        </span>
                    </Link>
                </div>

            </div>

            <div className="col-span-2 lg:col-span-1 justify-self-center">
                <img src={img} className="max-w-sm" />
            </div>
        </section>
    )
}

export default LandingPage;