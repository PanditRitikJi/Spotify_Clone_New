import React from 'react'
import './Sidebar.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption.js'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
const Sidebar = () => {
    const[{playlists},dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
       <img className='sidebar_logo' src='https://community.spotify.com/t5/image/serverpage/image-id/27289i6CB37DCE3D36368E?v=v2' alt=""/>
       <SidebarOption title="Home" Icon={HomeIcon}/>
       <SidebarOption title="Search" Icon={SearchIcon} />
       <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

       <br />
       <strong className='sidebar__title'>PLAYLISTS</strong>
       <hr/>
       {playlists?.item?.map((playlist) =>(
          <SidebarOption title={playlist.name}  />
       ))}
       </div>
  )
}

export default Sidebar