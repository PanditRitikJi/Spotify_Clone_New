import React from 'react'
import "./SongRow.css"
export const SongRow = ({track="test"}) => {
  return (
    <div className='songRow'>
      <img className='songRow__album' src={track.album.images[0].url} alt="" />
      <div className="songRow__info"></div>
      <h4>{track.name}</h4>
      <p>
          {track.artists.map((artist)=>artist.name).join(", ")} -{" "}
          {track.album.name}
      </p>
    </div>
  )
}

export default SongRow;