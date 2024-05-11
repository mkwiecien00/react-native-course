import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { GoalItem } from '@/components/GoalItem'
import { GoalInput } from '@/components/GoalInput'

interface CourseGoals {
	text: string
	id: string
}

const Home = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([])

	const startAddGoalHandler = () => {
		setModalIsVisible(true)
	}

	const endAddGoalHandler = () => {
		setModalIsVisible(false)
	}

	const addGoalHandler = (enteredGoalText: string) => {
		setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
		endAddGoalHandler()
	}

	const deleteGoalHandler = (id: string) => {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter(goal => goal.id !== id)
		})
	}

	return (
		<>
			<StatusBar style='light' />
			<SafeAreaView style={styles.appContainer}>
				<Button title='Add New Goal' color='#c3a1f0' onPress={startAddGoalHandler} />
				<GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={itemData => {
							return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
						}}
						// When using a FlatList component, if the data array has a unique id or a key property, we do not need to use the keyExtractor prop explicitly.
						// But for custom id names, we should use the keyExtractor prop to explicitly tell the component which unique key to extract.
					/>
				</View>
			</SafeAreaView>
		</>
	)
}

export default Home

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		gap: 12,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: '#311B6B',
	},

	goalsContainer: {
		flex: 5,
	},
})
