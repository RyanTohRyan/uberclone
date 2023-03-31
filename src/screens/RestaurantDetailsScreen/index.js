import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
const restaurant = restaurants[0];



const RestaurantDetailsScreen = () => {
    return(
        <View style= {styles.page}>


<FlatList data={restaurant.dishes} 
ListHeaderComponent={()=> <Header restaurant={restaurant}/>}
renderItem={({item})=> <DishListItem dish={item} />}
/>

<Ionicons name="arrow-back-circle" size={45} color="white" style={styles.iconContainer} />
        </View>
    );
}


export default RestaurantDetailsScreen;