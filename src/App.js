import React, { useState, useEffect } from 'react';

function App() {
  const [restaurant, setRestaurant] = useState(0);
  const [restaurants, setRestaurants] = useState([0,0,0,0,0]);


  useEffect(() => {
    fetch('/restaurant').then(res => res.json()).then(data => {
      setRestaurant(data.restaurant);
    });
  }, []);

  useEffect(() => {
    fetch('/restaurants').then(res => res.json()).then(data => {
      setRestaurants(data.restaurants);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
         <p>Restaurant here</p><input></input>
         <p>Type of food here</p><input></input>

        <div>
          <img class="img-thumbnail w-25"  src={restaurants[0]['image_url']}></img>
          <p> Restaurant Name is {restaurants[0]['alias']}</p>
          <p> Business ID {restaurants[0]['id']}</p>
        </div>
        <div>
          <img class="img-thumbnail w-25"  src={restaurants[1]['image_url']}></img>
          <p> Restaurant Name is {restaurants[1]['alias']}</p>
          <p> Business ID {restaurants[1]['id']}</p>
        </div>
        <div>
          <img class="img-thumbnail w-25"  src={restaurants[2]['image_url']}></img>
          <p> Restaurant Name is {restaurants[2]['alias']}</p>
          <p> Business ID {restaurants[2]['id']}</p>
        </div>
        <div>
          <img class="img-thumbnail w-25"  src={restaurants[3]['image_url']}></img>
          <p> Restaurant Name is {restaurants[3]['alias']}</p>
          <p> Business ID {restaurants[3]['id']}</p>
        </div>
        <div>
          <img class="img-thumbnail w-25"  src={restaurants[4]['image_url']}></img>
          <p> Restaurant Name is {restaurants[4]['alias']}</p>
          <p> Business ID {restaurants[4]['id']}</p>
        </div>


      </header>
    </div>
  );
}

export default App;
