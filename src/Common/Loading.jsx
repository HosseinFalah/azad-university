import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <PulseLoader color="#3b82f6" size={20} />
        </div>
    )
}

export default Loading