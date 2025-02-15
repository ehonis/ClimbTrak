'use client';

import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export default function SideNav() {
  const [isNavbar, setIsNavbar] = useState(true);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsNavbar(true); // Close the navbar if click is outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsNavbar(!isNavbar);
  };

  const navClick = () => {
    setIsNavbar(true);
  };
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 top-16 z-10 bg-black transition-opacity duration-700 transform',
          isNavbar ? 'invisible opacity-0' : 'visible opacity-25'
        )}
      ></div>
      <div className="flex flex-col fixed top-16 w-30 h-30 z-50 bg-bg1 "></div>
      <div
        ref={navRef}
        className={clsx(
          'z-50 fixed flex flex-col h-screen w-56 bg-bg1 top-16 left-0 transition-all duration-700 transform gap-2 p-3', // removed px-5
          isNavbar ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
        )}
      >
        <Link
          href={'/routes'}
          className={clsx(
            'flex z-[100] items-center group md:hover:bg-white bg-bg2 md:bg-bg2 transition-all duration-700 rounded',
            isNavbar ? 'p-0' : 'p-5'
          )}
          onClick={navClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-8 md:group-hover:stroke-bg1 md:stroke-white stroke-white transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>

          <p className="md:text-white text-white font-bold ml-3 md:group-hover:text-bg1 transition-all duration-300 text-2xl">
            Routes
          </p>
        </Link>
        <Link
          href={'/competitions'}
          className={clsx(
            'flex z-[100] items-center group md:hover:bg-white bg-bg2 md:bg-bg2 transition-all duration-700 rounded',
            isNavbar ? 'p-0' : 'p-5'
          )}
          onClick={navClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-8 md:group-hover:stroke-bg1 md:stroke-white stroke-white transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>

          <p className="md:text-white text-white font-bold ml-3 md:group-hover:text-bg1 transition-all duration-300 text-2xl">
            Comps
          </p>
        </Link>
        <Link
          href={'/search'}
          className={clsx(
            'flex z-[100] items-center group md:hover:bg-white bg-bg2 md:bg-bg2 transition-all duration-700 rounded',
            isNavbar ? 'p-0' : 'p-5'
          )}
          onClick={navClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 md:group-hover:stroke-bg1 md:stroke-white stroke-white transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <p className="md:text-white text-white font-bold ml-3 md:group-hover:text-bg1 transition-all duration-300 text-2xl">
            Search
          </p>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-8 cursor-pointer"
        onClick={handleClick}
        ref={buttonRef}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </>
  );
}
