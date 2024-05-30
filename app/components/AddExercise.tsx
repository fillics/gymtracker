"use client";

import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddExercise = () => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', { name, sets, repetitions, weight });
    try {
      await addDoc(collection(db, 'exercises'), {
        name,
        sets: Number(sets),
        repetitions: Number(repetitions),
        weight: Number(weight),
      });
      console.log('Exercise added successfully');
      setName('');
      setSets('');
      setRepetitions('');
      setWeight('');
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Exercise Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="number"
        placeholder="Repetitions"
        value={repetitions}
        onChange={(e) => setRepetitions(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="block w-full px-4 py-2 border rounded-md"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Add Exercise
      </button>
    </form>
  );
};

export default AddExercise;
