import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/profile.png';
import './homeDefine.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from 'framer-motion';
import { fadeIn } from '../../components/shared/variants'
const HomeDefine = () => {

    return (
        <>
            <div id='home' className="flex items-center flex-col lg:flex-row md:flex-row gap-5 pt-28 w-full">
                <motion.div variants={fadeIn("right", 5)} initial="hidden" whileInView={"show"} 
                    className="space-y-3 flex-1 w-full md:w-1/2 lg:w-1/2" >
                    <h3 className="text-5xl font-semibold">{`Hi, I'm `}<span className="text-[#8e71ff] ">Sushil...</span><span className="animate-ping">👋</span></h3>
                    <h4 className="text-2xl ">I am a <span className="text-3xl text-[#8e71ff]">
                        <TypeAnimation
                            sequence={[
                                'React Developer_',
                                1000,
                                'MERN Stack Developer_',
                                1000]}
                            wrapper="span" speed={50} className='text-3xl font-bold' repeat={Infinity}
                        />
                    </span></h4>
                    <h4 className="">{`Hey, I'm Sushil. I am an Junior Frontend Developer.I am a website developer from Bangladesh. I create professional websites. As a web developer, I have a passion for creating dynamic and engaging online experiences.`}</h4>
                    <nav>
                    <ul className=" flex items-start gap-6">
                        <span className="tooltip tooltip-bottom" data-tip="Facebook">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://tinyurl.com/46j32cs7" target="_blank" ><FaFacebook className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Linkedin">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://tinyurl.com/46j32cs7" target="_blank"><FaLinkedinIn className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Github">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://github.com/Sushil500530" target="_blank"><FaGithub className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Instagram">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="#"><FaInstagramSquare className="w-full h-full p-1 cursor-default " /></a></li>
                        </span>
                        <span className="tooltip tooltip-bottom" data-tip="Twitter">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="#"><FaTwitter className="w-full h-full p-1 cursor-default " /></a></li>
                        </span>
                    </ul>
                </nav >
                </motion.div>
                <motion.div variants={fadeIn("left", 5)} initial="hidden" whileInView={"show"} 
                    className='w-full md:w-1/2 lg:w-1/2 relative '>
                    <div className='border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff] rounded-full w-2/3 lg:w-1/3 h-auto mx-auto '>
                        <img src={profile} className='w-full h-full rounded-full' alt="" />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default HomeDefine;