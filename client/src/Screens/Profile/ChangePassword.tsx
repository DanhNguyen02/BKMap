import { Text, View, Box, Button } from "native-base"
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const ChangePassword = () => {
  const navigation = useNavigation<any>();
  const returnProfile = () => navigation.navigate("ProfileDetail");

  const [currentPassword, setCurrentPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const toggleShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword)

  const [newPassword, setNewPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword)

  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity 
        style={{
          position: 'absolute',
          left: 20,
          top: 20
        }}
        onPress={returnProfile}
      >
        <Ionicons name="chevron-back" size={40} color="black"/>
      </TouchableOpacity>
      <Text 
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          padding: 30
        }}
      >Change password</Text>
      <Box style={styles.boxInput}>
        <Text style={styles.inputHeader}>Old password</Text>
        <Box style={styles.containerInput}>
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={!showCurrentPassword}
            value={currentPassword}
            onChangeText={setCurrentPassword} 
            placeholder="Enter current password"
          />
          <MaterialCommunityIcons 
            name={showCurrentPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowCurrentPassword} 
          /> 
        </Box>
      </Box>
      <Box style={styles.boxInput}>
        <Text style={styles.inputHeader}>New password</Text>
        <Box style={styles.containerInput}>
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword} 
            placeholder="Enter new password"
          />
          <MaterialCommunityIcons 
            name={showNewPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowNewPassword} 
          /> 
        </Box>
      </Box>
      <Box style={styles.boxInput}>
        <Text style={styles.inputHeader}>Confirm new password</Text>
        <Box style={styles.containerInput}>
          <TextInput 
            style={styles.textInput} 
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword} 
            placeholder="Confirm new password"
          />
          <MaterialCommunityIcons 
            name={showConfirmPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowConfirmPassword} 
          /> 
        </Box>
      </Box>
      <Button style={{ marginTop: 10   }}>
        <Text fontSize={18} color='#FFF'>Change Passowrd</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  boxInput: {
    width: '90%',
    marginBottom: 15
  },
  inputHeader: {
    padding: 5
  },
  textInput: {
    backgroundColor: '#F3F8FF', 
    padding: 15,
    borderRadius: 15,
    borderColor: '#9E9E9E',
    width: '100%',
    borderWidth: 1,
  },
  containerInput: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  icon: { 
    marginLeft: -35,
  }, 
})