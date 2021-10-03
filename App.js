import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens';
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/navigation/navigation'

enableScreens();

const store = configureStore()
store.dispatch(initialiseApplication())

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <Navigation />
    </Provider>
  )
}