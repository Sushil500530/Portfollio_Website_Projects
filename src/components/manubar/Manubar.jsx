/* eslint-disable react/prop-types */
import NavList from '../shared/NavList';
import { FaHome, FaUser } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsMotherboardFill } from "react-icons/bs";
import logo2 from '../../assets/Sushil (2).gif'
import pfd from '../../assets/Sushil_Resumi.pdf'


const Manubar = () => {
    return (
        <div className='flex flex-col items-center justify-between md:gap-28 lg:gap-28 '>
            <div className='w-full h-40'>
                <img src={logo2} className='w-full h-full' alt="logo" />
            </div>
            <div className='w-full flex flex-col gap-1'>
                <NavList link={'#home'} icon={FaHome} title={'Home'} />
                <NavList link={'#about'} icon={FaUser} title={'About'} />
                <NavList link={'#skills'} icon={SiSololearn} title={'Skill'} />
                <NavList link={'#projects'} icon={BsMotherboardFill} title={'Projects'} />
                <NavList link={'#contact'} icon={FaHome} title={'Contact'} />
                <a href={pfd} download><button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] flex items-center justify-center w-[90%] rounded-full mx-auto text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none hover:text-[#3b26a4]'><span><FaCloudDownloadAlt className='w-6 h-6'/></span>Resume</button></a>
            </div>
        </div>
    );
};

export default Manubar;