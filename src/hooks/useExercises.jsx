import React, { useEffect, useState } from 'react';

const useExercises = () => {

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data fetching
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/exercise-data.json");
            const data = await res.json();

            // setTimeout(() => {
            //     setExercises(data);
            //     setLoading(false);
            // }, 1500)

            setExercises(data);
            setLoading(false);
        };

        fetchData();
    }, []);


    return { exercises, loading };
};

export default useExercises;
