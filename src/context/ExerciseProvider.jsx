import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const ExerciseContext = createContext()

const ExerciseProvider = ({ children }) => {
    const [myPlans, setMyPlans] = useState([])



    const handleAddToMyPlan = (currentExercise) => {
        const isExistInPlan = myPlans.find(c => c.exerciseId == currentExercise.exerciseId)

        if (isExistInPlan) {
            toast.warning(`${currentExercise.exerciseName} is already in your plan.`);
            return;
        }
        else {
            setMyPlans([...myPlans, currentExercise]);
            toast.success(`${currentExercise.exerciseName} added to your plan.`);
        }
    }



    const data = {
        handleAddToMyPlan,
        myPlans,
        setMyPlans
    }



    return (
        <ExerciseContext.Provider value={data}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;