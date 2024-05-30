"use client"; // Aggiungi questa direttiva in cima al file

import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, onSnapshot, DocumentData } from 'firebase/firestore';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  repetitions: number;
  weight: number;
}

const ExerciseList = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'exercises'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const exercisesData: Exercise[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        exercisesData.push({ ...doc.data(), id: doc.id } as Exercise);
      });
      console.log('Fetched exercises:', exercisesData);
      setExercises(exercisesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {exercises.map((exercise) => (
        <div key={exercise.id} className="p-4 mb-2 border rounded-md">
          <h3 className="text-xl font-bold">{exercise.name}</h3>
          <p>Sets: {exercise.sets}</p>
          <p>Repetitions: {exercise.repetitions}</p>
          <p>Weight: {exercise.weight} kg</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
