import { Plus } from "lucide-react";

const CreateNewColumn = () => {
    return <>
        <div className="w-[350px] shadow-lg rounded-lg bg-gray-500 p-4">
            <div className="relative left-30 top-30 w-12 h-12 rounded-lg bg-white">
                <Plus className="align-center" size={30}/>
            </div>
        </div>
    </>
}

export default CreateNewColumn;