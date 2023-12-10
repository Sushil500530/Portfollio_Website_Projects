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
            <div className='w-full flex flex-col gap-1'>
                <NavList link={'#home'} icon={FaHome} title={'Home'} />
                <NavList link={'#about'} icon={FaUser} title={'About'} />
                <NavList link={'#skills'} icon={SiSololearn} title={'Skill'} />
                <NavList link={'#project'} icon={BsMotherboardFill} title={'Projects'} />
                <NavList link={'#contact'} icon={FaHome} title={'Contact'} />
                <NavList link={'#contact'} icon={FaHome} title={'Resume'} />
            </div>
        </div>
    );
};

export default Manubar;