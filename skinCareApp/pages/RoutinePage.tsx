import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
import React, {useState} from 'react'

export default function RoutinePage() {

    const [product, setProduct] = useState('');
    const [productList, setProductList] = useState<string[]>([]);

    const addnewProduct = () => {
        if(product.trim()) {
            setProductList([...productList, product]);
            setProduct('');
        }
    }

    const deleteProduct = (index: number) => {
        const updatedList = productList.filter((_,i) => i !== index);
        setProductList(updatedList);
    }

  return (
    <View style= {styles.container}>
        <Text style={styles.title}>Add your current skin routine</Text>
        <TextInput
            style={styles.input}
            placeholder='Your product'
            value={product}
            onChangeText={setProduct}
        />

        <Button title="Add" onPress={addnewProduct}/>

        <FlatList
            data={productList}
            renderItem={({item, index}) => (
                <View style={styles.productItem}>
                    <Button title="Delete" onPress={() => deleteProduct(index)} />
                    <Text>{item}</Text>
                </View>
            )}
            keyExtractor={(_, index) => index.toString()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      color: 'black'
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    productItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
  });