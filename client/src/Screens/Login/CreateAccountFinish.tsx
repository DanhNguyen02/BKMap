import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField} from './Self_component'

export const CreateAccountFinish = ({navigation}) => {
  const navigateOnCreate = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}}>
      <SvgButton />
      <View style={{alignItems:'center'}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Create new account</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Create your new username and password</Text>
      </View>
      
      <View style={{padding: 10}}><InforField title={'Username'} /></View>
      <View style={{padding: 10}}><SecureField title={'Password'}/></View>
      <View style={{padding: 10}}><SecureField title={'Confirm password'}/></View>

      <View style={{padding: 10}}><ConfirmButton title={'CREATE NEW ACCOUNT'} onPress={navigateOnCreate}/></View>

    </View>
  );
}
