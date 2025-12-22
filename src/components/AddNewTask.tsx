const AddNewTask = () => {
    return <>
        <div className="absolute top-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 p-4">
            <h1>Add New Task</h1>

            <div>
                <label htmlFor="title">Task Title *</label>
                <input type="text" placeholder="Enter task title..." />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea placeholder="Add a description..." />
            </div>

            <div>
                <div>
                    <h4>Priority</h4>
                    <select name="Priority" id="Priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <h4>Category</h4>
                    <select name="Category" id="Category">
                        <option value="personal">Personal</option>
                        <option value="company">Company</option>
                    </select>
                </div>
            </div>

            <div>This task will be added to your (Personal) board.</div>

            <div>
                <button>Cancel</button>
                <button>Add Task</button>
            </div>
        </div>
    </>
}

export default AddNewTask;