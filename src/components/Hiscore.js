import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Hiscore() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image 
            source={require('../../assets/icons/trophy.png')} 
            style={styles.trophyIcon}
        />

        <Text style={styles.hiscore}>Hi-score: 0</Text>

    </View>
  );
}

const styles = StyleSheet.create({

    hiscore: {
        fontSize: 28.5,
        fontFamily: 'dogbyte',
        color: "#ecf0f1",
        marginTop: 5
    },

    trophyIcon: {
        height: 45,
        width: 45,
        marginRight: 12.5
    }
   
});