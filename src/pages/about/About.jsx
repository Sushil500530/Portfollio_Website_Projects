import image from '../../assets/profile.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/shared/variants';

const About = () => {
    return (
        <div id='about' className='pt-12'>
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">About Me</h1>
            <hr className='w-40 border-b-2 border-fuchsia-600 mt-2' />
            <div className="flex flex-col lg:flex-row gap-5 w-full h-auto items-center pt-10">
                <motion.div variants={fadeIn("right", 3)} initial="hidden" whileInView={"show"}
                    className='w-1/4 lg:w-1/3 mx-0'>
                    <div className='border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff] rounded-full w-full'>
                        <img src={image} className='w-full h-full rounded-full' alt="" />
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("left", 3)} initial="hidden" whileInView={"show"}>
                    <div className='border p-4 bg-gradient-to-l from-[#40407a] to-black rounded-md border-b-8 border-[#7d5fff] hover:border-fuchsia-500'>
                        <p className='text-[17px]'>
                            {`Hi👋 My name is Sushil Hemrom. i'm a Junior Front-end Web Developer in Bangladesh. I'm a passionate web developer with a love for turning ideas into functional and visually appealing websites. With 1 years of experience in the field, I've had the privilege of working on diverse projects that have not only honed my technical skills but also fueled my creativity.`}
                        </p>
                        <h2 className='font-medium text-[18px]'>Name : Sushil Hemrom</h2>
                        <h2 className='font-medium text-[18px]'>Phone Number : +8801767122497</h2>
                        <h2 className='font-medium text-[18px]'>Address : Chirirbondar, Dinajpur</h2>
                        <h2 className='font-medium text-[18px]'>Email : sushil500530@gmail.com</h2>
                        <button id="contact" className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'>Hire Me</button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default About;