import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const ExerciseContext = createContext()

const ExerciseProvider = ({ children }) => {
    const [myPlans, setMyPlans] = useState([])
    const [saved, setSaved] = useState([])

    // Sorting state declare
    const [sortingType, setSortingType] = useState("Default")



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




    const handleSaveForLater = (currentExercise) => {

        const isExistInPlan = myPlans.find(c => c.exerciseId == currentExercise.exerciseId);

        if (isExistInPlan) {
            toast.warning("Already added to your workout plan.", {
                position: "top-right",
                theme: "dark",
            });
            return;
        }

        const isExistInSaved = saved.find(c => c.exerciseId == currentExercise.exerciseId);

        if (isExistInSaved) {
            toast.warning(`${currentExercise.exerciseName} is already in your saved list.`, {
                position: "top-right",
                theme: "dark",
            });
            return;
        }

        setSaved([...saved, currentExercise]);

        toast.success(`${currentExercise.exerciseName} saved for later!`, {
            position: "top-right",
            theme: "dark",
        });
    };





    const data = {
        handleAddToMyPlan,
        myPlans,
        setMyPlans,
        saved,
        setSaved,
        handleSaveForLater,
        sortingType,
        setSortingType
    }



    return (
        <ExerciseContext.Provider value={data}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;