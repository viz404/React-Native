import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	FlatList,
	RefreshControl,
	Button,
} from "react-native";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [taskNumber, setTaskNumber] = useState(1);
	const [refreshing, setRefreshing] = useState(false);

	const addNewTask = () => {
		setTasks([...tasks, "task " + taskNumber]);
		setTaskNumber(taskNumber + 1);
		setRefreshing(false);
	};

	const deleteFirstTask = () => {
		tasks.shift();
		setTasks([...tasks]);
		setRefreshing(false);
	};

	const onRefresh = () => {
		setRefreshing(true);
	};

	const renderItem = ({ item }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.itemText}>{item}</Text>
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.main}>
			<Text style={styles.header}>My Tasks</Text>
			{refreshing && (
				<View style={styles.popup}>
					<Button title="Add task" onPress={addNewTask} />
					<Button title="Delete" onPress={deleteFirstTask} />
				</View>
			)}
			<FlatList
				style={styles.tasksContainer}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				data={tasks}
				renderItem={renderItem}
				ListEmptyComponent={
					<Text style={styles.emptyTask}>Pull to add a new Task</Text>
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	main: { paddingTop: 30, paddingHorizontal: 10, flex: 1 },
	header: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
	tasksContainer: {
		paddingHorizontal: 10,
		flex: 1,
		marginVertical: 10,
	},
	item: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#333",
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 5,
	},
	itemText: {
		fontSize: 20,
	},
	popup: {
		shadowColor: "#333",
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	emptyTask: {
		textAlign: "center",
		marginVertical: 20,
	},
});
