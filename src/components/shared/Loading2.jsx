import { Circles } from 'react-loader-spinner';

const Loading2 = () => {
    return (
        <div className="w-full h-[40vh] flex items-center justify-center">
            <Circles
                height="80"
                width="80"
                color="#7d5fff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading2;