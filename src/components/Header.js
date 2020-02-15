import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header (props){ 
    
    const fontsize = props.fontSize ? parseInt(props.fontSize, 10) : 50;

    return  (
        <View style={{ flexDirection: "row" }}>
            <Text style={[styles.header, { color: "#E64C3C", fontSize: fontsize }]}>c</Text>
            <Text style={[styles.header, { color: "#E57E31", fontSize: fontsize }]}>o</Text>
            <Text style={[styles.header, { color: "#F1C431", fontSize: fontsize }]}>l</Text>
            <Text style={[styles.header, { color: "#68CC73", fontSize: fontsize }]}>o</Text>
            <Text style={[styles.header, { color: "#3998DB", fontSize: fontsize }]}>r</Text>
            <Text style={[styles.header, {fontSize: fontsize}]}>blinder</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
      color: "#ecf0f1",
      fontFamily: "dogbyte"
    }
});
   