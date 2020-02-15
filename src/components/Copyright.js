import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const speakerOn = '../../assets/icons/speaker-on.png';
const speakerOff = '../../assets/icons/speaker-off.png';

export default function Copyright() {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const imageSource = isSoundOn ? require(speakerOn) : require(speakerOff);
    
    onToggleSound = () => {
        setIsSoundOn(!isSoundOn);
    }

    return (
        <View style={styles.container} >
            <View>
                <Text style={[styles.copyrightText, {color: '#E64C3C'}]}>
                    Music: Komiku
                </Text>
                <Text style={[styles.copyrightText, {color: '#F1C431'}]}>
                    SFX: SubspaceAudio
                </Text>
                <Text style={[styles.copyrightText, {color: '#3998DB'}]}>
                    Development: Jean Barbosa
                </Text>
            </View>
            
            <View>
                <TouchableOpacity
                    onPress={onToggleSound}
                >
                <Image
                    source={imageSource}
                    style={styles.soundIcon}
                />

            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 12.5,
        flexDirection: "row"
    },

    copyrightText:{
        fontSize: 16,
        fontFamily: "dogbyte",
        marginBottom: 2.5
    },

    soundIcon: {
        height: 35,
        width: 35,
    }

});