import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, url_server} from './Self_component'

export const ForgotPassNewPass = ({navigation, username}) => {
  const [firstpass, setfirstpass] = useState("");
  const [secondpass, setsecondpass] = useState("");
  const [isSame, setIsSame] = useState(true);
  const navigateOnFinish = () => {
    if(firstpass == secondpass){
      const data : Record<string, any> = {
        username: username,
        password: firstpass
      }
      const params = new URLSearchParams();
      for(const key in data){
        params.append(key, data[key]);
      }
      fetch(url_server + '/user/password').then(response => response.json()).then((value) => {
        if(value.success) navigation.navigate('Login');
        else setIsSame(false);
      }).catch(console.error);
    }
    else setIsSame(false);
    
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
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Create new password</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter your new password</Text>
      </View>
      
      <View style={{padding: 10}}><SecureField title={'New Password'} onInput={setfirstpass}/></View>
      <View style={{padding: 10}}><SecureField title={'Confirm password'} onInput={setsecondpass}/></View>
      <View>
      <Text style = {{color: 'red', fontSize: 14, opacity: !isSame ? 1 : 0}}>Your passwords is not the same, or something wrong happens</Text>
      </View>
      <View style={{padding: 10}}><ConfirmButton title={'CREATE NEW PASSWORD'} onPress={navigateOnFinish} /></View>

    </View>
  );
}
