import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors';
const ServiceItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.service}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <Image style={styles.image} source={{uri: props.image}} />
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="To Cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
  },
  service: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: Colors.white,
    height: 300,
    margin: 20,
  },
  details: {
    alignItems: 'center',
    padding: 10,
    height: '15%',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'calibre-regular',
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: 'calibre-regular',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
});

export default ServiceItem;
