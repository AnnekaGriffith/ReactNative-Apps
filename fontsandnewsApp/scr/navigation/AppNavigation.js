import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft =() =>{
    const navigation = useNavigation();
    return(
        < AntDesign name="menu-fold" size={24} onPress={() => {navigation.openDrawer()}} />
    );

}


function HomeNavigation(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerLeft: ()=> <HeaderLeft />
            }}
        >
            <Stack.Screen 
                name="NewsList" 
                component={NewsListScreen} 
                options={{title: 'All News'}}
            />
            <Stack.Screen 
                name="NewsDetails" 
                component={NewsDetailsScreen} 
                options={{title: 'News Details'}}
            />
        </Stack.Navigator>
    );
}
function FavoritesNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerLeft: ()=> <HeaderLeft />
            }}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    );
}
function AboutNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerLeft: ()=> <HeaderLeft />
            }}
        >
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}
function TabsNavigation(){
    return(
            <Tabs.Navigator
            screenOptions={({route})=>
            ({
                tabBarIcon: () => {
                    let iconName;
                    if(route.name=="Home")
                    {
                        iconName="home"
                    }
                    else if (route.name=="Favorites")
                    {
                        iconName="star"
                    }
                    return <AntDesign name={iconName} size={24} />
                }
            })}
        >
            <Tabs.Screen name="Home" component={HomeNavigation} />
            <Tabs.Screen name="Favorites" component={FavoritesNavigator} />
        </Tabs.Navigator>

    );
}

function AppNavigation(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name ="News" component={TabsNavigation}/>
                <Drawer.Screen name ="About" component={AboutNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;