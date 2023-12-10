import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Manubar from "../components/manubar/Manubar";
import HomeDefine from "../pages/Home/HomeDefine";
import { FaHome, FaUser } from "react-icons/fa";
import { SiSkillshare, SiSololearn } from "react-icons/si";
import { BsMotherboardFill } from "react-icons/bs";
import logo from '../assets/Screenshot 2023-12-10 135857.png'
import NavList from "../components/shared/NavList";
import { Link, NavLink } from "react-router-dom";

const MainLayouts = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="bg-gradient-to-r from-[#40407a] to-black">
            <div className='text-gray-800 flex justify-between items-center lg:hidden w-full h-10 '>
                <div></div>
                <button onClick={handleToggle} className='dark:bg-zinc-800 mobile-menu-button p-4 focus:outline-none'>
                    <HiOutlineBars3 className={`h-8 w-8 hover:text-blue-400 transition ${!isActive ? 'text-blue-400' : 'text-white'} `} />
                </button>
            </div>
            <div className={`z-10 pb-6 fixed bg-[#2c2c54] overflow-x-hidden w-64 h-auto space-y-6 px-2 inset-y-0 left-0 transform lg:block ${isActive && '-translate-x-full '
                } lg:translate-x-0 dark:text-white dark:bg-zinc-800 transition duration-200 ease-in-out border-[#40407a] border-r-4`}>
               <Manubar />
               
            </div>
            <div className="lg:ml-72 text-white w-auto min-h-auto p-5">
                <HomeDefine />
            </div>
        </div>
    );
};

export default MainLayouts;