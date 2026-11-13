
import React, { useContext } from 'react';
import { ExerciseContext } from '../../context/ExerciseProvider';
import {
    FiClock,
    FiStar,
    FiZap,
    FiEye,
    FiX
} from 'react-icons/fi';
import { Link } from 'react-router';

const Saved = () => {

    const { saved } = useContext(ExerciseContext);

    return (
        <section className="bg-[#0B0D10] py-6 md:py-8 lg:py-10">

            <div className="mx-auto">

                {/* Empty State */}
                {
                    saved.length == 0 && (
                        <div className="min-h-[250px] md:min-h-[300px] border border-dashed border-[#252933] rounded-xl flex flex-col justify-center items-center text-center px-5 py-10">

                            <h3 className="text-white text-lg md:text-xl font-extrabold tracking-wide mb-2">
                                NOTHING HERE YET
                            </h3>

                            <p className="text-gray-400 text-xs md:text-sm mb-6">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                to="/"
                                className="bg-[#B9F500] hover:bg-[#a8df00] active:scale-95 text-black text-xs font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
                            >
                                Go to workouts
                            </Link>

                        </div>
                    )
                }

                {/* Saved Container */}
                <div className={`space-y-3 rounded-xl p-2 md:p-3 ${
                    saved.length > 0 ? 'border-dotted border-cyan-500' : ''
                }`}>

                    {
                        saved.length > 0 &&
                        saved.map(plan => (

                            <div
                                key={plan.exerciseId}
                                className="flex flex-col gap-4 rounded-xl border border-[#292D35] bg-[#15181F] p-3 sm:flex-row sm:items-center md:p-4"
                            >

                                {/* Image and Exercise Info */}
                                <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-4">

                                    <img
                                        src={plan.image}
                                        alt={plan.exerciseName}
                                        className="h-20 w-24 shrink-0 rounded-lg object-cover md:h-20 md:w-28"
                                    />

                                    <div className="min-w-0">

                                        <h3 className="text-base font-bold text-white md:text-lg">
                                            {plan.exerciseName}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-400 md:text-base">
                                            {plan.equipment}
                                        </p>

                                        {/* Exercise Details */}
                                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-300 md:text-sm">

                                            <span className="flex items-center gap-1">
                                                <FiClock className="text-lime-400" />
                                                {plan.duration}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <FiZap className="text-lime-400" />
                                                {plan.calories}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <FiStar className="text-lime-400" />
                                                {plan.rating}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 sm:justify-end md:gap-3">

                                    {/* View Details */}
                                    <Link
                                        to={`/${plan.exerciseId}`}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#353B46] px-3 py-2.5 text-xs font-medium text-gray-300 transition hover:border-gray-400 hover:bg-[#252A33] sm:flex-none md:px-4 md:text-sm"
                                    >
                                        <FiEye className="text-base" />
                                        View Details
                                    </Link>

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-full border border-[#353B46] p-2.5 text-gray-300 transition hover:border-gray-400 hover:bg-[#252A33]"
                                    >
                                        <FiX className="text-base" />
                                    </button>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default Saved;
