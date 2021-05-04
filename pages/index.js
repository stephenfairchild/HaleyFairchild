/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment } from "react";
import Newsletter from "components/newsletter";
import Notification from "components/notification";

const hardcoreMode = false;
const yogaCoursesLive = false;
const artLive = false;

export default function Landing() {
    const [showNotification, setShowNotification] = useState(false);

    function onSignup() {
        window.scrollTo(0, 0);
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    }

    return (
        <>
            {showNotification && <Notification />}
            <div className="m-7 bg-gray-50">
                <main className="lg:relative">
                    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline">
                                    Haley M. Fairchild
                                </span>{" "}
                                {hardcoreMode && (
                                    <span className="block text-indigo-600 xl:inline">
                                        Mutha fucka...
                                    </span>
                                )}
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Haley is traveling through life with her family,
                                practicing mindfulness, baking and making art.
                                Haley is a certified RYT-300 yoga instructor and
                                receives her RYT-500 certification in May 2021.
                            </p>

                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                {yogaCoursesLive && (
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            View yoga courses
                                        </a>
                                    </div>
                                )}
                                {artLive && (
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        >
                                            View art
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-full lg:h-64 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                            className="inset-0 rounded-full object-cover"
                            src="/haley-bread.jpg"
                            alt="Picture of Haley"
                            width="500"
                            height="500"
                        />
                    </div>
                </main>
            </div>
            <div className="mt-9">
                <Newsletter onSignup={onSignup} />
            </div>
        </>
    );
}
