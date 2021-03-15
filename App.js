import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FatCalculatorScreen from './screens/FatCalculatorScreen';
import BMICalculatorScreen from './screens/BMICalculatorScreen';
import BMRCalculatorScreen from './screens/BMRCalculatorScreen';
import LBMCalculatorScreen from './screens/LBMCalculatorScreen';
import FatResults from './screens/FatResults';
import BMIResults from './screens/BMIResults';
import BMRResults from './screens/BMRResults';
import LBMResults from './screens/LBMResults';
import {StatusBar} from 'react-native';
import COLORS from './src/colors';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
    
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LBMCalculatorScreen" component={LBMCalculatorScreen}/>
      <Stack.Screen name="BMRCalculatorScreen" component={BMRCalculatorScreen}/>
      <Stack.Screen name="BMRResults" component={BMRResults}/>
      <Stack.Screen name="BMICalculatorScreen" component={BMICalculatorScreen}/>
      <Stack.Screen name="BMIResults" component={BMIResults}/>
      <Stack.Screen name="FatCalculatorScreen" component={FatCalculatorScreen}/> 
      <Stack.Screen name="LBMResults" component={LBMResults}/>
      <Stack.Screen name="FatResults" component={FatResults}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;