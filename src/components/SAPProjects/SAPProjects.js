import {sapprojects} from "./SAPProjectList";

function SAPProjects() {
    return (
        <section id="sapprojects" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Things I've implemented.</h2>
                </div>
                <br/>
                <div className="mt-8 grid grid-cols-12 gap-8 md:grid-cols-12 lg:grid-cols-12">

                    {sapprojects.map((project) =>

                        // <div className="block justify-self-center text-center rounded-xl border border-gray-800 p-4 lg:p-8 shadow-xl text-gray-500 transition bg-neutral hover:text-white hover:border-white hover:shadow-gray-100/10">
                        //     <ol className=" relative border-gray-200 dark:border-gray-700 grid grid-cols-2">
                        //         <div className="col-span-6 justify-self-center">
                        //             <span className="indicator-item indicator-center badge badge-secondary">{project.name}</span>
                        //             <br/>
                        //             <div className="grid place-items-center">{project.description}</div>
                        //         </div>
                        //     </ol>
                        //
                        // </div>

                            <div className="indicator col-span-6 w-fit">
                                <span className="indicator-item indicator-top indicator-center badge text-black bg-white">{project.name}</span>
                                <div className="col-span-12 border p-4 text-center border-gray-800 rounded-xl place-items-center shadow-xl text-gray-500 transition bg-neutral hover:text-white hover:border-white hover:shadow-gray-100/10">
                                    <br/> {project.description}</div>
                            </div>




                    )}
                </div>
            </div>
        </section>
    )
}

export default SAPProjects;