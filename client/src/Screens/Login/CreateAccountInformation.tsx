import React, { useState, useRef } from 'react';
import {View, Text, Image, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, url_server, ConfirmButton, SecureField} from './Self_component'

export const CreateAccountInformation = ({navigation}) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [pet, setPet] = useState("");
  const [person, setPerson] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [exist, setExist] = useState(false);
    const navigateOnNext = () => {
      // const data: Record<string, any> = {
      //   firstname: firstname,
      //   lastname: lastname,
      //   email: email,
      //   phone: phone,
      //   address: address,
      //   username: username,
      //   password: password,
      //   pet: pet,
      //   person: person
      // }
      // let params = new URLSearchParams();
      // for(let key in data){
      //   params.append(key, data[key]);
      // }
      fetch(url_server + '/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname,
          email: email,
          phone: phone,
          address: address,
          username: username,
          password: password,
          pet: pet,
          person: person
        })
      }).then(response => response.json()).then((value) => {
        console.log(value);
        if(value.success) navigation.navigate('Login');
        else setExist(true);
      }).catch(console.error);
      }
      const navigateOnBack = () => {
        navigation.navigate('Login');
      }
  return (
    <ScrollView>
      <View style={{justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60}}>
      <SvgButton onPress={navigateOnBack}/>
      <View style={{alignItems:'center'}}>
      <Text style = {{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Create new account</Text>
      <Text style = {{color: 'black', fontSize: 14, fontStyle: 'italic'}}>Please enter the following requested information to create new account</Text>
      </View>
      
      <View style={{padding: 5}}><InforField title={'First name'} onInput={setfirstname}/></View>
      <View style={{padding: 5}}><InforField title={'Last name'} onInput={setlastname}/></View>
      <View style={{padding: 5}}><InforField title={'Email'} onInput={setemail}/></View>
      <View style={{padding: 5}}><InforField title={'Phone Number'} onInput={setphone}/></View>
      <View style={{padding: 5}}><InforField title={'Address'} onInput={setaddress}/></View>

      <View style={{padding: 5}}><InforField title={'Username'} onInput={setusername}/></View>
      <View style={{padding: 5}}><SecureField title={'Password'} onInput={setpassword}/></View>
      <View><Text style = {{color: 'red', fontSize: 14, opacity: exist ? 1 : 0}}>Username already exists. Please use another</Text></View>

      <View><Text style = {{color: 'black', fontSize: 14,}}>These are security questions</Text></View>
      <View style={{padding: 5}}><InforField title={'What is your favourite animal?'} onInput={setPet}/></View>
      <View style={{padding: 5}}><InforField title={'Who is your favourite person?'} onInput={setPerson}/></View>

      
      
      <View style={{padding: 5}}><ConfirmButton title={'NEXT'} onPress={navigateOnNext}/></View>
    </View>
    </ScrollView>
  );
}
