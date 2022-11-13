/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function AttractionsItem({ attraction }) {
  return (
    <div className="card">
      <div>{attraction.Category.Name}</div>
      <div>{attraction.Name}</div>
    </div>
  );
}
