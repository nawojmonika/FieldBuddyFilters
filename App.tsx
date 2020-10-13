import React, {useReducer} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import OrderList from "./components/orderList/OrderList.ts";
import {FilterList} from "./components/filterList/FilterList";
import {FilterUtils} from "./Utils/FilterUtils";

export default function App(): JSX.Element {
  const [filters, filtersListDispatch] = useReducer(FilterUtils.filtersListStateReducer, {});
  console.log(filters);
  return(
      <SafeAreaView style={styles.container}>
          <OrderList filters={filters}/>
          <FilterList filters={filters} filtersListDispatch={filtersListDispatch}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'web' ? '80%' : '95%',
    alignSelf: "center",
    marginTop: Platform.OS === 'web' ? 20 : 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
