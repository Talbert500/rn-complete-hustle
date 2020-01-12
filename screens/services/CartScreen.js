import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:<Text style={styles.amount}>${cartTotalAmount}</Text>
        </Text>
        <Button title="Order Now" />
      </View>
      <Text>Cart Items</Text>
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: 'calibre-bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});

export default CartScreen;
