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
    padding: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: "#7C7189",
    borderBottomWidth: 1,
  },
  image: {
    height: 64,
    width: 64,
    marginRight: 30,
    marginVertical: 10,
    borderRadius: 50,
  },
  text: {
    color: "#8A7E99",
  },
});

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = { fetchUsersAction };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
