import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col justify-between items-center sm:flex-row m-3'>
        <div className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderItem title={'Home'} Icon={HomeIcon}/>
        <HeaderItem title={'Home'} Icon={BadgeCheckIcon}/>
        <HeaderItem title={'Home'} Icon={CollectionIcon}/>
        <HeaderItem title={'Home'} Icon={LightningBoltIcon}/>
        <HeaderItem title={'Home'} Icon={SearchIcon}/>
        <HeaderItem title={'Home'} Icon={UserIcon}/>

        </div>
        <h2 className='text-3xl'>FAZ</h2>

    </header>
  )
}

export default Header