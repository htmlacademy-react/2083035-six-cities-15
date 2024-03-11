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
  }, {
    id: '5',
    name: 'Luxe apartment',
    type: 'Apartment',
    price: 160,
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    description: 'Luxe partment',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
      'img/apartment-03.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856615550,
        longitude: 2.351499004,
        zoom: 10
      }
    },
    location: {
      latitude: 48.856615550,
      longitude: 2.351499004,
      zoom: 10
    },
    host: {
      hostName: 'Lima',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Dishwasher',
      'Heating',
    ]
  }, {
    id: '6',
    name: 'Wood and stone place',
    type: 'Room',
    price: 90,
    isPremium: true,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    description: 'Wood and stone place',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361021,
        longitude: 6.959974158,
        zoom: 10
      }
    },
    location: {
      latitude: 50.938361021,
      longitude: 6.959974158,
      zoom: 10
    },
    host: {
      hostName: 'Rick',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Heating',
    ]
  }, {
    id: '7',
    name: 'Modern apartment',
    type: 'Apartment',
    price: 110,
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-small-03.jpg',
    description: 'Modern apartment',
    images: [
      'img/apartment-small-03.jpg',
      'img/apartment-small-03.jpg',
      'img/apartment-small-03.jpg',
      'img/apartment-small-03.jpg',
      'img/apartment-small-03.jpg',
      'img/apartment-small-03.jpg',
    ],
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557154,
        longitude: 4.351697178,
        zoom: 10
      }
    },
    location: {
      latitude: 50.846557154,
      longitude: 4.351697178,
      zoom: 10
    },
    host: {
      hostName: 'Morty',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Coffee machine',
      'Towels',
      'Heating',
    ]
  }, {
    id: '8',
    name: 'Tiny apartment',
    type: 'Apartment',
    price: 110,
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-small-04.jpg',
    description: 'Tiny apartment',
    images: [
      'img/apartment-small-04.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-small-04.jpg',
      'img/apartment-small-04.jpg',
    ],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341789,
        longitude: 10.000654654,
        zoom: 10
      }
    },
    location: {
      latitude: 53.550341789,
      longitude: 10.000654654,
      zoom: 10
    },
    host: {
      hostName: 'Mia',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Coffee machine',
      'Towels',
      'Heating',
    ]
  }, {
    id: '9',
    name: 'Cozy room',
    type: 'Room',
    price: 180,
    isPremium: true,
    isFavorite: false,
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    description: 'Cozy room',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402157,
        longitude: 6.776314654,
        zoom: 10
      }
    },
    location: {
      latitude: 51.225402157,
      longitude: 6.776314654,
      zoom: 10
    },
    host: {
      hostName: 'Ann',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Dishwasher',
    ]
  },
];
