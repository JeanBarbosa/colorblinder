import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

export default function Home() {

    onPlayPress = () => {
        console.log('onplay');
    }

    return (           
        <View style={styles.container}>
            <Header />
            
            <TouchableOpacity 
                onPress={onPlayPress}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                
                <Image 
                    source={require('../../../assets/icons/play_arrow.png')}
                    style={styles.playIcon}
                />

                <Text style={styles.play}>PLAY!</Text>

            </TouchableOpacity>

        </View>
    );

}