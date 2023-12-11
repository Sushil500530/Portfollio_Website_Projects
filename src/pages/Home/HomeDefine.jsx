import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/profile.png';
import './homeDefine.css'
import AOS from 'aos';

const HomeDefine = () => {
    AOS.init({
        duration: 1800,
        throttleDelay: 99,
    })
    return (
        <>
            <div id='home' className="flex items-center flex-col lg:flex-row md:flex-row gap-5 pt-28">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="right-center" className="space-y-3 flex-1 w-full md:w-1/2 lg:w-1/2">
                    <h3 className="text-5xl font-semibold">Hi,I'm <span className="text-[#8e71ff] ">Sushil...</span><span className="animate-ping">👋</span></h3>
                    <h4 className="text-2xl ">I am a <span className="text-3xl text-[#8e71ff]">
                        <TypeAnimation
                            sequence={[
                                'React Developer...',
                                1000,
                                'MERN Stack Developer...',
                                1000]}
                            wrapper="span" speed={50} className='text-3xl font-bold'  repeat={Infinity}
                        />
                    </span></h4>

                    <h4 className="">{`Hey, I'm Sushil. I am an Junior Frontend Developer.I am a website developer from Bangladesh. I create professional websites. As a web developer, I have a passion for creating dynamic and engaging online experiences.`}</h4>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="left-center" className='w-full md:w-1/2 lg:w-1/2 '>
                    <div className='border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff] rounded-full w-2/3 lg:w-1/3 h-auto mx-auto '>
                        <img src={profile} className='w-full h-full rounded-full' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeDefine;