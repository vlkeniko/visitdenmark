/*
*PlaceItem
*Simple Component Function to stype and return a place to eat
*
*/


export default function ActivitiesItem({place}){
    return <div className="card">
            <div>{place.Category.Name}</div>
        </div>;
}