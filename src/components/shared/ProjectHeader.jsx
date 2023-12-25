/* eslint-disable react/prop-types */
import { FaRegEye } from "react-icons/fa";
import ShowProject from "./ShowProject";
import { TbScanEye } from "react-icons/tb";
import { delay, motion } from 'framer-motion';
import { fadeIn } from '../../components/shared/variants';
import { useState } from "react";

const ProjectHeader = ({isLoading, item }) => {
    const [loading, setLoading] = useState(false)
    if(!item){
        setLoading(true);
    }
    const { bgImage, showImage, modalId, liveLink, clientSite, ServerSite, title, description } = item || {};
    return (
        <>
            <div className="cursor-pointer border w-full h-[430px] relative group border-[#7d5fff] hover:border-none group rounded-lg hover:rounded-lg overflow-hidden">
                <motion.div variants={fadeIn("up", 0)} initial="hidden" whileInView={"show"}>
                    <img src={bgImage} className='w-full h-[430px]' alt="project-image" />
                </motion.div>
                <div className='bg-gradient-to-b from-[#40407a] to-black z-10 pb-6 absolute w-full h-auto inset-y-0 flex items-center hover:opacity-90 justify-center flex-col transform lg:block translate-y-full group-hover:translate-y-0 dark:text-white dark:bg-zinc-800 transition duration-500 ease-in-out inset-0 overflow-x-hidden opacity-0 group-hover:opacity-100  rounded-lg'>
                    <div className='absolute w-full h-auto  top-[30%] flex flex-col items-center justify-center'>
                        <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out' onClick={() =>document.getElementById(`${modalId}`).showModal()}><span><FaRegEye /></span>View Project</button>
                        <ShowProject 
                        isLoading={isLoading}
                        id={modalId} 
                        livePhoto={showImage} 
                        clientSite={clientSite} 
                        ServerSite={ServerSite} 
                        title={title}
                         description={description}
                          loading={loading} />
                        <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'> <a href={liveLink} target='_blank' className='flex items-center'><span><TbScanEye className="w-6 h-6" /></span>Live Show</a></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectHeader;