import { Circle, Clock, CircleCheck, PlusIcon } from "lucide-react";

const Column = () => {
    
    const columnMap = [
        {id: 1, todoIcon: "Circle", todoTitle: "To Do", plusIcon: "PlusIcon"},
        {id: 2, todoIcon: "Clock", todoTitle: "In Progress", plusIcon: "PlusIcon"},
        {id: 3, todoIcon: "CircleCheck", todoTitle: "Done", plusIcon: "PlusIcon"}
    ]
    
    return <>
        <div className="flex gap-4 overflow-x-auto p-4">
            {columnMap.map((column) => (
                <div className="w-[350px] h-[500px] shadow-lg rounded-lg bg-white p-4" key={column.id}>
                    <div className="flex gap-2"><div className="flex items-center gap-2">
                        {column.todoIcon === "Circle" && <Circle className="text-blue-600" />}
                        {column.todoIcon === "Clock" && <Clock className="text-yellow-600" />}
                        {column.todoIcon === "CircleCheck" && <CircleCheck className="text-green-600" />}
                    </div>
                    <h2 className="text-lg font-semibold">{column.todoTitle}</h2>
                    <PlusIcon className="text-blue-600 cursor-pointer" /></div>

                    <div className="flex items-center justify-between mt-2">
                        <span className="text-gray-500">0 tasks</span>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-500">Add a task...</p>
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default Column;