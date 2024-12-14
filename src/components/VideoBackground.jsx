import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailervideo from '../Hooks/useMovieTrailervideo';
import VideoTitle from './VideoTitle'; // Import VideoTitle

const VideoBackground = ({movieID, title, description}) => {
  // Fetch the trailer video
  useMovieTrailervideo({movieID});
  const trailerVideoFromStore = useSelector((store) => store.movies?.TrailerVideo);

  return (
    <div className="relative w-full h-screen">
      {/* Video background */}
      {trailerVideoFromStore && (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideoFromStore.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {/* Video Title */}
      <VideoTitle title={title} description={description} />
    </div>
  );
};

export default VideoBackground;
