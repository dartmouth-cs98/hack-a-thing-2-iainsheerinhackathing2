import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Calendar() {
    return (
        <View style={styles.container} >
            <Text>Home Screen</Text>
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
