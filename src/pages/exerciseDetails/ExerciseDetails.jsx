
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useExercises from '../../hooks/useExercises';
import { BeatLoader } from 'react-spinners';
import { FaStar, FaBookmark, FaCalendarCheck } from 'react-icons/fa';
import { ExerciseContext } from '../../context/ExerciseProvider';



const ExerciseDetails = () => {

    const { handleAddToMyPlan } = useContext(ExerciseContext);

    const { theId } = useParams();
    const { exercises, loading } = useExercises();

    // Loading State
    if (loading) {
        return (
            <section className="min-h-screen bg-[#0B0D10] flex justify-center items-center">
                <BeatLoader color="#B9F500" size={12} speedMultiplier={0.8} />
            </section>
        );
    }



    // Find Exercise
    const expectedExercise = exercises.find(
        exercise => exercise.exerciseId === Number(theId)
    );




    const {
        exerciseName,
        image,
        tags,
        equipment,
        description,
        difficulty,
        sets,
        reps,
        duration,
        calories,
        rating,
        instructions
    } = expectedExercise;





    return (
        <section className="min-h-screen bg-[#0B0D10] py-10 md:py-16 lg:py-20">
            <div className="w-[94%] md:w-[90%] lg:w-[85%] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

                    {/* Exercise Image */}
                    <div className="w-full border border-white/15 h-[350px] md:h-[450px] lg:h-[394px] rounded-xl overflow-hidden">
                        <img
                            src={image}
                            alt={exerciseName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Exercise Details */}
                    <div className="w-full">

                        <h1 className="text-white text-2xl md:text-3xl font-extrabold uppercase">
                            {exerciseName}
                        </h1>

                        <p className="text-gray-400 text-sm leading-6 mt-2">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#B9F500] text-black text-xs font-semibold px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Exercise Information */}
                        <div className="bg-[#171A22] border border-[#252933] rounded-xl mt-6 overflow-hidden">

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Equipment</span>
                                <span className="text-gray-200 text-xs">{equipment}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Difficulty</span>
                                <span className="text-gray-200 text-xs">{difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Sets</span>
                                <span className="text-gray-200 text-xs">{sets}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Reps</span>
                                <span className="text-gray-200 text-xs">{reps}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Duration</span>
                                <span className="text-gray-200 text-xs">{duration}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3 border-b border-[#252933]">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Calories</span>
                                <span className="text-gray-200 text-xs">{calories}</span>
                            </div>

                            <div className="flex justify-between items-center px-4 py-3">
                                <span className="text-gray-400 text-[11px] font-semibold uppercase">Rating</span>
                                <span className="text-gray-200 text-xs flex items-center gap-1">
                                    <FaStar className="text-[#B9F500]" />
                                    {rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <div className="mt-6">

                            <h3 className="text-white text-sm font-bold uppercase tracking-wide mb-3">
                                Instructions
                            </h3>

                            <ol className="space-y-2">
                                {instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 text-gray-400 text-xs leading-5"
                                    >
                                        <span>{index + 1}.</span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>

                        </div>




                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 mt-7">

                            <button
                                onClick={() => handleAddToMyPlan(expectedExercise)}
                                type="button"
                                className="flex items-center gap-2 bg-[#B9F500] hover:bg-[#a8df00] active:scale-95 text-black text-xs font-semibold px-4 py-3 rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
                            >
                                <FaCalendarCheck />
                                Add to today's plan
                            </button>

                            <button
                                type="button"
                                className="flex items-center gap-2 border border-[#30343D] hover:border-[#B9F500] hover:bg-[#B9F500]/10 active:scale-95  text-gray-300 text-xs font-medium px-4 py-3 rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
                            >
                                <FaBookmark />
                                Save for later
                            </button>
                        </div>



                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExerciseDetails;
