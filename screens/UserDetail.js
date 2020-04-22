import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import { fetchUserId } from "../redux/reducers/userReducer";

const UserDetail = (props) => {
  useEffect(() => {
    props.fetchUserId(props.route.params.id);
  }, []);

  if (!props.selectedUser) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Image source={{ uri: props.selectedUser.avatar }} />
      <View>
        <Text>{`${props.selectedUser.first_name} ${props.selectedUser.last_name}`}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedUser: state.users.selectedUser,
  };
};

const mapDispatchToProps = { fetchUserId };

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
