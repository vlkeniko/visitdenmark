/*
 *PlaceItem
 *Simple Component Function to stype and return a place to eat
 *
 */

export default function AttractionsItem({ place }) {
/*     function attractions() {
if(
    place.Category.Name = "Attractions"
){
document.getElementById(props.itemid + "needed").style.display = "none";
}
    } */

  return (
    <div  className="card">

      <div>{place.Category.Name}</div>
    </div>
  );
}
