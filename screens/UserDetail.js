import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { fetchUserId } from "../redux/reducers/userReducer";

const UserDetail = (props) => {
  useEffect(() => {
    props.fetchUserId(props.route.params.id);
  }, []);

  if (!props.selectedUser) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#2A2928" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.selectedUser.avatar }} />
      <View>
        <Text
          style={styles.text}
        >{`${props.selectedUser.first_name} ${props.selectedUser.last_name}`}</Text>
        <Text style={styles.email}>{props.selectedUser.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 20,
    borderRadius: 50,
  },
  text: {
    color: "#2A2928",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  email: {
    color: "#3F3E3D",
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    selectedUser: state.users.selectedUser,
  };
};

const mapDispatchToProps = { fetchUserId };

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
