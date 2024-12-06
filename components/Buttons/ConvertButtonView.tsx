import { View , Text, TouchableOpacity} from "react-native"
import { style } from "./ConvertButtonView.style"

type ConvertButtonViewModel = {
    unit: string
    onTap: ()=>void
}

export const ConvertButtonView = (unit: ConvertButtonViewModel) => {
    return  (
        <TouchableOpacity style={style.buttonBG} onPress={()=> {
                unit.onTap()
            }}>
            <Text style={style.buttonText}>Convert to {unit.unit}</Text>
        </TouchableOpacity>

    )
}