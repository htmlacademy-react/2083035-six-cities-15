import { createAction } from '@reduxjs/toolkit';
import { CityMap } from '../types/city-map';
import { SortType } from '../const';

export const setCityActive = createAction('main/setCityActive', (value: string) => ({ payload: value }));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
export const getSortValue = createAction('main/getSortValue', (value: SortType) => ({ payload: value }));