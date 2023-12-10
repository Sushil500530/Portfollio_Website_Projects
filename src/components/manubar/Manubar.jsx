/* eslint-disable react/prop-types */
import NavList from '../shared/NavList';
import { FaHome, FaUser } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { BsMotherboardFill } from "react-icons/bs";
import logo from '../../assets/Screenshot 2023-12-10 135857.png'


const Manubar = () => {
    return (
        <div className='flex flex-col items-center justify-between gap-48'>
            <div className='w-30 h-20'>
                <img src={logo} className='w-full h-full' alt="logo" />
            </div>
            <div className='w-full'>
                <NavList address={'/'} linkTitle={'Home'} icon={FaHome} />
                <NavList address={'about'} linkTitle={'About'} icon={FaUser} />
                <NavList address={'skills'} linkTitle={'Skills'} icon={SiSololearn} />
                <NavList address={'other'} linkTitle={'Other'} icon={BsMotherboardFill} />
            </div>
        </div>
    );
};

export default Manubar;