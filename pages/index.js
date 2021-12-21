/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment } from "react";
import Newsletter from "components/newsletter";
import Notification from "components/notification";
import Link from "next/link";

const hardcoreMode = false;

export default function Index() {
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
            <div className="bg-gray-50 p-7">
                <main>
                    <div className="mx-auto max-w-7xl w-full text-center lg:text-left">
                        <div className="mx-auto lg:w-1/2 sm:px-8">
                            <img
                                className="mx-auto rounded-full object-cover"
                                src="/HaleyinCali.jpg"
                                alt="Picture of Haley"
                                width="500"
                                height="500"
                            />
                            <h1 className="mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
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
                                Haley has received both her RYT-200 and RYT-300
                                certificates.
                            </p>

                            <div className="mx-auto mt-3 sm:flex sm:justify-center lg:justify-start">
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        href="https://store.haleyfairchild.com"
                                    >
                                        View art gallery
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="mt-9">
                <Newsletter onSignup={onSignup} />
            </div>
        </>
    );
}
