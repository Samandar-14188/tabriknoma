

export default function Loader() {
  return (
    <div className="loader-container">
      <video
        className="video-container"
        poster="https://i.pinimg.com/videos/thumbnails/originals/b1/3c/dd/b13cddebb5866b7adb3fcd7e2a769f16.0000000.jpg"
        preload="auto"
        src="https://v1.pinimg.com/videos/mc/expMp4/b1/3c/dd/b13cddebb5866b7adb3fcd7e2a769f16_t1.mp4"
        style={{ objectFit: 'cover' }}
        autoPlay
        loop
        muted
      >
        <track kind="captions" src="" />
      </video>
    </div>
  );
}
