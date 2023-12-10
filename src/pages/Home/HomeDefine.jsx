import profile from '../../assets/profile.png';
import './homeDefine.css'

const HomeDefine = () => {
    return (
        <>
            <div id='home' className="flex items-center flex-col lg:flex-row md:flex-row gap-5 pt-28">
                <div className="space-y-3 flex-1 w-full md:w-1/2 lg:w-1/2">
                    <h2 className="text-2xl">Welcome to my Community</h2>
                    <h3 className="text-5xl font-semibold">Hi,I'm <span className="text-[#8e71ff] ">Sushil...</span><span className="animate-ping">👋</span></h3>
                    <h4 className="text-2xl ">I am a <span className="text-3xl text-[#8e71ff]">React Developer</span></h4>
                    <h4 className="">{`Hey, I'm Sushil. I am an Junior Frontend Developer.I am a website developer from Bangladesh. I create professional websites. As a web developer, I have a passion for creating dynamic and engaging online experiences.`}</h4>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/2 '>
                    <div className='border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff] rounded-full w-2/3 lg:w-1/3 h-auto mx-auto '>
                        <img src={profile} className='w-full h-full rounded-full' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeDefine;