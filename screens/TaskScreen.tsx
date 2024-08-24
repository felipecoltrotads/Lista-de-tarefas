import TaskItem from "@/components/TaskItem";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


type Task = {
    id: number,
    title: string,
    description?: string,
    concluded: boolean,
}

const TaskScreen = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = () => {
        if (title.trim()) {
            setTasks([...tasks, { id: Date.now(), title, description, concluded: false }]);
            setTitle('');
            setDescription('');
        }
    }

    const ToggleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, concluded: !task.concluded } : task))
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lista de Tarefas</Text>
            <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text style={styles.buttonText}>Adicionar Tarefa</Text>
            </TouchableOpacity>
            <FlatList data={tasks} keyExtractor={task => task.id.toString()} renderItem={({ item }) => (
                <TaskItem title={item.title} description={item.description} concluded={item.concluded} onToggleComplete={() => ToggleComplete(item.id)} onDelete={() => deleteTask(item.id)} />
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 22,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#2196f3',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})

export default TaskScreen;