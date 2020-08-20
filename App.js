import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Meat' },
    { id: uuidv4(), text: 'Pasta' },
    { id: uuidv4(), text: 'Noodles' }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', "Item Cannot be an Empty String");
    }
    else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }

  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
