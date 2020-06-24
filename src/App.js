import React, { useState, useEffect } from 'react';
import './App.css';
import Job from './job'
import data from './data.json'
function App() {
  const [jobs,setJobs]=useState([]);
  const [filters,setFilters]=useState([]);

  useEffect(()=>setJobs(data),[]);

  const filterFun = (job)=>{
    const {role,level,tools,languages}=job
    if (filters.length===0){
      return true;
    }
    const tags= [role,level,...tools,...languages]
    return filters.every(fil=>tags.includes(fil))
    //return tags.some(tag=>filters.includes(tag));
  }
  const handleTagClick = tag=>{
    if(filters.includes(tag)) return ;
    setFilters([...filters,tag]);
   }
  const filteredJobs=jobs.filter(job=>filterFun(job))
const removeFilter=f=>{
    setFilters(filters.filter(tag=>tag!==f))
  }

  return (
    <div className="App">
      <header>
        <img src='images/bg-header-desktop.svg' alt='header img' />
      </header>

      <div className='filters'  >
         {filters.length>0 ?
          filters.map(f=><span className='tagfil'>{f}<span className='close' onClick={()=>removeFilter(f)}>x</span></span>)
          : 'Click on skills below to filter'}
         {filters.length>0 && <span className='clear' onClick={()=>setFilters([])}>clear</span>}
      </div>
      <div className='body'>
        {filteredJobs.map(item=>{
          return <Job data={item} key={item.id} handleTag={handleTagClick}/>
        })}
      </div>

    </div>
  )
}

export default App;
