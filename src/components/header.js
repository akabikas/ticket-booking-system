import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Header() {
  const [subMenuStatus, setSubMenuStatus] = useState(false);

  const handleMouseEnterOnSubMenuVisiblity = () => {
    setSubMenuStatus(true);
  };

  const handleMouseLeaveAfterSubMenuVisiblity = () => {
    setSubMenuStatus(false);
  };



  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`sticky-top ${isSticky ? 'sticky-position' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="brand col-3">
              <Link href="/" >
                <Image
                  src="/assets/img/logo.png"
                  width={138}
                  height={35}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu col-6 d-flex justify-content-center">
              <ul className="d-flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/tickets">Tickets</Link>
                </li>
              </ul>
            </div>
            <div className="icon-menu col-3 d-flex justify-content-end">
              <div
                onMouseEnter={handleMouseEnterOnSubMenuVisiblity}
                onMouseLeave={handleMouseLeaveAfterSubMenuVisiblity}
              >
                <a>
                  <i className="fa-regular fa-circle-user"></i>
                </a>
                {subMenuStatus && (
                  <div className="sub-menu">
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/tickets">My tickets</Link></li>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
