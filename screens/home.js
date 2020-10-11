import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
import Sandbox from '../components/sandbox';

export default function Home({ navigation }) {
	const [todos, setTodos] = useState([
    	{ text: 'buy coffee', key: '1' },
    	{ text: 'create an app', key: '2' },
    	{ text: 'play on the switch', key: '3' }
	]);

	const pressHandler = (key, item) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key != key)
		})
    }
    
    const pressNav = (key) => {
        navigation.push('Other')
    }

	const submitHandler = (text) => {

		if(text.length > 3) {
			setTodos((prevTodos) => {
				return [
					{text: text, key: Math.random().toString()},
					...prevTodos
				]
			})
		} else {
			Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
				{text: 'Understood', onPress: () => console.log('alert closed')}
			])
		}
	}

	return (
		//<Sandbox />
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
			console.log('Dismissed Keyboard')}
			}>
			<View style={styles.container}>
				<Header />
                <Button title='go to other' onPress={pressNav}></Button>
				<View style={styles.content}> 
					<AddTodo submitHandler={submitHandler}/>
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={( {item} ) => (
								<TodoItem item={item} pressHandler={pressHandler}/>
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
		flex: 1,
	},
	list: {
		marginTop: 20,
		flex: 1,
	}
})
