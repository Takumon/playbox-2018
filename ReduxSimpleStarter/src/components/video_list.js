import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const videoItems = this.props.videos.map(v => {
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          key={v.etag}
          video={v} />
      );
    });

    return (
      <ul className="col-md-4 list-group">{videoItems}</ul>
    );
  }
}

export default VideoList;
