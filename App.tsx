import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import OrderList from "./components/orderList/OrderList.ts";
import {FilterList} from "./components/filterList/FilterList";

export default function App(): JSX.Element {
  return(
      <SafeAreaView style={styles.container}>
        <FilterList/>
        <OrderList/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'web' ? '80%' : '95%',
    alignSelf: "center",
    marginTop: Platform.OS === 'web' ? 20 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
