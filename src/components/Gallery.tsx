const galleryImages = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
  "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=500",
  "https://images.unsplash.com/photo-1574097787859-8dd1c2b7d9b7?w=500",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">НАШЕ ОБОРУДОВАНИЕ</h2>
          <p className="text-xl text-gray-300">
            Топовое оборудование для профессионального обучения
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={image}
                alt={`DJ оборудование ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
