
import data from "./photos.json";

function Hero() {
    const images = data.images;

    return (
        <div className="relative w-screen h-163 overflow-hidden">
            <div
                className="grid grid-cols-12 grid-rows-4 w-full h-full"
                style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, gap: 0, rowGap: 0, columnGap: 0 }}
            >
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-lg h-full flex"
                        style={{
                            gridColumn: img.col,
                        }}
                    >
                        <img
                            src={img.url}
                            alt={img.title || `Gallery ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 border-2 border-white shadow-sm"
                            style={{ minHeight: 0, minWidth: 0 }}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Gallery</h1>
                <p className="text-2xl md:text-3xl text-white drop-shadow-md">Capture Your Fitness Journey</p>
            </div>
            <div className="absolute inset-0 bg-black/50 z-10 h-162" />
        </div>
    );
}
export default Hero;
