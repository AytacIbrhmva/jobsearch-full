import React from 'react'
import Category from './group/List';
import Levels from './group/List';
import Salaries from './group/List';



export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='groups'>
            <Category />
        </div>
    </div>
  )
}
