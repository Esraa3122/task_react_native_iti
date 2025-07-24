import { StyleSheet, Platform} from 'react-native';
import Home from './src/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Companies from './src/Pages/Companies';
import CompanyDetails from './src/Pages/CompanyDetails';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import LoginForm from './src/Pages/LoginForm';
import ToDoApp from './src/Pages/TodoList';


const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Companies" component={Companies} options={{ headerShown: false }}/>
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} options={{ title: "Movie Details", headerStyle: { backgroundColor: "#000" }, headerTintColor: "#fff" }}/>
    </Stack.Navigator>
  )
}

const App = () => {
  const Drawer = createDrawerNavigator();
  return(
  <NavigationContainer> 
      <Drawer.Navigator
      screenOptions={{
    drawerStyle: {
      backgroundColor: '#121212', 
    },
    drawerActiveTintColor: '#00C853', 
    drawerInactiveTintColor: '#fff', 
    headerStyle: {
      backgroundColor: '#121212', 
    },
    headerTintColor: '#fff',
  }}
      > 
          <Drawer.Screen name="List of Companies" component={MainStack}  options={{
      drawerIcon: ({ color, size }) => (
        <Ionicons name="list" size={size} color="#FFC107" />
      ),
    }}
          />
          <Drawer.Screen name="myHome" component={Home} options={{
      drawerIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color="#FFC107" />
      ),
    }}/>

     <Drawer.Screen name="myForm" component={LoginForm} options={{
      drawerIcon: ({ color, size }) => (
        <Ionicons name="log-in" size={size} color="#FFC107" />
      ),
    }}/>

     <Drawer.Screen name="myTodo" component={ToDoApp} options={{
      drawerIcon: ({ color, size }) => (
        <Ionicons name="checkmark-done-outline" size={size} color="#FFC107" />
      ),
    }}/>
       </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", 
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});