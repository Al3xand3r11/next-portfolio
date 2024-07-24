import Image from "next/image";

const Tech = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-evenly pt-60">
                <Image
                    src="/golang.svg"
                    alt="golang"
                    width={100}
                    height={100}
                />
                <Image
                    src="/node.svg"
                    alt="node"
                    width={100}
                    height={100}
                />
                <Image
                    src="/python.svg"
                    alt="python"
                    width={100}
                    height={100}
                />
                <Image
                    src="/react.svg"
                    alt="react"
                    width={100}
                    height={100}
                />
                <Image
                    src="/typescript.svg"
                    alt="typescript"
                    width={100}
                    height={100}
                />
                <Image
                    src="/postgres.svg"
                    alt="postgres"
                    width={100}
                    height={100}
                />
                <Image
                    src="/mongodb.svg"
                    alt="mongo"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default Tech;