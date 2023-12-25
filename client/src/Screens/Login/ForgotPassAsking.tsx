import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField} from './Self_component'

export const ForgotPassAsking = ({navigation}) => {
  const navigateOn_ = () => {
    navigation.navigate('ForgotPassVerify');
  }
  return (
    <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}}>
      <SvgButton />
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Forgot password?</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter your username and the email which you use to verify this account</Text>
      </View>
      
      <View style={{padding: 10}}><InforField title={'Username'} /></View>
      <View style={{padding: 10}}><InforField title={'Email'} /></View>

      <View style={{padding: 10}}><ConfirmButton title={'NEXT'} onPress={navigateOn_}/></View>

    </View>
  );
}

