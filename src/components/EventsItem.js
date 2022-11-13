/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function EventsItem({ event }) {
  return (
    <div className="card">
      <div>{event.Category.Name}</div>
      <div>{event.Name}</div>
    </div>
  );
}
