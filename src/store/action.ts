import { createAction } from '@reduxjs/toolkit';
import { CityMap } from '../types/city-map';
import { SortType } from '../const';
import { Offers } from '../types/offers';

export const setCityActive = createAction('main/setCityActive', (value: string) => ({ payload: value }));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
export const setSortedOffers = createAction('setSortedOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');