import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () => {
    const [ todo, setTodo ] = useState('');

    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const { todos, dispatch } = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { TodoContainer, listItem, buttonContainer, buttonText, input } = styles;

    const handleChange = (text) => {
        setTodo(text);
    }

    const handleAddTodoPress = () => {
        dispatch({type: 'ADD_TODO', text: todo});
        setTodo('');
    }

    const handleRemoveTodo = (id) => {
        dispatch({type: 'REMOVE_TODO', id});
    }

    return (
        <View style={[TodoContainer, theme]} >
            {
                todos.length ? (
                    <FlatList 
                        data={todos}
                        keyExtractor={(todo) => todo.id}
                        renderItem={({item}) => {
                            return <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}><Text style={[listItem, theme]} >{item.text}</Text></TouchableOpacity>
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text style={[listItem, theme]} >You have no Todos</Text>
                )
            }
            <TextInput 
                value={todo}
                onChangeText={(text) => handleChange(text)}
                style={input}
            />
            <TouchableOpacity onPress={handleAddTodoPress} style={buttonContainer}>
                <Text style={buttonText}>Add New Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeTheme} style={buttonContainer}>
                <Text style={buttonText}>Change Theme</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    TodoContainer: {
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },

    listItem: {
        color: 'black',
        fontSize: 18,
        paddingVertical: 10
    }, 

    buttonContainer: {
        backgroundColor: 'dodgerblue',
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }, 

    buttonText: {
        color: 'white',
        fontSize: 18
    },

    input: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        padding: 5
    }
});

export default TodoList;