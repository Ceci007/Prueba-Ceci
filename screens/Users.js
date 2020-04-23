import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { fetchUsersAction } from "../redux/reducers/userReducer";

const Users = (props) => {
  useEffect(() => {
    props.fetchUsersAction();
  }, []);
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.users}
        renderItem={({ item: userItem }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Detail", { id: userItem.id })
            }
          >
            <View style={styles.container}>
              <Image style={styles.image} source={{ uri: userItem.avatar }} />
              <View>
                <Text
                  style={styles.text}
                >{`${userItem.first_name} ${userItem.last_name}`}</Text>
                <Text style={styles.email}>{userItem.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "#D2D1CC",
    borderBottomWidth: 1,
  },
  image: {
    height: 54,
    width: 54,
    marginRight: 30,
    marginVertical: 10,
    borderRadius: 50,
  },
  text: {
    color: "#2A2928",
    fontWeight: "bold",
    fontSize: 15,
  },
  email: {
    color: "#3F3E3D",
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = { fetchUsersAction };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
