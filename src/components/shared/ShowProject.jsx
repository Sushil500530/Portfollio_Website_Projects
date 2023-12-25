/* eslint-disable react/prop-types */

const ShowProject = ({id, livePhoto, clientSite, ServerSite, title, description }) => {

    return (
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={id} className="modal modal-center sm:modal-middle">
               
                <div className="modal-box w-11/12 h-auto max-w-5xl overflow-visible bg-gradient-to-b from-[#40407a] to-black border border-[#8e71ff] p-2 md:p-5 lg:p-5">
                    <div className='cursor-pointer rounded-lg w-full h-[180px] md:h-[280px] lg:h-[280px]'>
                        <img src={livePhoto} alt="link show" className="rounded-lg w-full h-full" />
                    </div>
                    <div className='cursor-default'>
                        <div>
                            <h1 className='text-xl lg:text-2xl font-bold my-3'>{title}</h1>
                            <p> {description.length > 100 ? description.slice(0,100) + "........." : description} </p>
                        </div>
                        <div>
                            <h1 className='text-xl lg:text-2xl font-bold'>Source Code</h1>
                            <div className='flex gap-5 mt-3'>
                                <button className='btn btn-sm bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-83flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none hover:text-[#3b26a4] hover:ease-in-out'><a href={clientSite} target='_blank' rel="noreffer" className='flex items-center'>Client Site </a></button>
                                <button className='btn btn-sm bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-black border-none hover:text-[#3b26a4] hover:ease-in-out'><a href={ServerSite} target='_blank' className='flex items-center'>Server Site </a></button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-xl lg:text-2xl font-bold'>Use Technologies</h1>
                            <div className='flex flex-wrap mt-3 gap-3'>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-1 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Tailwind</p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>React </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Nodejs </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Expressjs </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>MongoDB </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Firebase </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Vercel </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>JWT </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Axios </p>
                                <p className='bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-3 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium text-black border-none hover:ease-in-out cursor-default'>Stripe </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action absolute -top-12 -right-5 p-0">
                        <form method="dialog">
                            <button className="btn btn-circle btn-outline border-none bg-red-500 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ShowProject;