import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity, Keyboard} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, OTPComponent, RetryButton} from './Self_component'
import OTPInputField from './OTPInputField';
import styled from "styled-components/native";

export const ForgotPassVerify = ({navigation}) => {
  const [pet, setPet] = useState("");
  const [name, setName] = useState("");
  const [wrongpass, setwrongpass] = useState(false);
  const navigateOnVerify = () => {
    navigation.navigate('ForgotPassNewPass');
}
const navigateOnBack = () => {
  navigation.navigate('Login');
}
  return (
    <Pressable style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}} onPress={Keyboard.dismiss}>
      <SvgButton onPress={navigateOnBack}/>
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Verify your account</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter the security information to verify your account</Text>
      </View>
      
      <View style={{padding: 10}}><InforField title={'What is your favourite kind of animal?'} onInput={setPet}/></View>
      <View style={{padding: 10}}><InforField title={'Who is your favourite person?'} onInput={setName}/></View>
      
      <View>
      <Text style = {{color: 'red', fontSize: 14, opacity: wrongpass ? 1 : 0}}>Incorrect information at one or more fields</Text>
      </View>
      <View style={{padding: 10}}><ConfirmButton title={'VERIFY'} onPress={navigateOnVerify}/></View>

    </Pressable>
  );
}

