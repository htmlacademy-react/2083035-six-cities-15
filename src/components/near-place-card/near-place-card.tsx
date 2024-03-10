import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type NearPlaceCardProps = {
    offerCard: Offer;
    setCardHoverId(id: string | null): void;
}

function NearPlaceCard({ offerCard, setCardHoverId }: NearPlaceCardProps): JSX.Element {
  return (
    <PlaceCard placeType={'near-places'} offerCard={offerCard} setCardHoverId={setCardHoverId} />
  );
}


export default NearPlaceCard;
