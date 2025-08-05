import React from "react";

const GalleryHeader = () => {
    return (
        <section className="bg-black text-white py-16 px-4 text-center">
            <div className="max-w-3xl mx-auto mt-30">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Image Gallery
                </h2>
                <p className="text-lg md:text-xl text-gray-300">
                    Welcome to the Centurion Fast Fit LLP Image Gallery!
                </p>
            </div>
                <p className="text-gray-300 mt-5 max-w-6xl mx-auto">
                    Here, we take pride in showcasing the incredible variety of vehicles that we service at our independent auto care and fast fit centre in Coventry. Every make and model of vehicle is welcome, and we invite you to take a look at some of these superstars!
                </p>
        </section>
    );
};

export default GalleryHeader;
