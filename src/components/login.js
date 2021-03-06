import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Switch
} from "react-native";
import {
  Container,
  Content,
  View,
  Text,
  Item,
  Icon,
  Input,
  Button
} from "native-base";

import { Actions } from "react-native-router-flux";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true
    };
  }
  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  render() {
    return (
        <Container  style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={[styles.header]}>
            <Image
              source={require("../images/bg.png")}
              resizeMode="stretch"
              style={styles.banner}
            />
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../images/logo.png")}
                resizeMode="contain"
                style={styles.logo}
              />
              <Text
                style={{ fontSize: 30, color: "#ffdc64", fontWeight: "bold" }}
              >
                Taxi
                <Text style={{ fontSize: 30, color: "white" }}>gola</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.content]}>
            <View>
              <Item rounded style={styles.itemInput}>
                <Icon
                  name="markunread"
                  type="MaterialIcons"
                  style={styles.itemIcon}
                />
                <Input placeholder="Email" placeholderTextColor="#959595" autoCorrect={false}
                returnKeyType={"next"}
                onSubmitEditing={(event) => { this.refs.passwordInput._root.focus(); }} style={{padding:0}}/>
              </Item>
              <Item rounded style={styles.itemInput}>
                <Icon
                  name="lock"
                  type="MaterialIcons"
                  style={styles.itemIcon}
                />
                <Input placeholder="Password" placeholderTextColor="#959595" autoCorrect={false}
                returnKeyType={"done"}
                ref='passwordInput' secureTextEntry={this.state.showPassword} style={{padding:0}}/>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={!this.state.showPassword}
                />
              </Item>
              <Item
                button
                rounded
                style={[styles.itemInput, { backgroundColor: "#0088ff" }]}
              >
                <Input disabled style={{ textAlign: "center" }}>
                  <Text style={{ color: "white" }}>Login</Text>
                </Input>
              </Item>
              <Item
                style={[styles.noneBoderBottom, { justifyContent: "center" }]}
              >
                <Text style={styles.forgotPass}>FORGOT PASSWORD</Text>
              </Item>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={{ color: "#959595",fontSize: 13 }}>Don't have an account? </Text>
            <Text style={{ color: "#0088ff",fontSize: 13 }}>Sign Up</Text>
          </View>
        </ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0,
    height: height / 3,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    padding: 30
  },
  banner: {
    position: "relative",
    height: height / 3,
    width,
    padding: 0
  },
  logo: {
    height: 50,
    width: 50,
    padding: 10
  },
  itemInput: {
    marginBottom: 15
  },
  itemIcon: {
    color: "#0088ff",
    fontSize: 20,
    marginRight: 10
  },
  itemButton: {
    backgroundColor: "#0088ff",
    width: width - 60,
    justifyContent: "center"
  },
  noneBoderBottom: { borderBottomWidth: 0 },
  forgotPass: { fontSize: 13, color: "#0088ff" },
  footer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10
  }
});
