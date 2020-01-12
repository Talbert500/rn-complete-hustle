import React, {useState} from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import {AppLoading} from 'expo';
import cartReducer from './store/reducers/cart';
import * as Font from 'expo-font';

import serviceReducer from './store/reducers/services';

const rootReducer = combineReducers({
  services: serviceReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'calibre-bold': require('./assets/fonts/CalibreBold.otf'),
    'calibre-regular': require('./assets/fonts/CalibreRegular.otf'),
    'calibre-thin': require('./assets/fonts/CalibreLight.otf'),
    'calibre-light': require('./assets/fonts/CalibreThin.otf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
