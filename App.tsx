import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OrderList from "./components/orderList/OrderList.ts";
import {FilterList} from "./components/filterList/FilterList";

export default function App(): JSX.Element {
  return(
      <View style={styles.container}>
        <FilterList/>
        <OrderList/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85vw',
    marginTop: '15px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});
