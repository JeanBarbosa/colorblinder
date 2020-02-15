import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Copyright() {
  return (
    <View style={styles.container} >
        <Text style={[styles.copyrightText, {color: '#E64C3C'}]}>
            Music: Komiku
        </Text>
        <Text style={[styles.copyrightText, {color: '#F1C431'}]}>
            SFX: SubspaceAudio
        </Text>
        <Text style={[styles.copyrightText, {color: '#3998DB'}]}>
            Development: Jean Barbosa
        </Text>

        <TouchableOpacity>

        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 12.5
    },

    copyrightText:{
        fontSize: 16,
        fontFamily: "dogbyte",
        marginBottom: 2.5
    }

});