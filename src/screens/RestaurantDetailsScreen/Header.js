import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import styles from "./styles";
const restaurant = restaurants[0];



const RestaurantDetailsScreen = () => {
    return(
        <View style= {styles.page}>
            <Image source={{uri: restaurant.image}} style= {styles.image}/>

          <View style= {styles.container}>
  <Text style= {styles.title}>{restaurant.name}</Text>
  <Text style= {styles.subtitle}>$ {restaurant.deliveryFee}   {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min
  </Text>
  <Text style= {styles.menuTitle}>menu title</Text>
   </View>


        </View>
    );
}



export default RestaurantDetailsScreen;