import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component{
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
        Actions.Login();
    }, 2000);
    if(this.state.timePassed){
        
    }
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }
  render() {
    return (
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0088ff"
        }}
      >
        <Image
          source={require("../images/logo.png")}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        />
        <Text style={{ fontSize: 30, color: "#ffdc64", fontWeight: "bold" }}>
          Taxi
          <Text style={{ fontSize: 30, color: "white" }}>gola</Text>
        </Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({});
