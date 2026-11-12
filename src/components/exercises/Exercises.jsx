
import React, { useState } from 'react';
import useExercises from '../../hooks/useExercises';
import { BeatLoader } from 'react-spinners';
import ExerciseCard from '../../ui/ExerciseCard';
import { IoIosArrowDown } from 'react-icons/io';

const Exercises = () => {

    const { exercises, loading } = useExercises();
    const [showAll, setShowAll] = useState(false);


    return (

        <section className="bg-[#0B0D10] py-16 md:py-20 lg:py-24">
            <div className="w-[94%] md:w-[90%] lg:w-[85%] mx-auto">

                {/* Section Heading */}
                <div className="mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-2">
                        THE LIBRARY
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Twelve lifts covering every major muscle group.
                    </p>

                    <div className="w-10 h-[3px] bg-[#B9F500] rounded-full mt-4"></div>
                </div>





                {/* Exercise Card Container */}
                {
                    loading ? (
                        <div className="flex justify-center items-center py-20">
                            <BeatLoader
                                color="#B9F500"
                                size={12}
                                speedMultiplier={0.8}
                            />
                        </div>
                    ) : (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

                            {
                                (showAll ? exercises : exercises.slice(0, 7)).map(exercise => (
                                    <ExerciseCard
                                        exercise={exercise}
                                        key={exercise.exerciseId}
                                    />
                                ))
                            }

                        </div>

                    )
                }




                {/* View All Button */}
                {
                    !loading && exercises.length > 7 && (
                        <div className="flex justify-center mt-10">

                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="flex items-center gap-2 bg-[#B9F500] text-[#0B0D10] px-7 py-3 rounded-lg font-bold text-sm hover:bg-[#a5dc00] transition-colors duration-300"
                            >
                                {showAll ? 'Show Less' : 'View All Exercises'}

                                <IoIosArrowDown
                                    className={`text-lg transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                />
                            </button>

                        </div>
                    )
                }

            </div>
        </section>
    );
};

export default Exercises;
