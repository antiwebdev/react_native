import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

//Form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  password: Yup.number()
  .min(6, 'Minimum length of password is 6 chars')
  .max(12, 'Maximum length of password is 12 chars')
  .required('Password is required')
})


export default function App() {

  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {}

  const createPassword = (passwordString: string,  passwordLength: number) => {}

  const resetPasswordState = () => {}

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})