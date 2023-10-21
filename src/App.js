import React, { useState } from 'react';
import AddCar from './components/AddCar';
import CarList from './components/CarList';

function App() {
  const [cars, setCars] = useState([]);

  return (
    <div>
      <h1>Car Discription </h1>
      <AddCar cars={cars} setCars={setCars} />
      <CarList cars={cars} />
    </div>
  );
}

export default App;
chirag.singh@opstee.com