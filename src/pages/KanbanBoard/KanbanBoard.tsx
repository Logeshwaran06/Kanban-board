import KanbanIcon from "../../assets/icon.svg";
import { User, Building2 } from "lucide-react";

const KanbanBoard = () => {
    return <> 
        <div className="flex mx-4 my-2 items-center rounded-xl p-4 ">          
            <img 
                className="p-3 bg-gradient-to-r w-[55px] from-blue-600 to-purple-600 rounded-xl shadow-lg" 
                src={KanbanIcon} 
                alt="KanbanIcon" 
            />
            <div className="flex flex-col ml-2 ">
                <h1 className="text-[28px] font-bold ">Kanban Board</h1>        
                <p className="relative bottom-1">Organize your personal and work tasks efficiently</p>
            </div>

            
        </div>
        <div className="flex items-center gap-4 border-2 border-gray-300 p-4 w-[300px] ">
            <div className="flex items-center gap-1">
                <User className="text-blue-600" />
                <span className="ml-1">Personal</span>
                <div></div>                 {/* To update the task count */}
            </div>
            <div className="flex items-center gap-1">
                <Building2 className="text-blue-600" />
                <span className="ml-1">Company</span>
                <div></div>
            </div>
        </div>

    </>
}

export default KanbanBoard;