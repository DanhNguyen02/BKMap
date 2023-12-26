import { Text, View, Box, Button, ScrollView } from "native-base"
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export const UpdateProfile = () => {
  const navigation = useNavigation<any>();
  const returnProfile = () => navigation.navigate("ProfileDetail");

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
      >Edit profile</Text>
      <ScrollView style={{ width: '90%' }}>
        <Box style={styles.boxInput}>
          <Text style={styles.inputHeader}>Full name</Text>
          <TextInput 
            style={styles.textInput} 
            value="Lionel Messi"
          />
        </Box>
        <Box style={styles.boxInput}>
          <Text style={styles.inputHeader}>Username</Text>
          <TextInput 
            style={styles.textInput} 
            value="eightballond'or"
            editable={false} 
            selectTextOnFocus={false}
          />
        </Box>
        <Box style={styles.boxInput}>
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput 
            style={styles.textInput} 
            value="worldcupchampion@intermiami.com"
            editable={false} 
            selectTextOnFocus={false}
          />
        </Box>
        <Box style={styles.boxInput}>
          <Text style={styles.inputHeader}>Phone number</Text>
          <TextInput 
            style={styles.textInput} 
            value="0123456789"
          />
        </Box>
        <Box style={styles.boxInput}>
          <Text style={styles.inputHeader}>Address</Text>
          <TextInput 
            style={styles.textInput} 
            value="Inter Miami, United States"
          />
        </Box>
        <Button style={{ marginTop: 10, backgroundColor: '#22668D' }}>
          <Text fontSize={18} color='#FFF'>Update</Text>
        </Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  boxInput: {
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
})