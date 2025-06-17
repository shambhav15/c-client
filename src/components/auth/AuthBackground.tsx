export default function AuthBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Immediate background fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>

      {/* Video layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          console.log("Video failed to load");
          e.currentTarget.style.display = "none";
        }}
      >
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Enhanced blur overlay - with better opacity */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 z-20" />

      {/* Bottom to top gradient overlay - darker to bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-25" />
    </div>
  );
}
