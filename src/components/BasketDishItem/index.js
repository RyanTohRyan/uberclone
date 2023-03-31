import {View, Text, StyleSheet, FlatList}  from 'react-native';
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from "@expo/vector-icons";
import { useState } from 'react';
const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
        <Text>1</Text>
    </View>
    <Text style={{fontWeight: "600"}}>{basketDish.name}</Text>

    <Text style={{marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
    );
};

const styles = StyleSheet.create({

    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    quantityContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical: 2, 
        marginRight: 10,
        borderRadius: 2,
    },
   
    row: {
        flexDirection: "row",
        alignItems: "center",
     
marginVertical: 15,
paddingHorizontal: 10,
    },
 
});

export default BasketDishItem;