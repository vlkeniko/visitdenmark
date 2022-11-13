/*Places
*
*Component Functions to fetch and parse json data, example showing and writing filtering of categors
*Importing and Calling each place in a list of places to be rendered
*
*Author Jeffrey Serio
*/

import React, { useEffect, useState } from 'react'
import EventsItem from "./PlaceItem";

export default function Events()
{
    const[places, setPlaces] = useState([]);

    useEffect(() => {

        async function getPlaces()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/data.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var place = data[i];
               if(place.MainCategory.Id === 58)
               {
                   // console.log(place.Name + ' ' + place.MainCategory.Name);
                    filteredrest.push(place)
               }
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setPlaces(filteredrest);
        }
        getPlaces();

    }, []);

    return(
    <>
    <h2>Events</h2>
    <div className='card-carousel'>
    {
           places.map(place =>(<EventsItem place={place} key={place.id} />))
        }

    </div>
      
    </>
    )    
}