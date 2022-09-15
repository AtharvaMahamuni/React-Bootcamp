import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';


const Header = () => {
  return (
    <div className='headerBody'>

        <div className="headerLeft">
            <h1>Toll entries/Vehicle Entries</h1>
            <div className="filterIconBody">
              <FontAwesomeIcon className="filterIcon fa-xl" icon={faFilter}/>
            </div>
            
            <div className='headerSearch'>
                <FontAwesomeIcon className="searchIcon fa-xl" icon={faSearch} />
                <input type="text" placeholder='search'/>
            </div>
          
        </div>
        
        <div className="headerRight">
        
          <Button buttonName="Add vehicle entry" />
          <Button buttonName="Add new toll" />
          <Button buttonName="View all tolls" />

        </div>


    </div>
  )
}

export default Header