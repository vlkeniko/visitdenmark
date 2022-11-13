/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function ActivitiesItem({ activity }) {
  return (
    <div className="card">
      <div>{activity.Category.Name}</div>
      <div>{activity.Name}</div>
    </div>
  );
}
