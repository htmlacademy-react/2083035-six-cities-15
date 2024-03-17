import { createReducer } from '@reduxjs/toolkit';
import { setCityActive, getOffers, setChangeMap } from './action';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY, defaultLocation } from '../const';
import { SortType } from '../const';

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
  city: defaultLocation,
  sorting: SortType.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })

    .addCase(getOffers, (state) => {
      state.offers = offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    })

    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
