import Task from "./Task";

const tasks = [
    { title: "This was originally a to-do list app to learn React" },
    { title: "But now I'm using this to learn how to deploy a React app to GitHub pages" }
];

const Tasks = () => {
    return (
        <div>
            {tasks.map((task) => <h3>{task.title}</h3>)}
        </div>
    );
}

export default Tasks;
