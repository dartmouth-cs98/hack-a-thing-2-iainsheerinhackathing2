/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
	return (
		<Navigator />
	)
}