import React from 'react';

const playlists = [
  {
    image: "/assets/IMG_6266.jpeg",
    link: 'https://open.spotify.com/playlist/1',
    author: 'Mayor',
  },
  {
    image: '/assets/IMG_6265.jpeg',
    link: 'https://open.spotify.com/playlist/2',
    author: 'Subi',
  },
  {
    image: '/assets/IMG_5735.jpeg',
    link: 'https://open.spotify.com/playlist/3',
    author: 'Ayo',
  },
  {
    image: '/assets/IMG_5736.jpeg',
    link: 'https://open.spotify.com/playlist/4',
    author: 'Seun',
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

