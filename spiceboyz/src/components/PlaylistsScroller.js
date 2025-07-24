import React from 'react';

const playlists = [
  {
    image: "/assets/IMG_6266.jpeg",
    link: 'https://open.spotify.com/playlist/1BTkq5NwhVV2bAhV8W2Dp7?si=04c2af414f93498b',
    author: 'Mayor',
  },
  {
    image: '/assets/IMG_6265.jpeg',
    link: 'https://open.spotify.com/playlist/5Vkist5St9EH9JtYVb2tmE?si=f4db1809b8fe432d',
    author: 'Subii',
  },
  {
    image: '/assets/IMG_5735.jpeg',
    link: 'https://open.spotify.com/playlist/6x7KibIuvtp4uAM6I79CbF?si=aGsvQRnqQ4aBsLncZDQHng&pi=gt8wesF8Q_iBv',
    author: 'Ayo',
  },
  {
    image: '/assets/IMG_5736.jpeg',
    link: 'https://open.spotify.com/playlist/0eFItZPqmhN1b6lh8MxxY3?si=0dbef42a94b946b0',
    author: 'SeunBILLY',
  },
];

function PlaylistScroller() {
  return (
    <div className="playlist-scroller-container">
      {playlists.map((playlist, index) => (
        <div className="playlist-card" key={index}>
          <a
            href={playlist.link}
            target="_blank"
            rel="noopener noreferrer"
            className="playlist-image-link"
          >
            <img src={playlist.image} alt={`${playlist.author}'s Playlist`} />
          </a>
          <p className="playlist-caption">{playlist.author}'s Playlist</p>
        </div>
      ))}
    </div>
  );
}

export default PlaylistScroller;

