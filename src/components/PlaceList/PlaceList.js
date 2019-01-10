import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={({ item }) => (
      <ListItem
        placeName={item.name}
        placeImage={item.image}
        onItemPressed={() => props.onItemSelected(item.key)}
      />
    )}
    keyExtractor={item => item.key}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
