import Loading2 from '../../components/shared/Loading2';
import ProjectHeader from '../../components/shared/ProjectHeader';
import useData from '../../hooks/useData';


const Projects = () => {
    // inventory management 
    const [datas, , isLoading] = useData()
    return (
        <div id="projects" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Projects</h1>
            <hr className='w-32 border-b-2 border-fuchsia-600 mt-2' />
            {
                isLoading ? <Loading2 /> : <><h1 className='text-3xl font-bold text-center text-white mt-10'>No Data Found!</h1></>
            }
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {
                    datas?.map(item => <ProjectHeader
                        isLoading={isLoading}
                        key={item.id}
                        item={item}
                    />)
                }
            </div>
        </div >
    );
};

export default Projects;