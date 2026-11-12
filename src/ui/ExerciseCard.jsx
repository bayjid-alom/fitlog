import React from 'react';
import { FiActivity, FiClock, FiStar } from 'react-icons/fi';

const ExerciseCard = ({ exercise }) => {
    return (
        <div
            className="group bg-[#15171C] border border-[#252830] rounded-xl overflow-hidden transition-all duration-300 ease-out hover:border-[#B9F500]/50 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
        >

            {/* Card Image */}
            <div className="h-[185px] sm:h-[150px] md:h-[160px] lg:h-[170px] overflow-hidden bg-[#1B1E24]">

                <img
                    src={exercise.image}
                    alt={exercise.exerciseName}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

            </div>

            {/* Card Content */}
            <div className="p-4">

                {/* Muscle Group Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3">

                    {
                        exercise.tags.map((tag, index) => (

                            <span
                                key={index}
                                className="bg-[#B9F500] text-[#10130A] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wide"
                            >
                                {tag}
                            </span>

                        ))
                    }

                </div>

                {/* Exercise Name */}
                <h3 className="text-white text-sm font-extrabold uppercase tracking-wide mb-1.5 truncate group-hover:text-[#B9F500] transition-colors duration-300">
                    {exercise.exerciseName}
                </h3>

                {/* Equipment */}
                <p className="text-gray-500 text-[11px] mb-4 truncate">
                    {exercise.equipment}
                </p>

                {/* Divider */}
                <div className="border-t border-[#252830] mb-3"></div>

                {/* Exercise Information */}
                <div className="flex items-center gap-3 flex-wrap text-gray-400 text-[11px]">

                    {/* Duration */}
                    <span className="flex items-center gap-1.5">
                        <FiClock size={12} />
                        {exercise.duration}
                    </span>

                    {/* Calories */}
                    <span className="flex items-center gap-1.5">
                        <FiActivity size={12} />
                        {exercise.calories}
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1.5">
                        <FiStar
                            size={12}
                            className="text-[#B9F500]"
                        />
                        {exercise.rating}
                    </span>

                </div>

            </div>

        </div>
    );
};

export default ExerciseCard;