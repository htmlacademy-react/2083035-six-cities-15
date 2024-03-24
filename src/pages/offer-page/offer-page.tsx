import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import ReviewCardList from '../../components/review-card-list/review-card-list';
import Map from '../../components/map/map';
import NearPlaceCardList from '../../components/near-place-card-list/near-place-card-list';
import NotFoundPage from '../not-found-page/not-found-page';
import NavList from '../../components/nav-list/nav-list';
import Spinner from '../../components/spinner/spinner';
import { store } from '../../store';
import { fetchOfferAction, fetchReviewsAction, fetchNearOffersAction } from '../../store/api-actions';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const cityMapActive = useAppSelector((state) => state.city);
  const selectedCard = useAppSelector((state) => state.offers).filter((offer) => offer.id === id)[0];
  const foundOffer = useAppSelector((state) => state.offers).find((offer): boolean => offer.id.toString() === id);
  const reviewsActive = useAppSelector((state) => state.reviews);
  const offersIsLoading = useAppSelector((state) => state.offersIsLoading);

  if (!foundOffer) {
    return (<NotFoundPage />);
  }

  const offerPage = { ...selectedCard, ...foundOffer };
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const nearOffersIsLoading = useAppSelector((state) => state.nearOffersIsLoading);
  const activeNearOffers = nearOffers.slice(0, Math.min(3, nearOffers.length))
  const nearOfferPlusSelectedCard = [offerPage, ...activeNearOffers];

  useEffect(() => {
    store.dispatch(fetchOfferAction(id));
    store.dispatch(fetchReviewsAction(id));
    store.dispatch(fetchNearOffersAction(id));
  }, [id]);


  return (
    <div className="page">
      <Helmet>
        <title>Six cities. Offer.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <NavList />
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        {offersIsLoading && <Spinner />}
        {selectedCard && !offersIsLoading && (
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {selectedCard.images?.length > 0 &&
                  selectedCard.images.map((url, id) => {
                    const keyValue = `${id}-${url}`;
                    return (
                      <div key={keyValue} className="offer__image-wrapper">
                        <img className="offer__image" src={url} alt="Photo studio" />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {selectedCard.isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                  : ''}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {selectedCard.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className={`offer__bookmark-icon ${selectedCard.isFavorite ? 'offer__bookmark-button--active' : ''}`} width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: '80%' }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{selectedCard.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{selectedCard.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {selectedCard.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {selectedCard.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{selectedCard.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                {selectedCard.goods && (
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">Whats inside</h2>
                    <ul className="offer__inside-list">
                      {selectedCard.goods.map((good) => {
                        const keyValue = good;
                        return (<li key={keyValue} className="offer__inside-item">{good}</li>);
                      })}
                    </ul>
                  </div>
                )}
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    {selectedCard.host?.avatarUrl && (
                      <div className={`offer__avatar-wrapper ${selectedCard.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                        <img
                          className="offer__avatar user__avatar"
                          src={selectedCard.host.avatarUrl}
                          width={74}
                          height={74}
                          alt="Host avatar"
                        />
                      </div>
                    )}
                    {selectedCard.host?.hostName && (
                      <span className="offer__user-name">{selectedCard.host.hostName}</span>
                    )}
                    {selectedCard.host?.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the
                      unique lightness of Amsterdam. The building is green and from
                      18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand
                      Square and National Opera, but where the bustle of the city
                      comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                {reviewsActive && (<ReviewCardList reviewList={reviewsActive} offerId={id} />)}
              </div>
            </div>
            <Map mapType={'offer'} offers={nearOfferPlusSelectedCard} cardHoverId={offerPage.id} city={cityMapActive} />
          </section>
        )}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {!nearOffersIsLoading && (
                <NearPlaceCardList offerList={activeNearOffers} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
