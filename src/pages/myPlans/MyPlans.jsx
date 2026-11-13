import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { ExerciseContext } from '../../context/ExerciseProvider';
import TodaysPlan from './TodaysPlan';
import Saved from './Saved';


const MyPlans = () => {

    const { myPlans, sortingType, setSortingType } = useContext(ExerciseContext);
    const [tabActive, setTabActive] = useState("plans")


    return (

        <section className="min-h-screen bg-[#0B0D10] py-6 md:py-8 lg:py-10">
            <div className="w-[94%] md:w-[90%] lg:w-[85%] mx-auto">

                {/* Section Heading */}
                <div className="mb-6 md:mb-8">

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-2">
                        MY PLAN
                    </h2>

                    <p className="text-gray-500 text-xs md:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>






                {/* Statistics Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#14171D] border border-[#252933] rounded-xl p-5 md:p-6 mb-6 md:mb-8">

                    {/* Exercises */}
                    <div className="py-2 sm:py-0 sm:border-r border-[#252933]">
                        <p className="text-gray-500 text-xs mb-2">
                            Exercises
                        </p>

                        <h3 className="text-[#B9F500] text-3xl font-extrabold">
                            2
                        </h3>
                    </div>

                    {/* Minutes */}
                    <div className="py-3 sm:py-0 sm:px-6 sm:border-r border-[#252933] border-t sm:border-t-0">
                        <p className="text-gray-500 text-xs mb-2">
                            Minutes
                        </p>

                        <h3 className="text-white text-3xl font-extrabold">
                            23
                        </h3>
                    </div>

                    {/* Calories */}
                    <div className="py-3 sm:py-0 sm:pl-6 border-t sm:border-t-0 border-[#252933]">
                        <p className="text-gray-500 text-xs mb-2">
                            Calories
                        </p>

                        <h3 className="text-white text-3xl font-extrabold">
                            190
                        </h3>
                    </div>

                </div>





                {/* Tabs and Sorting */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">

                    {/* Tabs */}
                    <div className="flex items-center bg-[#171A22] border border-[#252933] rounded-xl p-1 w-full sm:w-auto">

                        <button
                            onClick={() => setTabActive("plans")}
                            className={`flex-1 sm:flex-none px-5 py-2 text-xs rounded-lg ${tabActive === "plans"
                                ? "text-white font-semibold bg-[#222630] border border-[#30343D]"
                                : "text-gray-400"
                                }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setTabActive("saved")}
                            className={`flex-1 sm:flex-none px-5 py-2 text-xs rounded-lg ${tabActive === "saved"
                                ? "text-white font-semibold bg-[#222630] border border-[#30343D]"
                                : "text-gray-400"
                                }`}
                        >
                            Saved
                        </button>

                    </div>




                    {/* Sort By */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">

                        <span className="text-gray-500 text-xs">
                            Sort By
                        </span>

                        <select
                            value={sortingType}
                            onChange={(e) => setSortingType(e.target.value)}
                            className="bg-[#171A22] border border-[#252933] text-gray-300 text-xs rounded-lg px-3 py-2 outline-none cursor-pointer"
                        >
                            <option value="Default">Default</option>
                            <option value="duration">Duration</option>
                            <option value="name">Name</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>



                </div>






                {

                    tabActive === "plans"
                        ? <TodaysPlan sortingType={sortingType} />
                        : <Saved sortingType={sortingType} />

                }













            </div>

        </section>
    );
};

export default MyPlans;
