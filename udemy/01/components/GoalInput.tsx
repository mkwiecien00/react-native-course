import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

interface GoalInputProps {
	onAddGoal: (enteredGoalText: string) => void
	onCancel: () => void
	visible: boolean
}

export const GoalInput = ({ onAddGoal, onCancel, visible }: GoalInputProps) => {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	const goalInputHandler = (enteredText: string) => {
		setEnteredGoalText(enteredText)
	}

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText)
		setEnteredGoalText('')
	}

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
				<TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Cancel' onPress={onCancel} color='#f396c5' />
					</View>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} color='#c3a1f0' />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#311B6B',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#E4D0FF',
		backgroundColor: '#E4D0FF',
		color: '#120438',
		borderRadius: 24,
		width: '100%',
		padding: 16,
		fontSize: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
})
