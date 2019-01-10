import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/action";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };
  placeNameChangeHandler = text => {
    this.setState({ placeName: text });
  };
  componentDidMount() {}

  placeSubmitHandler = () => {
    this.props.placeSubmit(this.state.placeName);
    this.setState({
      placeName: ''
    })
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    placeSubmit: placeName => dispatch(addPlace(placeName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(PlaceInput);
