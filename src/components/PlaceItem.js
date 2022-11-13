/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function PlaceItem({ place }) {
  return (
    <div className="card">
      <div>{place.Category.Name}</div>
      <div>{place.Name}</div>
    </div>
  );
}
