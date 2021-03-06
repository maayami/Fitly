import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { Context as UserDataContext } from "../../context/AuthContext";

function EditProfile({ navigation }) {
  const { state, editprofile } = useContext(UserDataContext);
  const [Name, onChangeName] = React.useState(state.username);
  const [Age, changeAge] = React.useState("19");
  const [Email, onChangeEmail] = React.useState("mayank16meena@gmail.com");
  const [Password, onChangePassword] = React.useState("mayank321");

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        position: "relative",
        backgroundColor: "#ff005a",
      }}
    >
      <Text style={{ fontSize: 25, color: "white", marginTop: 20 }}>
        Edit your Name
      </Text>

      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
        }}
        onChangeText={(text) => onChangeName(text)}
        value={Name}
      />

      {/* <Text style={{ fontSize: 25, color: "white", marginTop: 20 }}>
        {" "}
        Edit your Age
      </Text> */}
      {/* 
      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 10,
        }}
        onChangeText={(text) => changeAge(text)}
        value={state.age}
      /> */}
      {/* <Text style={{ fontSize: 25, color: "white", marginTop: 20 }}>
        {" "}
        Edit your Email ID
      </Text>

      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
        }}
        onChangeText={(text) => onChangeEmail(text)}
        value={Email}
      />

      <Text style={{ fontSize: 25, color: "white", marginTop: 20 }}>
        {" "}
        Edit your Password
      </Text>

      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 10,
        }}
        onChangeText={(text) => onChangePassword(text)}
        value={Password}
      /> */}
      <Button
        color="black"
        onPress={() => {
          editprofile({ Email: state.email, NewUsername: Name });
          navigation.navigate("Profile");
        }}
        title="Save"
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditProfile;
