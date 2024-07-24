import { CardOne } from "./ui/cards/CardOne";
import { CardTwo } from "./ui/cards/CardTwo";
import { CardThree } from "./ui/cards/CardThree";
import { Wobble } from "./ui/Wobble";

const Projects = () => {
    return (
        <>
        <div className="flex flex-row justify-between pl-12">
            <CardOne/>
            <CardTwo/>
            <CardThree/>
        </div>
        <Wobble/>
        </>
    )
}

export default Projects;