import { Text } from "react-native"
import { style } from "./DisplayTempratureView.style"

type DisplayTempratureViewModel = {
    temprature: string
    unit: string
}

export const DisplayTempratureView = (tempratureInput: DisplayTempratureViewModel) => {
    return (
        <Text style={style.tempratureText}>{tempratureInput.temprature} {tempratureInput.unit}</Text>
    )
}