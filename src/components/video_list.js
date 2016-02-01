////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 2 /////////////////////
////////////////////////////////////////////////////////////////////////

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
    // above we set the key for each video to be something unique (etag is unique YouTube val)
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
  // className is same as css class 
  // react will recognize that {videoItems} is an array and will render all of array's components
}


export default VideoList;