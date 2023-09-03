import React, { useState } from 'react';
import { instagramLogo } from '../../assets';
import { camera } from '../../assets';
import './NavBar.css';

import { navLinks } from '../../constants';

// import useFirestore from '../../hooks/useFirestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

import { Fade as Hamburger } from 'hamburger-react';
import WorkList from './WorkList';


const NavBar = (props) => {

  const query = collection(db, "test");
  const [docs, loading, error] = useCollectionData(query);


  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const showCaseWork = () => {
    document.getElementById("subnav").classList.toggle("show");
  }

  return (
    <aside id={props.id} className='lg:w-1/6 lg:h-screen'>
      <div className="w-full">

        <div className="flex flex-row mb-4 justify-between items-center">
          <button className='w-[120px] h-[120px] cursor-pointer'>
            <a href="/">
              <img src={camera} className='w-100 h-auto' alt="Logo spinning camera" />
            </a>
          </button>

          <Hamburger toggled={hamburger} toggle={setHamburger} color="#FF7B00" rounded hideOutline={false}/>
        </div>
            
        <div id="nav" className="p-0 text-left block w-auto static">
            <ul id="nav-links" className="gap-y-10 lg:gap-y-0">
              <li id="first" className="nav-link">
                <a href="/about" className='hidden lg:block'> ABOUT ME </a>
              </li>

              <li id="second" className="nav-link">
                <a href="/contact" className='hidden lg:block'>CONTACT</a>
              </li>

              <li id="third" className="nav-link mb-2">
                <button href="" onClick={() => showCaseWork()} type="button" className='hidden lg:block'>WORK</button>
              </li>

              <div id="subnav" className="subnav mb-4">
                <ul>
                    {docs?.map(doc => (
                      <li className="page-collection mb-2" key={doc.project}>
                        {doc.project}
                        
                        <WorkList path={`test/${doc.project}/children`} data={doc}/>
                      </li>
                    ))}
                </ul>
              </div>

              <li className="mb-12 lg:mb-4">
                  <a href="https://www.instagram.com/kreicsfilms/" target='_blank' className='hidden lg:block'>
                    <img className="mx-auto lg:mx-0 " src={instagramLogo} width="30" height="30"/>
                  </a>
              </li>
            </ul>
        </div>

        {/* mobile nav */}
        <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
          <ul className='flex flex-col gap-8 list-none'>
            {navLinks.map((item) => (
              <li className='nav-link' key={item.title} onClick={() => hamburgerMenu()}>
                <a href={item.link} >{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
  </aside>
  )
}

export default NavBar;