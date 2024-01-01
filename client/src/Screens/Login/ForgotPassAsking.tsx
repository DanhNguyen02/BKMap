import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, url_server} from './Self_component'

export const ForgotPassAsking = ({navigation}) => {
  const [username, setusername] = useState("");
  const [pet, setPet] = useState("");
  const [person, setPerson] = useState("");
  const [wrongpass, setwrongpass] = useState(false);
  const navigateOnNext = () => {
    // const data : Record<string, any> = {
    //   username: username,
    //   pet: pet,
    //   person: person,
    // }
    // const params = new URLSearchParams();
    // for(const key in data){
    //   params.append(key, data[key]);
    // }
    fetch(url_server + '/user/exist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        pet: pet,
        person: person,
      })
    }).then(response => response.json()).then((value) => {
      if(value.success) navigation.navigate('ForgotPassNewPass', {username: username});
      else setwrongpass(true);
    }).catch(console.error);
    
  }
  const navigateOnBack = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50}}>
      <SvgButton onPress={navigateOnBack}/>
      <View style={{alignItems:'center', paddingTop: 40, paddingBottom: 20}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Forgot password?</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter your username and the security information which you use to verify this account</Text>
      </View>
      
      <View style={{padding: 10}}><InforField title={'Username'} onInput={setusername}/></View>
      <View style={{padding: 10}}><InforField title={'What is your favourite animal?'} onInput={setPet}/></View>
      <View style={{padding: 10}}><InforField title={'Who is your favourite person?'} onInput={setPerson}/></View>

      <View>
      <Text style = {{color: 'red', fontSize: 14, opacity: wrongpass ? 1 : 0}}>Incorrect information or your username does not exist</Text>
      </View>

      <View style={{padding: 10}}><ConfirmButton title={'NEXT'} onPress={navigateOnNext}/></View>

    </View>
  );
}

