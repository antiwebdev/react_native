import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//Form validation
import * as Yup from 'yup';
import { Formik } from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(6, 'Minimum length of password is 6 chars')
  .max(12, 'Maximum length of password is 12 chars')
  .required('Password is required')
})


export default function App() {

  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let allowedPasswordChars = ''
    if (isLowerCase) {
      allowedPasswordChars += 'qwertyuiopasdfghjklzxcvbnm'
    }
    if (isUpperCase) {
      allowedPasswordChars += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if (numbers) {
      allowedPasswordChars += '1234567890'
    }
    if (symbols) {
      allowedPasswordChars += '!#%&/()=?+-'
    }

    const passwordResult = createPassword(allowedPasswordChars, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (charasters: string,  passwordLength: number) => {
    let result = '';
    for (let index = 0; index < passwordLength; index++) {
      const charasterIndex = Math.round(Math.random()*charasters.length)
      result += charasters.charAt(charasterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIsLowerCase(true);
    setIsUpperCase(false)
    setNumbers(true)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={ values => {
              console.log(values)
              generatePasswordString(Number(values.passwordLength))
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='Ex. 7'
                      keyboardType='numeric'
                    />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>LowerCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isLowerCase}
                    onPress={ () => setIsLowerCase(!isLowerCase)}
                    fillColor='#29AB87'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>UpperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isUpperCase}
                    onPress={ () => setIsUpperCase(!isUpperCase)}
                    fillColor='#29AB87'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={ () => setNumbers(!numbers)}
                    fillColor='#29AB87'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={ () => setSymbols(!symbols)}
                    fillColor='#29AB87'
                  />
                </View>
                
                <View style={styles.formActions}>

                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }}
                  >
                    <Text style={styles.primaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>

                </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPasswordGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}> Password is : </Text>
              <Text selectable={true} style={styles.generatedPassword}> {password} </Text>
            </View>
          ) : null
        }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})