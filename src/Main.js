import React, { Component } from 'react';
import { Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createDrawerNavigator ,createStackNavigator, createAppContainer , DrawerItems} from 'react-navigation'
import Home from './Home'
export default class Main extends Component {
  render() {
    return (
        <MyApp />
    );
  }
}

const CustomDrawerContentComponent = ( props ) => {
return  <Container >
      <Header style={{backgroundColor:'#a928bd'}}>
      <Body style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'#fff', fontSize:18}}>Savo App</Text>
      </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
  </Container>
}
const MyApp = createAppContainer(createDrawerNavigator(
  {
    Home: {
      screen:Home,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    PaymentMethod: {
      screen:Home,
      navigationOptions: {
        drawerLabel: 'Payment Methods',
        drawerIcon: ({ tintColor }) => (
          <Icon name="wallet" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Settings: {
      screen:Home,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name="settings" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    GetHelp: {
      screen:Home,
      navigationOptions: {
        drawerLabel: 'Get Help',
        drawerIcon: ({ tintColor }) => (
          <Icon name="help-box" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    
  },
  {
    contentComponent:CustomDrawerContentComponent,
drawerOpenRoute:'DrawerOpen',
drawerCloseRoute:'DrawerClose',
drawerToggleRoute:'DrawerToggle',
mode: 'modal',
headerMode: 'none',
}
))






    