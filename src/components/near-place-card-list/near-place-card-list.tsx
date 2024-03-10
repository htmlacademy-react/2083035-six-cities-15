import NearPlaceCard from '../near-place-card/near-place-card';
import { Offers } from '../../types/offers';

type NearPlaceCardListProps = {
    offerList: Offers;
    setCardHoverId(id: string | null): void;
}

function NearPlaceCardList({ offerList, setCardHoverId }: NearPlaceCardListProps): JSX.Element {

  return (
    < >
      {offerList.map((offer) => {
        const keyValue = offer.id;
        return (
          <NearPlaceCard key={keyValue} offerCard={offer} setCardHoverId={setCardHoverId} />
        );
      })}
    </>
  );
}

export default NearPlaceCardList;
