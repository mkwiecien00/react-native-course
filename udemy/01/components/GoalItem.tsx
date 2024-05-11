import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native'

interface GoalItemProps {
	text: string
	id: string
	onDeleteItem: (id: string) => void
}

export const GoalItem = ({ text, id, onDeleteItem }: GoalItemProps) => {
	const deleteGoalHandler = (id: string) => {
		onDeleteItem(id)
	}

	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={() => deleteGoalHandler(id)}
				android_ripple={{ color: '#2f0468' }}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	goalItem: {
		marginVertical: 8,
		borderRadius: 24,
		backgroundColor: '#5E0ACC',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		padding: 16,
		fontSize: 16,
		color: 'white',
	},
})
