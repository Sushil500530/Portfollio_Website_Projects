import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Manubar from "../components/manubar/Manubar";
import HomeDefine from "../pages/Home/HomeDefine";
import logo from '../assets/Screenshot 2023-12-10 135857.png'

const MainLayouts = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div>
            <div className='text-gray-800 flex justify-between items-center lg:hidden w-full h-10'>
                <div></div>
                <button onClick={handleToggle} className='dark:bg-zinc-800 mobile-menu-button p-4 focus:outline-none'>
                    <HiOutlineBars3 className={`h-7 w-7 text-black hover:text-blue-400 transition ${!isActive && 'text-blue-400'} `} />
                </button>
            </div>
            <div className={`z-10 pb-6 fixed bg-gradient-to-r from-sky-500 to-indigo-500 overflow-x-hidden w-64 h-auto space-y-6 px-2 inset-y-0 left-0 transform lg:block ${isActive && '-translate-x-full '
                } lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out`}>
                <Manubar isActive={isActive} />
            </div>

            <div className="flex lg:ml-80">
                <div className="flex-1 mb-12 ">
                    <HomeDefine />
                </div>
            </div>
        </div>
    );
};

export default MainLayouts;