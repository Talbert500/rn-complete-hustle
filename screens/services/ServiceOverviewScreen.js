import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import ServiceItem from '../../components/shop/ServiceItem';

import * as cartActions from '../../store/actions/cart';

import {Platform} from '@unimodules/core';

const ServiceOverviewScreen = props => {
  const services = useSelector(state => state.services.availableServices);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={services}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ServiceItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ServiceDetail', {
              serviceId: itemData.item.id,
              serviceTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ServiceOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Services',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ServiceOverviewScreen;
