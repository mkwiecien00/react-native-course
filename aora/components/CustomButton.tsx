import { TouchableOpacity, Text, GestureResponderEvent, TouchableOpacityProps } from 'react-native'

interface CustomButtonProps extends TouchableOpacityProps {
	title: string
	handlePress: (event: GestureResponderEvent) => void
	containerStyles: string
	textStyles?: string
}

export const CustomButton = ({ title, handlePress, containerStyles, textStyles }: CustomButtonProps) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	)
}
