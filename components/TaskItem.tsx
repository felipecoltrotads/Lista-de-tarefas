import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TaskProps = {
    title: string,
    description?: string,
    concluded: boolean,
    onToggleComplete: () => void,
    onDelete: () => void,
}


const TaskItem = ({ title, description, concluded, onToggleComplete, onDelete }: TaskProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, concluded && styles.concluded]}>{title}</Text>
                {description ? <Text>{description}</Text> : null}
            </View>
            <TouchableOpacity onPress={onToggleComplete}>
                <Text>{concluded ? '' : 'Concluido'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#E0554F',
        borderRadius: 5,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        color: '#666',
    },
    concluded: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    concludedButton: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#007EE1',
    },
    deleteButton: {
        padding: 10,
        backgroundColor: '#E53935',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    }
})

export default TaskItem;