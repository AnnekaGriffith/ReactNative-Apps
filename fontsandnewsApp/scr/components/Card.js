import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Card = props => {
 
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{uri: props.image}} />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}> {props.title} </Text>
                    <AntDesign name="staro" color="#72bcd4" size={24} />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style ={styles.description} >{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card : {
        backgroundColor: '#fff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },

    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'    
    },

    image: {
        height:'100%',
        width: '100%'
    },

    titleWrapper: {
        marginTop: 10,
        height: '10%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Dosis-Bold',
        fontSize: 20
    },

    descriptionWrapper: {
        marginTop: 10,
        paddingHorizontal: 30
    },

    description: {
        fontFamily: 'Dosis',
        fontSize: 15
    }
    
})

export default Card;