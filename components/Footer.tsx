const Footer = () => {
    return (
            <footer className=" shadow pt-96">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Made in Next.Js and React</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                        <li>
                            <a className="pr-2 hover:text-black" href="https://www.linkedin.com/in/bnance1/" target="_blank">
                            LinkedIn
                            </a>
                        </li>
                        <li>
                            <a className="pr-2 hover:text-black" href="https://www.instagram.com/btn.codes/" target="_blank">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a className=" hover:text-black" href="https://github.com/Al3xand3r11" target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer;