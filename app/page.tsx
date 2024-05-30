import AddExercise from './components/AddExercise';
import ExerciseList from './components/ExerciseList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gym Tracker</h1>
      <AddExercise />
      <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>
      <ExerciseList />
    </div>
  );
}
