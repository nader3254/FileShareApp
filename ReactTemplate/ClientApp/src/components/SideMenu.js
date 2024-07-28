import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
// import { NavMenu, theme } from './NavMenu';
import { useState } from 'react';
//import HomeIcon from '@mui/icons-material/Home';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'; import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';

import SideBarBTN from "./SideBarBtn";


function SideMenu() {
  const [clicked, setClicked] = useState("Home");

  const handleClick = (btn) => () => setClicked(btn);

  return (
    <div style={{ maxWidth: '80px', height: '100vh', backgroundColor: 'black' }} className="fixed top-0 left-0 flex flex-col items-center justify-center">
      <ul className="menu rounded-box h-full flex flex-col items-center justify-start ">
        <img src="/logo.png" alt="Logo" className='my-1' />
        <p className="text-lg ms-1" style={{ color: "white", fontWeight: "500" }}>FShare</p>

        <SideBarBTN name="Home" ICON={HomeOutlinedIcon} callBack={handleClick} state={clicked} />
        <SideBarBTN name="Connect" ICON={CastConnectedOutlinedIcon} callBack={handleClick} state={clicked} />
        <SideBarBTN name="Setting" ICON={SettingsOutlinedIcon} callBack={handleClick} state={clicked} />
      </ul>
    </div>
  );
}

export default SideMenu;