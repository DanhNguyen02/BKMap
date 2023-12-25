import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton} from './Self_component'

export const CreateAccountInformation = ({navigation}) => {
    const navigateOnNext = () => {
        navigation.navigate('CreateAccountVerify');
      }
  return (
    <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}}>
      <SvgButton />
      <View style={{alignItems:'center'}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Create new account</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter the following requested information to create new account</Text>
      </View>
      
      <View style={{padding: 10}}><InforField title={'Full name'} /></View>
      <View style={{padding: 10}}><InforField title={'Nickname'}/></View>
      <View style={{padding: 10}}><InforField title={'Email'}/></View>
      <View style={{padding: 10}}><InforField title={'Phone Number'}/></View>
      <View style={{padding: 10}}><InforField title={'Address'}/></View>
      <View style={{padding: 10}}><ConfirmButton title={'NEXT'} onPress={navigateOnNext}/></View>
    </View>
  );
}
