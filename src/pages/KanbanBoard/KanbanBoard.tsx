import KanbanIcon from "../../assets/icon.svg";
import { User, Building2 } from "lucide-react";

const KanbanBoard = () => {
    return <> 
        <div className="flex mx-4 items-center rounded-xl p-4 ">          
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
        <div className="flex items-center gap-8 border-2 bg-white border-none ml-4 rounded-lg p-2 w-[300px] h-12">
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200 py-2 px-3 h-10 text-center">
                <User className="text-blue-600" />
                <span className="ml-1">Personal</span>
                <div></div>                 {/* To update the task count */}
            </div>
            
            <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-200 py-2 h-10">
                <Building2 className="text-blue-600" />
                <span className="ml-1">Company</span>
                <div></div>
            </div>
        </div>

    </>
}

export default KanbanBoard;