import { useState } from "react";

type Task = {
    id: number,
    title: string,
    description?: string,
    concluded: boolean,
}

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
}
const addTask = () => {
    if (title.trim()) {
        setTasks([...tasks, { id: Date.now(), title, description, concluded: false }]);
        setTitle('');
        setDescription('');
    }
}


const screens = () => {
    return (
        
    );
}

export default screens;