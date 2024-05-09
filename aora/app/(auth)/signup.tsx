import { useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

import { images } from '@constants/index'
import { FormField } from '@components/FormField'
import { CustomButton } from '@components/CustomButton'

const SignUp = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
	})

	const submit = () => {
		if (form.username === '' || form.email === '' || form.password === '') {
			Alert.alert('Error', 'Please fill in all fields')
			return
		}

		router.replace('/home')
	}

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center min-h-[85vh] px-4 my-6'>
					<Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />
					<Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign up to Aora</Text>

					<FormField
						title='Username'
						value={form.username}
						handleChangeText={e => setForm({ ...form, username: e })}
						otherStyles='mt-10'
						placeholder='username'
					/>
					<FormField
						title='Email'
						value={form.email}
						handleChangeText={e => setForm({ ...form, email: e })}
						otherStyles='mt-7'
						placeholder='email@gmail.com'
						keyboardType='email-address'
					/>
					<FormField
						title='Password'
						value={form.password}
						handleChangeText={e => setForm({ ...form, password: e })}
						otherStyles='mt-7'
						placeholder='********'
					/>

					<CustomButton title='Sign Up' handlePress={submit} containerStyles='mt-7' />

					<View className='justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-gray-100 font-pregular'>Have an account already?</Text>
						<Link href='/signin' className='text-lg font-psemibold text-secondary-100'>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SignUp
