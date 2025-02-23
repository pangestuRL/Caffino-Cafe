import logoCafino from './assets/logo-caffino.png';

function Navbar (){

    return (
        <div>
            <nav className="bg-[#C9BAA6] transition-colors bg-[#E5CFB5]">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                        {/* <h2 className="w-auto text-white font-bold text-3xl italic">
                            Kopi<span className="text-amber-400">ayah.</span>
                        </h2> */}
                            <img src={logoCafino} alt="Logo-Caffino" />
                        </div>
                        <div className="flex-grow" />
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="space-x-6 justify-end">
                                <a href="#home"
                                className="text-[17px] rounded-md px-3 py-2 text-sm font-medium hover:bg-[#3E2723] hover:text-white items-center">
                                    Home
                                </a>
                                <a href="#About"
                                className="text-[17px] rounded-md px-3 py-2 text-sm font-medium hover:bg-[#3E2723] hover:text-white">
                                    About
                                </a>
                                <a href="#menu"
                                className="text-[17px] rounded-md px-3 py-2 text-sm font-medium hover:bg-[#3E2723] hover:text-white">
                                    Menu
                                </a>
                                <a href="#contact"
                                className="text-[17px] rounded-md px-3 py-2 text-sm font-medium hover:bg-[#3E2723] hover:text-white">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;