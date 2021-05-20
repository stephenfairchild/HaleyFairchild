const people = [
    {
        name: "Mermaid",
        role: "",
        imageUrl: "/gallery/MermaidLagoon.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Cranberry Glades",
        role: "",
        imageUrl: "/gallery/PaintingCranberryGlades.JPG",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Cranberry Glades",
        role: "",
        imageUrl: "/gallery/PaintingFamiliarbutStrange.JPG",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/PaintingNewRiverBridge.JPG",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Martian girl",
        role: "",
        imageUrl: "/gallery/PXL_20210505_130549689~3.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/PXL_20210505_131000302.MP~3.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/PXL_20210505_131516936~2.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/PXL_20210505_132159152~2.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/PXL_20210505_133246355~2.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/WCSHMpainting.jpg.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Painting New River Bridge",
        role: "",
        imageUrl: "/gallery/mickey.jpg",
        twitterUrl: "#",
        linkedinUrl: "#",
    },
];

export default function Gallery() {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Gallery
                        </h2>
                        <p className="text-xl text-gray-500">
                            A small piece of the collection...
                        </p>
                    </div>
                    <ul>
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img
                                            className="object-contain shadow-lg rounded-lg"
                                            src={person.imageUrl}
                                            alt=""
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1"></div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
