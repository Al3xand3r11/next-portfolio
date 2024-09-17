const Experience = () => {
    return (
        <>
            <div className="pl-10 pt-60">
            <h1 className="text-4xl font-extrabold pb-8">Experience</h1>
            <ol className="relative border-s border-gray-700">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 borderborder-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">September 2021</time>
                        <h3 className="text-lg font-bold text-gray-900">Technician - Apple </h3>
                        <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">• Improved service quality consistently maintaining 100% customer satisfaction and increased
sales by developing strong knowledge of company products and services <br/>
• Frequently served as an intermediary between technical workers and customers when
discussing technical problems and optimal solutions <br/>
• Maintained high-volume workload within fast paced environment and consistently met
performance benchmarks</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
                        <h3 className="text-lg font-bold text-gray-900">Graduation - Towson University</h3>
                        <p className="text-base font-semibold text-gray-500 dark:text-gray-400">• Degree: Computer Science <br/> • GPA: 3.0 <br/> • Coursework: Software Engineering | Data Structures and Algorithms | Object Oriented Programming | Database Management
| Operating Systems | Web Development | Cryptography | Calculus 2 | Data Networks and Communications</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022</time>
                        <h3 className="text-lg font-bold text-gray-900 ">Sowftware Engineer - Paramount</h3>
                        <p className="text-base font-semibold text-gray-500 dark:text-gray-400">•Transformed my role from front end to full stack through leading sprint sessions involving the mockup, discussions and ultimately the creation and implementation on a backend service of a vital internal tool that did not exist with one previously <br/>
                        •Developed a nest.js service that determines permissions for a user based on if the query returns a dev, stage or prod instance resulting in fewer mistakes from customers within different orgs <br/>
                        •Implemented a docker instance that maintains the integrity of the nest.js backend server to hide important api keys using armada as well as reduce error within users build environments <br/>
                        •Constructed Nest.Js backend api endpoints that allowed video uploads to Paramount aws s3 bucket <br/>
                        •Created a postgres database that stores user preferences for the site in a JSON blob and returns features like dark
mode, channels, and more based on their email credentials</p>
                    </li>
            </ol>
            </div>
        </>
    )
}

export default Experience;