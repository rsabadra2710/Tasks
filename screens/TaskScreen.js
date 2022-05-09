import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import {Header} from "react-native-elements"

const appIcon = require("../logo.png");


export default class TaskScreen extends React.Component {
   render(){
     return(
        <View style={styles.container}>
       
        <Header
          backgroundColor={'#3A3B3C'}
          centerComponent={{
            text: 'TASKS',
            style: { color: '#F5FFFA', fontSize: 20, fontWeight:'bold'},
          }}
        />
       <Text style={{fontWeight:"bold", fontFamily:"garamond-bold-italic",fontSize:35,
       marginLeft:25, color:'#565051'
       }}>Welcome Diligents </Text>

       <Image source={appIcon} style={styles.appIcon} />

        <Text style={{ fontFamily:"garamond-bold-italic",fontSize:20, 
        justifyContent:'center',
       marginLeft:20, color:"#565051"
       }}>"The beautiful thing about learning is that no one can take it away from you.”
        </Text>

        <Text style={{fontWeight:"bold", fontFamily:"garamond-bold-italic",fontSize:35,
       marginLeft:50, color:"#565051",marginTop:100
       }}>Slide to the left 👈🏻 </Text>

       
       
       </View>

     )
     
   }
  }

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },


  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  appIcon:{
 width:400,
 height:200,
 marginRight:5,
 justifyContent:'center',
 alignItems:'center'
 


  }
});

