import React, { useState, useRef } from 'react';
import {View, Text, Image, ImageBackground, ScrollView, TextInput, Pressable, TouchableOpacity} from 'react-native';
import {SvgButton, InforField, ConfirmButton, SecureField, LoginField, LoginButton, RetryButton, url_server} from './Self_component'
import { Hidden } from 'native-base';

export const Login = ({navigation}) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [wrongpass, setwrongpass] = useState(false);
    const navigateOnForgot= () => {
        navigation.navigate('ForgotPassAsking');
    }
    const navigateOnSignup= () => {
        navigation.navigate('CreateAccountInformation');
    }
    const navigateOnLogin = async () => {
      fetch(url_server + '/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }).then(response => response.json()).then((value) => {
        if(value.success) navigation.navigate('Main');
        else setwrongpass(true);
      }).catch(console.error);

    //   fetch(url_server + '/user').then(response => response.json()).then((value) => {
    //     for(let i=0; i<value.data.length; i++){
    //       if(value.data[i].username == username && value.data[i].password == password) navigation.navigate('Main');
    //     }
    //     setwrongpass(true);
    // }).catch(console.error);
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
      
      <View style={{padding: 10}}><LoginField placeholder={'Username'} secureTextEntry={false} onInput={setusername}/></View>
      <View style={{padding: 10}}><LoginField placeholder={'Password'} secureTextEntry={true} onInput={setpassword}/></View>
      <View>
        <Text style = {{color: 'red', fontSize: 14, opacity: wrongpass ? 1 : 0}}>Incorrect username or password</Text>
        <RetryButton title={'Forgot password?'} onPress={navigateOnForgot}/>
      </View>
      <View style={{padding: 20}}><LoginButton title={'Log In'} backgroundColor={'#22668D'} textColor={'white'} onPress={navigateOnLogin}/></View>
      <View style={{padding: 20}}><LoginButton title={'Did not have an account?\n Sign Up!'} backgroundColor={'#FFFFFFFF'} textColor={'black'} onPress={navigateOnSignup}/></View>
    </View>
            </ImageBackground>
    
    </View>
  );
}
