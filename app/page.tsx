import dynamic from 'next/dynamic';

const AddExercise = dynamic(() => import('./components/AddExercise'), { ssr: false });
const ExerciseList = dynamic(() => import('./components/ExerciseList'), { ssr: false });
const AppProvider = dynamic(() => import('./components/AppProvider'), { ssr: false });

export default function Home() {
  return (
    <AppProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Gym Tracker</h1>
        <AddExercise />
        <h2 className="text-2xl font-bold mt-8 mb-4">Exercises</h2>
        <ExerciseList />
      </div>
    </AppProvider>
  );
}
