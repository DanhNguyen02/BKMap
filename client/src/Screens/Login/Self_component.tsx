import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import OTPInputField from './OTPInputField';

export const url_server = 'http://localhost:3000';

export const SvgButton = ({onPress}) =>{
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.26754 13L13.635 23.365C13.8698 23.5997 14.0016 23.918 14.0016 24.25C14.0016 24.5819 13.8698 24.9003 13.635 25.135C13.4003 25.3697 13.082 25.5016 12.75 25.5016C12.4181 25.5016 12.0998 25.3697 11.865 25.135L0.615037 13.885C0.498629 13.7689 0.406272 13.6309 0.343256 13.4791C0.28024 13.3272 0.247803 13.1644 0.247803 13C0.247803 12.8356 0.28024 12.6728 0.343256 12.5209C0.406272 12.369 0.498629 12.2311 0.615037 12.115L11.865 0.864992C12.0998 0.630275 12.4181 0.498413 12.75 0.498413C13.082 0.498413 13.4003 0.630275 13.635 0.864992C13.8698 1.09971 14.0016 1.41805 14.0016 1.74999C14.0016 2.08193 13.8698 2.40028 13.635 2.63499L3.26754 13Z" fill="black"/>
      </Svg>
    </TouchableOpacity>

  );
}

export const colors = {
    red: '#FF6148',
    thick_blue: '#22668D',
    light_blue: '#8ECDDD',
    light_pink: '#FFFADD',
    gray: '#818181',
}

export const RetryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: 'red', fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline'}}>{title}</Text>
    </TouchableOpacity>
  );
}

export const OTPComponent = () => {
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;
  ////
  return (
    <View>
        <OTPInputField setPinReady={setPinReady} code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH}/>
    </View>
  );
}

export const InforField = ({title, onInput}) => {
    return(
        <View style={{
            height: 60,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#F3F8FF',
            paddingLeft: 15,
          }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray'}}>{title}</Text>
            <TextInput style={{fontSize: 14,}}
              placeholder='Type your information here' onChangeText={onInput}
            />
        </View>
    );
}

export const LoginField = ({placeholder, secureTextEntry, onInput}) => {
  return(
      <View style={{
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          backgroundColor: 'white',
          paddingLeft: 15,
          paddingTop: 10
        }}>
          <TextInput style={{fontSize: 16,}}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={onInput}
          />
      </View>
  );
}

export const SecureField = ({title, onInput}) =>{
    return (
        <View style={{
            height: 60,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#F3F8FF',
            paddingLeft: 15,
          }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray'}}>{title}</Text>
            <TextInput style={{fontSize: 14,}}
              placeholder='Type your password here' secureTextEntry={true} onChangeText={onInput}
            />
        </View>
    );
}

export const ConfirmButton = ({title, onPress}) => {
    return(
        <Pressable style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
            elevation: 3,
            backgroundColor: '#22668D',
          }} onPress={onPress}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
          </Pressable>
    );
}

export const LoginButton = ({title, onPress, backgroundColor, textColor}) => {
  return(
      <Pressable style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 10,
          elevation: 3,
          backgroundColor: backgroundColor,
        }} onPress={onPress}>
          <Text style={{color: textColor, textAlign: 'center'}}>{title}</Text>
        </Pressable>
  );
}

//////////////////////This is the end, the rest is just for testing.
const App = () => {
  
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      
      <View style={{
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: '#F3F8FF',
          paddingLeft: 15,
        }}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray'}}>password</Text>
          <TextInput style={{fontSize: 14,}}
            placeholder='Type your username here' secureTextEntry={true}
          />
      </View>
      
      <TextInput style={{color: 'black', 
      backgroundColor: 'gray', 
      width: 20,
      height: 20,
      fontSize: 16,
      alignItems: 'center',
      textAlign: 'center'
      }} maxLength={1} keyboardType='numeric'></TextInput>
      <SvgButton />
      
      
    </ScrollView>
  );
};

export default App;