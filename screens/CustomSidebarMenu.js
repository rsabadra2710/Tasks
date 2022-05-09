import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export default class CustomSidebarMenu extends Component {
  

  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:  "#E5E4E2"
        }}
      >
        <Image
          source={require("../logo.png")}
          style={styles.sideMenuProfileIcon}
        ></Image>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 300,
    height: 150,
    borderRadius: RFValue(70),
    alignSelf: "center",
    marginTop: 5,
    resizeMode: "contain"
  }
});
