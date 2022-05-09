import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
 Image,
  Linking,
} from 'react-native';

const appIcon = require("../9_grade.png");

export default class Ninth extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={appIcon} style={styles.appIcon} />
       
        <TouchableOpacity style={[styles.button1]}>
          <Button
            color="#565051"
            title="Simple"
            onPress={() =>
              Linking.openURL(
                'https://www.learncbse.in/extra-questions-for-class-9-maths/'
              )
            }
          />
        </TouchableOpacity>
         <TouchableOpacity style={[styles.button2]}>
          <Button
            color="#565051"
            
            title="Medium"
            onPress={() =>
              Linking.openURL(
                'https://www.learninsta.com/extra-questions-for-class-9-maths/'
              )
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button3]}>
          <Button
            color="#565051"
            title="Hard"
            onPress={() =>
              Linking.openURL(
                'https://byjus.com/maths/important-questions-class-9-maths/'
              )
            }
          />
        </TouchableOpacity>
         <TouchableOpacity style={[styles.button3]}>
          <Button
            color="#565051"
            title="Quiz"
            onPress={() =>
              Linking.openURL(
                'https://physicscatalyst.com/testprep/class-9-math-online-tests/'
              )
            }
          />
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B6B6B4',
  },
   appIcon:{
 width:400,
 height:200,
 marginRight:5,
 justifyContent:'center',
 alignItems:'center'},

  button1: { marginTop: 30 },
  button2: { marginTop: 40},
  button3: { marginTop: 50 },

});
