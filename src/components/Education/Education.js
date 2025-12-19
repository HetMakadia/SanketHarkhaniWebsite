import "./Education.css"
import gradImg from "./education.jpg"

function Education() {
    return (
        <section id="education" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">My Education.</h2>
                </div>

                <div className="grid grid-cols-12 gap-8 mt-8">
                    <div className="content-center col-span-12 items-center justify-self-center text-info">
                            <div className="card px-10 border border-neutral hover:border-white grid grid-cols-12 lg:card-side bg-neutral hover:bg-base-content/5 shadow-xl w-100">
                                <div className="self-center	col-span-12 lg:p-0 lg:col-span-4 justify-self-center	">
                                    <div className="avatar w-42 lg:w-60">
                                        <div className="w-50 rounded-full">
                                            <img className="h-20" src={gradImg} alt="Album"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body self-center  col-span-12 p-4 lg:p-0 lg:col-span-8 ml-8 ">
                                    <br/>
                                    <h2 className="card-title text-xl lg:text-3xl font-bold leading-normal">Master of Management</h2>
                                    <h2 className="card-title text-xl lg:text-xl font-bold leading-normal">Trent University, Canada</h2>
                                    <div className=" text-info edu-text">
                                        <p className="leading-normal"><span className="font-extrabold">• Specialized/Focused area: </span> <span className="italic text-gray-400">Supply Chain Management</span></p>
                                    </div>
                                    <div className="col-span-9 pr-10">
                                        <br/>
                                        <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
                                        <br/>
                                    </div>

                                    <h2 className="card-title text-xl lg:text-3xl font-bold leading-normal">Bachelor of Technology</h2>
                                    <h2 className="card-title text-xl lg:text-xl font-bold leading-normal">Charusat University, India</h2>
                                    <div className=" text-info edu-text">
                                        <p className="leading-normal"><span className="font-extrabold">• Specialized/Focused area: </span> <span className="italic text-gray-400">Electronics & Communication</span></p>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;