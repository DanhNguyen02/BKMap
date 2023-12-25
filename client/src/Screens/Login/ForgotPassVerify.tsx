import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity, Keyboard} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, OTPComponent, RetryButton} from './Self_component'
import OTPInputField from './OTPInputField';
import styled from "styled-components/native";

export const ForgotPassVerify = ({navigation}) => {
  const navigateOn_ = () => {
    navigation.navigate('ForgotPassNewPass');
}

  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;
  return (
    <Pressable style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}} onPress={Keyboard.dismiss}>
      <SvgButton onPress={() => navigation.navigate('ForgotPassNewPass')}/>
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Verify your email</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter the code that has been sent to your email in order to verify your account</Text>
      </View>
      
      <View style={{padding: 10}}><OTPInputField setPinReady={setPinReady} code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH}/></View>
      <View><RetryButton title={'Resend code?'}/></View>
      

      <View style={{padding: 10}}><ConfirmButton title={'VERIFY'} onPress={navigateOn_}/></View>

    </Pressable>
  );
}

