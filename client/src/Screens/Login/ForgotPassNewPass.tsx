import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField} from './Self_component'

export const ForgotPassNewPass = ({navigation}) => {
  const navigateOn_ = () => {
    navigation.navigate('Login');
}

  return (
    <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}}>
      <SvgButton />
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Create new password</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter your new password</Text>
      </View>
      
      <View style={{padding: 10}}><SecureField title={'New Password'}/></View>
      <View style={{padding: 10}}><SecureField title={'Confirm password'}/></View>

      <View style={{padding: 10}}><ConfirmButton title={'CREATE NEW PASSWORD'} onPress={navigateOn_} /></View>

    </View>
  );
}
