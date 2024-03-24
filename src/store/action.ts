import { createAction } from '@reduxjs/toolkit';
import { CityMap } from '../types/city-map';
import { SortType } from '../const';
import { Offers, Offer } from '../types/offers';
import { Reviews } from '../types/reviews';
import { AppRoute, AuthorizationStatus, NameSpace } from '../const';
import { UserLogIn } from '../types/user';

export const setCityActive = createAction('main/setCityActive', (value: string) => ({ payload: value }));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
export const setSortedOffers = createAction('setSortedOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offer | null>('data/loadOffer');
export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
export const setOfferIsLoading = createAction<boolean>('setOfferIsLoading');
export const setOfferIsNotFound= createAction<boolean>('setOfferIsNotFound')
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const setUser = createAction<UserLogIn | null>(`${NameSpace.User}/setUser`);
export const addReviews = createAction<Reviews>('data/addReviews');
export const loadNearOffers = createAction<Offers>('data/loadNearOffers');
export const setNearOffersIsLoading = createAction<boolean>('data/setNearOffersIsLoading');
export const setNearOffersIsNotFound = createAction<boolean>('data/setNearOffersIsNotFound');