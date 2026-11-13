// Get all workout plans from localStorage
const getAllWorkoutPlansFromLocalDB = () => {
    const workoutPlans = localStorage.getItem("plans");

    if (workoutPlans) return JSON.parse(workoutPlans);
    return [];
};


// Add a new workout plan to localStorage
const addWorkoutPlanToLocalDB = (exercise) => {
    const allWorkoutPlans = getAllWorkoutPlansFromLocalDB();

    const isExist = allWorkoutPlans.find(
        item => item.exerciseId == exercise.exerciseId
    );

    if (!isExist) {
        allWorkoutPlans.push(exercise);
        localStorage.setItem("plans", JSON.stringify(allWorkoutPlans));
    }
};


export { getAllWorkoutPlansFromLocalDB, addWorkoutPlanToLocalDB };