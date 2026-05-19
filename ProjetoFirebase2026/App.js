

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/Login';
import Home from './screen/Home';
import AddProduct from './screen/AddProduct';

export default function App(){
  const Stack=createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AddProduct' component={AddProduct}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
