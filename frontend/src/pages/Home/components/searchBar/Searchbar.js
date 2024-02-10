import { useState, useEffect } from 'react';
import {BiSearch} from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs, setSearch } from '../../../../redux/slices/jobsSlice';
import SelectCategory from './SelectCategory';

function Searchbar() {  
  const [getSearch, setGetSearch] = useState('')
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.jobs.search);
  const searchData = (e) => {
    e.preventDefault()
    dispatch(fetchJobs({department: "", sort: "", searchQuery: getSearch || ''}));
    dispatch(setSearch(getSearch))
  }
  

  return (
    <div className='searchbar'>
        <div className="container">
          {/* <SelectCategory /> */}

            <form action="" onSubmit={(e) => searchData(e)}>
              <div className="input-col">
                <BiSearch onClick={(e) => searchData(e)} className='icon' />
                <input onChange={(e) => setGetSearch(e.target.value)} type="text" placeholder='Search'/>
              </div>   
              <button type='submit' className='search-btn'>Find Job</button>
            </form>
        </div>
    </div>
  )
}

export default Searchbar