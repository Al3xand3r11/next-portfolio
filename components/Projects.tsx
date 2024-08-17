import { CardOne } from "./ui/cards/CardOne";
import { CardTwo } from "./ui/cards/CardTwo";
import { CardThree } from "./ui/cards/CardThree";
import { Wobble } from "./ui/Wobble";

const Projects = () => {
    return (
        <div id="Projects" className="pt-24">
             <h1 className="text-center text-4xl font-extrabold">Hosted Projects</h1>
        <div className=" justify-between pl-8 grid lg:grid-cols-3 gap-8 mx-auto ">
            <CardOne/>
            <CardTwo/>
            <CardThree/>
        </div>
            <h1 className="pt-12 pb-8 text-center text-4xl font-extrabold">Github Projects</h1>
        <Wobble/>
        </div>
    )
}

export default Projects;