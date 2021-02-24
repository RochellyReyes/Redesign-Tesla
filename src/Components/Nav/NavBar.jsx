import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../Styling/navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';

//https://react-icons.github.io/react-icons/

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return(
    <div>
      <IconContext.Provider value={{color: 'black'}}>
        <div className="navbar">
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>

          <SiIcons.SiTesla className="tesla-logo"/>

        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            {SidebarData.map((item,index)=> {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default NavBar;

  