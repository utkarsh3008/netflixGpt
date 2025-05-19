const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black overscroll-none">
      <h3 className="text-6xl font-bold text-white">{title}</h3>
      <p className="py-6 text-lg w-1/4 text-white ">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-8 text-xl rounded-md hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-black p-2 px-8 text-xl rounded-md bg-opacity-50 mx-2 hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
