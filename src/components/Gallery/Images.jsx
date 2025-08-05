import React from "react";

const Images = () => {
  // Create an array of image paths
  const imageCount = 25;
  const images = Array.from({ length: imageCount }, (_, i) => `/${i + 1}.jpg`);

  return (
    <section className="py-12 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden border rounded shadow">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Images;
