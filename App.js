import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from "./assets/data/restaurants.json";
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import OrdersScreen from './src/screens/OrdersScreen';

import OrderDetails from './src/screens/OrderDetails';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <DishDetailsScreen/> */}
    <OrderDetails/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 10,
  },
  
});
