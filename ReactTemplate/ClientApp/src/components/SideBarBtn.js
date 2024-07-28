import React from 'react';
import { Link } from 'react-router-dom';


function SideBarBTN({ name, ICON, callBack, state }) {
  return (
    <li className="my-2 flex flex-col items-center">
      <Link
        to={`/${name.toLowerCase()}`}
        onClick={callBack(name)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '15px',
          backgroundColor: state === name ? '#ef0533' : '#000',
          border: 'none',
          padding: '0',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
        }}
        className="flex flex-col items-center hover:bg-opacity-80"
      >
        <ICON className="text-white" style={{ fontSize: '24px' }} />
        <p className="text-center text-white text-xs mt-1">{name}</p>
      </Link>
    </li>
  );
}

export default SideBarBTN;