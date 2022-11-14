/* Subcategory component
 * Returns a subcategory or in the case of events, returns the events themselves
 */

import bear from '../icons/bear.png';
import castle from '../icons/castle.png';
import art from '../icons/art.png';
import amusementpark from '../icons/amusementpark.png';
import park from '../icons/amusementpark.png';
import boat from '../icons/boat.png'
import restaurant from '../icons/restaurant.png'

export default function Subcategory({ subcategory }) {
  return (
    <div className="card">
      <div>{subcategory.Name}</div>
      
{/*This might be crazy, but it displays icons based on their name xD*/}
      {subcategory?.name === "Zoos and animal parks" ? (
<img src={bear} alt="icon"/>
  ) : subcategory.Name === "Architecture and Urban spaces"  || subcategory.Name === "Curches and Abbeys"  ||  subcategory.Name === "Ancient Monuments & Ruins" ||  subcategory.Name === "Castles and manor houses" ?(
    <img src={castle} alt="icon"/>
  ):  subcategory.Name === "Artists and Artisans" || subcategory.Name === "Galleries" || subcategory.Name === "Street Art and Sculptures" || subcategory.Name === "Museums" || subcategory.Name === "DIY Tours" || subcategory.Name === "Cultural Centres / Music venue" ? (
<img src={art} alt="icon"/>
  ): subcategory.Name === "Amusement and Theme Parks" || subcategory.Name === "Other attractions" || subcategory.Name === "Theatres/Cinemas" || subcategory.Name === "Cultural Centres / Music venue" || subcategory.Name === "Other activities"?(
<img src={amusementpark} alt="icon"/>
  ): subcategory.Name === "Parks and gardens" || subcategory.Name === "Natural Areas" || subcategory.Name === "Outdoor Gyms" ?(
    <img src={park} alt="icon"/>
  ):  subcategory.Name === "Swimming lakes" || subcategory.Name === "Wellness" || subcategory.Name === "Swimming pools and water parks" || subcategory.Name === "Beaches and lidos" || subcategory.Name === "Yachting harbours" || subcategory.Name === "Boat Rental" ? (
    <img src={boat} alt="icon"/>
  ): subcategory.Name === "Restaurants" || subcategory.Name === "Cafés" || subcategory.Name === "Local Specialties" ? (
<img src={restaurant} alt="icon"/>
  ): (
    <img src={park} alt="icon"/>
  )}
      {/* If the id is 58, we are looking at an event, and in that case we get the first available image
      from the event's gallery */}
      {subcategory.MainCategory?.Id === 58 ? (
        <img
          alt={subcategory.Files[0]?.AltText}
          src={subcategory.Files[0]?.Uri}
        />
      ) : (
        ""
      )}
    </div>
  );
}
