"use client"
import React from 'react';

import Image from 'next/image';
import { useTheme } from '../app/(store)/useStore';

function ThemeOptions() {

    const setTheme=useTheme((state:any)=>state.setTheme)

    const themes = [
        { value: "coastal", imgUrl: "/coastal.png" },
        { value: "modern", imgUrl: "/modern.png" },
        { value: "professional", imgUrl: "/professional.png" },
        { value: "tribal", imgUrl: "/tribal.png" },
        { value: "tropical", imgUrl: "/tropical.png" },
        { value: "vintage", imgUrl: "/vintage.png" },
    ]

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        document.querySelector(".selected")?.classList.remove("selected");
        e.currentTarget.classList.add("selected")
        setTheme(e.currentTarget.lastChild?.textContent);
    }

  return (
      <div className='grid grid-cols-3 gap-5'>
          {
              themes.map((theme, index) => {
                  return (
                      <div onClick={handleClick} key={index} className='cursor-pointer transition-all flex flex-col items-center gap-2 group'>
                          <Image src={theme.imgUrl} alt='theme' width={100} height={100}  className='rounded-lg group-hover:opacity-80'/>
                          <p className='font-semibold'>{theme.value}</p>
                      </div>
                  )
          })
          }
    </div>
  )
}

export default ThemeOptions