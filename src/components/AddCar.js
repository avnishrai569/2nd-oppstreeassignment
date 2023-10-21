import React, { useState } from 'react';

function AddCar({ cars, setCars }) {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddCar = () => {
    const existingCarIndex = cars.findIndex(
      (car) => car.name === name && car.model === model
    );

    if (existingCarIndex !== -1) {
      const updatedCars = [...cars];
      updatedCars[existingCarIndex].quantity += parseInt(quantity);
      setCars(updatedCars);
    } else {
      const newCar = {
        name,
        model,
        quantity: parseInt(quantity),
      };
      setCars([...cars, newCar]);
    }

    setName('');
    setModel('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Add Car</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default AddCar;
