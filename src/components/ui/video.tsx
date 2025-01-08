function Video(){
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover"
          src="./assets/TECHLUMINIX.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
  )
}

export {
  Video
}