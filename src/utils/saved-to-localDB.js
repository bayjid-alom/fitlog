// Get all saved exercises from localStorage
const getAllSavedExercisesFromLocalDB = () => {
    const savedExercises = localStorage.getItem("saved");

    if (savedExercises) return JSON.parse(savedExercises);
    return [];
};


// Add a new exercise to saved list
const addSavedExerciseToLocalDB = (exercise) => {
    const allSavedExercises = getAllSavedExercisesFromLocalDB();

    const isExist = allSavedExercises.find(
        item => item.exerciseId == exercise.exerciseId
    );

    if (!isExist) {
        allSavedExercises.push(exercise);
        localStorage.setItem("saved", JSON.stringify(allSavedExercises));
    }
};


export { getAllSavedExercisesFromLocalDB, addSavedExerciseToLocalDB };