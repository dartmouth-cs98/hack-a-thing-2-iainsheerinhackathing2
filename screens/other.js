import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Other({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container} >
            <Text>Other</Text>
            <Button title='back to home screen' onPress= {pressHandler} />
        </View>
    )
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
