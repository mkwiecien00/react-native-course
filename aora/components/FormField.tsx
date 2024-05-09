import { useState } from 'react'
import { View, Text, TextInput, TextInputProps, TouchableOpacity, Image } from 'react-native'

import { icons } from '@constants/index'

interface FormFieldProps extends TextInputProps {
	title: string
	handleChangeText: (e: string) => void
	otherStyles: string
}

export const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...rest }: FormFieldProps) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View className={`${otherStyles} space-y-2`}>
			<Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

			<View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
				<TextInput
					className='flex-1 text-white font-psemibold text-base'
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7B7B8B'
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}
					{...rest}
				/>

				{title === 'Password' && (
					<TouchableOpacity onPress={() => setShowPassword(prevState => !prevState)}>
						<Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6 ' resizeMode='contain' />
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}
