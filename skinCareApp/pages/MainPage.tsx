import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useContext } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Для навигации
import { RootStackParamList } from '../App'; // Импортируй типы стека
import { RoutineContext } from '../services/RoutineContext';

export default function MainPage() {

    const routineContext = useContext(RoutineContext);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    if (!routineContext) {
      return <Text>Контекст не найден!</Text>;
    }

    const {photo, setPhoto } = routineContext;
    

    const takePhoto = () => {
      launchCamera(
        {
          mediaType: 'photo',
          saveToPhotos: true,
        },
        (response) => {
          if (response.didCancel) {
            console.log('Пользователь отменил выбор фото');
          } else if (response.errorCode) {
            console.log('Ошибка ImagePicker: ', response.errorMessage);
          } else if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
            const source = { uri: response.assets[0].uri }; // Проверяем наличие uri
            setPhoto(source); // Сохраняем фото
          }
        }
      );
    };

  const chooseFromLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // Работаем с фото
      },
      (response) => {
        if (response.didCancel) {
          console.log('Пользователь отменил выбор фото');
        } else if (response.errorCode) {
          console.log('Ошибка ImagePicker: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
          const source = { uri: response.assets[0].uri }; // Проверяем наличие uri
          setPhoto(source);// Сохраняем изображение в состояние
          console.log("Photo is : " + source)
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {photo && <Image source={photo} style={styles.image} />}
      <Text style={styles.title}>Главная страница</Text>
      <Button title="Сделать фото" onPress={takePhoto} /> 
      <Button title="Выбрать из галереи" onPress={chooseFromLibrary} /> 
      {photo && (
        <>
          <Button
            title="Next"
            onPress={() => navigation.navigate('RoutinePage')} // Переход на страницу рутины
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
});
