
import React from 'react';
import { useNavigate } from 'react-router';
import { IoArrowBack, IoHomeOutline } from 'react-icons/io5';

const ErrorMessage = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <section className="min-h-screen bg-[#0B0D10] flex items-center justify-center px-5">

            <div className="text-center max-w-lg mx-auto">

                {/* Error Code */}
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-[#B9F500] tracking-tighter">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
                    Page Not Found!
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-3">
                    The page you're looking for doesn't exist or may have been moved.
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-3 mt-7">

                    <button
                        onClick={handleGoBack}
                        className="w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/[0.02] text-gray-400 text-xs sm:text-sm hover:border-[#B9F500]/40 hover:text-[#B9F500] transition-colors duration-300"
                    >
                        <IoArrowBack className="text-base sm:text-lg" />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/[0.02] text-gray-400 text-xs sm:text-sm hover:border-[#B9F500]/40 hover:text-[#B9F500] transition-colors duration-300"
                    >
                        <IoHomeOutline className="text-base sm:text-lg" />
                        Back to Home
                    </button>

                </div>

            </div>

        </section>
    );
};

export default ErrorMessage;
