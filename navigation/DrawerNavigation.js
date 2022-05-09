import React,{Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TaskScreen from "../screens/TaskScreen"
import Sixth from "../screens/6thGrade"
import Seventh from "../screens/7thGrade"
import Eighth from "../screens/8thGrade"
import Ninth from "../screens/9thGrade"

const Drawer = createDrawerNavigator();



import CustomSidebarMenu from "../screens/CustomSidebarMenu";


export default class DrawerNavigator extends Component {
  

  

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#3D3C3A",
          inactiveTintColor : "white",
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="TaskScreen"
          component={TaskScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="6thGrade"
          component={Sixth}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="7thGrade"
          component={Seventh}
          options={{ unmountOnBlur: true }}
        />
         <Drawer.Screen
          name="8thGrade"
          component={Eighth}
          options={{ unmountOnBlur: true }}
        />
         <Drawer.Screen
          name="9thGrade"
          component={Ninth}
         options={{ unmountOnBlur: true }}
        />

      </Drawer.Navigator>
    );
  }
}
