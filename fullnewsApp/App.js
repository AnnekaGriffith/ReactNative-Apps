import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
export default function App() {

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  }
  return (
    <View>
      <Header title="Todo List" />
      <View style={styles.container}>
        <View>
          <TextInput 
            placeholder="Enter Todo list"
            style={styles.textInput}
            onChangeText={text => setTodoItem(text)}
            value={todoItem}  
          />
          <Button
            title="Add Todo"
            onPress={addTodoList}
          />
        </View>
        <ScrollView>
          {todoList.map(todo => 
          <View key={todo} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: '#333333',
    marginBottom: 10,
    borderWidth: 1
  },
  todoItem: {
    marginTop: 3,
    padding: 12,
    backgroundColor: 'yellow',
    borderRadius:10,
    
    borderColor: 'gray'
  }
});
