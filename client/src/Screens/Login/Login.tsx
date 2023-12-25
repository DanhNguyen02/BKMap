import React, { useState, useRef } from 'react';
import {View, Text, Image, ImageBackground, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, LoginField, LoginButton, RetryButton} from './Self_component'

export const Login = ({navigation}) => {
    const navigateOnForgot= () => {
        navigation.navigate('ForgotPassAsking');
    }
    const navigateOnSignup= () => {
        navigation.navigate('CreateAccountInformation');
    }
    const navigateOnLogin = () => {
        navigation.navigate('Main');
    }
  return (
    <View style={{flex: 1}}>
        <ImageBackground source={require('../../../assets/images/Login/LoginBackground.png')} style={{
            flex: 1, // Expand to fill screen
            resizeMode: 'cover', // Maintain aspect ratio
            
        }}>
            <View style={{justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 150,
        }}>
            
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Welcome back!</Text>
      <Text style = {{color: 'black', fontSize: 14,}}>Please enter username and password</Text>
      </View>
      
      <View style={{padding: 10}}><LoginField placeholder={'Username'} secureTextEntry={false}/></View>
      <View style={{padding: 10}}><LoginField placeholder={'Password'} secureTextEntry={true}/></View>
      <View><RetryButton title={'Forgot password?'} onPress={navigateOnForgot}/></View>
      <View style={{padding: 20}}><LoginButton title={'Log In'} backgroundColor={'#22668D'} textColor={'white'} onPress={navigateOnLogin}/></View>
      <View style={{padding: 20}}><LoginButton title={'Did not have an account?\n Sign Up!'} backgroundColor={'#FFFFFFFF'} textColor={'black'} onPress={navigateOnSignup}/></View>
    </View>
            </ImageBackground>
    
    </View>
  );
}
