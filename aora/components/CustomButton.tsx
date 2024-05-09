import { TouchableOpacity, Text, GestureResponderEvent, TouchableOpacityProps } from 'react-native'

interface CustomButtonProps extends TouchableOpacityProps {
	title: string
	handlePress: (event: GestureResponderEvent) => void
	containerStyles: string
	textStyles?: string
	isLoading?: boolean
}

export const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: CustomButtonProps) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
			disabled={isLoading}>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	)
}
