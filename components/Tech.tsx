import Image from "next/image";

const Tech = () => {
    return (
        <div className="pt-20">
            <div className="flex md:flex-row flex-col  items-center justify-evenly pt-12">
                <Image
                    src="/golang.svg"
                    alt="golang"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/node.svg"
                    alt="node"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/python.svg"
                    alt="python"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/react.svg"
                    alt="react"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/typescript.svg"
                    alt="typescript"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/postgres.svg"
                    alt="postgres"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
                <Image
                    src="/mongodb.svg"
                    alt="mongo"
                    width={100}
                    height={100}
                    className="transfrom transition duration-300 hover:scale-125 pb-2"
                />
            </div>
        </div>
    )
}

export default Tech;