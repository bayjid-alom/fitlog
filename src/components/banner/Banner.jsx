
import React from 'react';
import { Link } from 'react-router';
import workoutImage from '../../assets/images/banner.png';

const Home = () => {

    return (
        <main className="min-h-screen bg-[#0B0D10] lg:h-[calc(100vh-64px)] lg:min-h-0">

            <section className="mx-auto flex min-h-[calc(100vh-64px)] w-[94%] items-center py-8 md:w-[90%] lg:h-full lg:min-h-0 lg:w-[85%] lg:py-6">

                <div className="flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-xl border border-[#252830] bg-[#15171C] px-6 py-10 sm:px-10 md:px-12 lg:h-[90%] lg:flex-row lg:gap-5 lg:px-10 lg:py-14">

                    {/* Banner Content */}
                    <div className="flex w-full flex-col items-center py-6 text-center lg:w-[55%] lg:items-start lg:py-20 lg:text-left">

                        <span className="mb-4 text-[14px] font-bold tracking-widest text-[#C6FF00]">
                            WORKOUT LIBRARY
                        </span>

                        <h1 className="max-w-xl text-4xl leading-[1.10] font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[60px]">
                            TRAIN WITH INTENT. LOG EVERY SET.
                        </h1>

                        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-gray-400">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today's plan, and watch
                            the week's work add up.
                        </p>

                        {/* Browse Button */}
                        <Link
                            to="/"
                            className="mt-7 inline-flex items-center justify-center rounded-md bg-[#C6FF00] px-5 py-3 text-[14px] font-extrabold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-[#b5e800]"
                        >
                            Browse Workouts
                        </Link>

                    </div>

                    {/* Banner Image */}
                    <div className="flex w-full items-center justify-center lg:w-[45%] lg:justify-end">

                        <img
                            src={workoutImage}
                            alt="Workout illustration"
                            className="h-[260px] w-full object-contain sm:h-[320px] md:h-[350px] lg:h-[90%] lg:max-h-[450px]"
                        />

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Home;
