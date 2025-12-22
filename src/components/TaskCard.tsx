// import { useState } from "react"
import { User, Building2, Trash } from "lucide-react";


const TaskCard = () => {

    // const [createTaskCard, setCreateTaskCard] = useState<boolean>(false);
    const currentDate = new Date();

    const day = currentDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[currentDate.getMonth()]; // e.g., "December"

    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return <>
            <div className="bg-white h-26 rounded-lg p-2 mt-2">
                <div className="flex gap-2">
                    <User size={18}/>
                    <div className="text-sm">low</div>
                    <Trash className="cursor-pointer hover:bg-red-100 rounded-lg" size={18} color="red" onClick={() => {}}/>
                </div>
                <h4>Ticket Title</h4>
                <p className="text-sm">Ticket description</p>
                <div className="flex gap-2 text-sm">
                    <p>{monthName} {day}, {time}</p>
                    <p>(personal or company)</p>
                </div>

            </div>
    </>
}

export default TaskCard