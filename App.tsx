import React, { useEffect, useState } from 'react';
import {Text, View, Image, SafeAreaView, Button, ImageBackground} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { appStyle } from './App.style';
import hotBackground from "./assets/hot.png"
import coldBackground from "./assets/cold.png"
import { TempratureTextInputView } from './components/TextInput/TempratureTextInputView';
import { DisplayTempratureView } from './components/Display/DisplayTempratureView';
import { convertTempratureTo, getOppositeUnit, isColdTepmprature } from './utils/temprature';
import { ConvertButtonView } from './components/Buttons/ConvertButtonView';


const App = () => {
  const [inputTemprature, setinputTemprature] = useState(0)
  const [currentUnit, setCurrentUnit] = useState("ºC")
  const [currentBG, setCurrentBD] = useState(coldBackground)

  useEffect(()=> {
    try {
      const isIcedTemp = isColdTepmprature(inputTemprature, currentUnit)
      isIcedTemp ? setCurrentBD(coldBackground) : setCurrentBD(hotBackground)
    } catch (error) {
      setCurrentBD(currentBG)
    }
  }, [inputTemprature, currentUnit])

  function getConvertedTemprature(): string {
    try {
      return convertTempratureTo(inputTemprature, getOppositeUnit(currentUnit)).toFixed(1).toString()
    } catch (error) {
      return ""
    }
        
  }

  return (
    <ImageBackground source={currentBG} style={appStyle.backgroundImage}>
    <SafeAreaProvider>
      <SafeAreaView style={appStyle.root}>
        <View style={appStyle.workspace}>
          <DisplayTempratureView temprature={getConvertedTemprature()} unit={getOppositeUnit(currentUnit)}/>
          <TempratureTextInputView defaultValue={0} unit={currentUnit} onChangeText={setinputTemprature} />
          <ConvertButtonView unit={getOppositeUnit(currentUnit)} onTap={()=>{
            setCurrentUnit(getOppositeUnit(currentUnit))
          }}></ConvertButtonView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
