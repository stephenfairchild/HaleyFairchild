import Head from "next/head";
import Image from "next/image";
import Newsletter from "components/newsletter";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Haley: Artist | Yoga Instructor</title>
                <meta name="description" content="Haleys personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-4 relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Data to enrich your
                                    </span>{" "}
                                    <span className="block text-indigo-600 xl:inline">
                                        online business
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Haley is traveling through life with her
                                    family, practicing mindfullness, baking and
                                    making art. She's a Certified RYT-300 Yoga
                                    instructor (soon to be RYT-500 in May 2021)
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            View yoga courses
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            View art
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        src="/haley-bread.jpg"
                        alt="Picture of Haley"
                        height="500"
                        width="500"
                    />
                </div>
            </div>
            <Newsletter />
            <div>
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </div>
    );
}
