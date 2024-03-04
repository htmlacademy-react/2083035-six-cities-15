import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: '1',
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    isPremium: true,
    isFavorite: true,
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Angelina',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
    ]
  }, {
    id: '2',
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: false,
    isFavorite: true,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    description: 'Wood and stone place.',
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Mike',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Heating',
      'Coffee machine',
    ]
  }, {
    id: '3',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 180,
    isPremium: true,
    isFavorite: true,
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    description: 'Canal View Prinsengrach',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Mila',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Heating',
      'Coffee machine',
      'Dishwasher',
    ]
  }, {
    id: '4',
    name: 'Cozy apartment',
    type: 'Apartment',
    price: 150,
    isPremium: true,
    isFavorite: false,
    rating: 4.2,
    bedrooms: 3,
    maxAdults: 5,
    previewImage: 'img/apartment-03.jpg',
    description: 'Cozy apartment',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Jim',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Dishwasher',
    ]
  },
];
