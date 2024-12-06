import { TextInput, View, Text } from "react-native";
import { textStyle } from "./TempratureTextInputView.style";

type TempratureTextInputViewModel = {
    defaultValue: number
    unit: string
    onChangeText: (tempratureInput: number) => void
}

export const TempratureTextInputView = (config:TempratureTextInputViewModel) => (
    <View style={textStyle.root}>
        <TextInput 
        style={textStyle.textInput} 
        placeholder="Enter Temprature here" 
        maxLength={4} 
        defaultValue={config.defaultValue.toString()}
        onChangeText={(text)=> {
            config.onChangeText(Number(text))
        }}
        />
        <Text style={textStyle.unit}>{config.unit}</Text>
    </View>
)
