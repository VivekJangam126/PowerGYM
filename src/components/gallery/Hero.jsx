
import data from "./photos.json";

function Hero() {
    const images = data.images;

    return (
        <div className="relative w-screen min-h-screen overflow-hidden">
            <div
                className="grid grid-cols-12 grid-rows-3 w-full min-h-screen"
                style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100%', zIndex: 1, gap: 0, rowGap: 0, columnGap: 0 }}
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
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Gallery</h1>
                <p className="text-2xl md:text-3xl text-white drop-shadow-md">Capture Your Fitness Journey</p>
            </div>
            <div className="absolute inset-0 bg-black/50 z-10 min-h-screen" />
        </div>
    );
}
export default Hero;
