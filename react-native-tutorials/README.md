# REACT NATIVE NAVIGATION DESIGN

## first install
```bash
npm install @react-navigation/native @react-navigation/native-stack
```
Then install 
```bash
npx expo install react-native-screens react-native-safe-area-context
```

## For Bottom tab navigation
```bash
npm install @react-navigation/bottom-tabs
```
## For Drawer navigation
```bash
npm install @react-navigation/drawer
```
Then install
```bash
expo install react-native-gesture-handler react-native-reanimated
```
Also add reanimated plugins in babel.config
```react
  module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```
## Practices
- ### Designing Navigation

For Icon Import
```javascript
import Icon from 'react-native-vector-icons/Ionicons'

// Usage
({ color, size, focused }) => (<Icon name='settings' size='22' color='dodgerblue' />)
```

```javascript

  /* bellow import required for gestures and reanimation, keep at top always */
  import 'react-native-gesture-handler'
  import { NavigationContainer } from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';

  const Stack = createNativeStackNavigator();

  export default function App() {
    ...
    return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={
            //object of options
          } 
          initialRouteName="stack_name" >

          <Stack.Screen name='stack_name' component={Component-imported} options={
            //object of options
          }/>
          ...

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
```

- ### Designing Bottom Tab Navigation
```javascript
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
  import Icon from 'react-native-vector-icons/Ionicons'

  const Tab = createBottomTabNavigator()

  export default function BottomTab () {
    ...
    return (
      <Tab.Navigator>

        <Tab.Screen name='Tab-name' component={Component-imported} options={{
          headerShown: false,
        }}  />

      </Tab.Navigator>
    )
  }

```

- ### Designing Drawer Navigation
```javascript
  import { createDrawerNavigator } from '@react-navigation/drawer'

  const Drawer = createDrawerNavigator()

  export default function DrawerNagivation() {
    ...
    return (
      <Drawer.Navigator>

        <Drawer.Screen name='Drawer-name' component={Component-imported} options={{ headerShown: false }} />

      </Drawer.Navigator>
    )
  }
```

- ### Adding Custom Drawer Design

First in your Drawer component add
```javascript
  <Drawer.Navigator 
    drawerContent = { props => <CustomDrawer { ...props } />}
  >
```

Next create "CustomDrawer.js" add 
```javascript
  import { Image, ImageBackground, StyleSheet, View, Dimensions } from 'react-native'

  import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

  const { width, height } = Dimensions.get('screen')

  const CustomDrawer = (props) => {
    const { children, accessibility, onPress } = props

    return (
      <DrawerContentScrollView { ...props }>
        <ImageBackground source={require('../assets/icon.png')} style={styles.background}>
          <Image source={require('../assets/favicon.png')}  style={styles.userImg} />
        </ImageBackground>
        <View style={styles.itemList}>
          <DrawerItemList { ...props } />
        </View>
      </DrawerContentScrollView>
    )
  }

  export default CustomDrawer

  const styles = StyleSheet.create({
    background: {
      height: 200,
      width: '100%',
      position: 'absolute',
    },
    itemList: {
      position: 'relative',
      top: 220,
      height: 400,
    },
    userImg: {
      width: 110,
      height: 110,
      borderRadius: 90 / 2,
      position: 'absolute',
      left: width / 2 - 110,
      top: 200 - (110 / 2),
      borderWidth: 5,
      borderColor: 'white',
    }
  })
```

#### sideNote
```javascript
  //Some of the options for Stack.Navigator:
    {
      headerBackTitleVisible: false,
    }

  //Some of the options for Stack.Screen:
    {
      headerTitle: 'TitleExample',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerShown: false,
      headerRight: {
        // return toggler icon
      }
    }

  //Some of the options for Tab.Navigator
  <Tab.Navigator screenOptions={({route})=> ({ 
      headerShown: false,
      tabBarActiveTintColor: 'orange',
      tabBarShowLabel: false,
      tabBarStyle: {
        // css styles
      },
      tabBarIcon: ({color, size, focused }) => {
        // To set icons for the tab bar menu through {route} destructure
        let iconName;

        if(route.name === 'Wallet')
          iconName = focused ? 'ios-home-sharp': 'ios-home-outline'
        else
          iconName = focused ? 'settings': 'settings-outline'
        return <Icon name={iconName} size={22} color={color} />
      }
    })}>
    ....
    </Tab.Navigator>

  //Some of the options for Tab.Screen
  <Tab.Screen name='Wallet' component={Wallet} options={{
    headerShown: false,
    tabBarLabel: 'Wallets',
  }} />

  //Some of the options for Drawer.Navigation
  <Drawer.Navigator 
    drawerContent = { props => <CustomDrawer { ...props } />}
    screenOptions={
      {
        headerShown: false,
        drawerActiveBackgroundColor: 'orange'
        drawerLabelStyle: {
            margin: 2
        }
      }
  }>
```
#### sideNote: Manual Drawer Navigation:
```javascript
  // Added in screen options
  {
    headerRight: ({ color, size, focused }) => (
      <TouchableOpacity /*onPress={ () => navigation.openDrawer() }*/ >
        <Icon
        name={ Platform.OS === 'ios' ? 'ios-menu' : 'md-menu' }
        size={ 30 }
        color= 'dodgerblue'
        />
      </TouchableOpacity>)
  }
```
