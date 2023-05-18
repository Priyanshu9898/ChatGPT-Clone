import React from 'react'
import ContentBox from './ContentBox'

const HomeBox = (props) => {


  return (
    <div className="flex flex-col justify-center items-center m-2">
        <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        {/* <img src={imgs} alt={props.title} /> */}
        <h1 className='text-center text-white font-2xl mt-2' >{props.title}</h1>


            <ContentBox data={props.data1}/>
            <ContentBox data={props.data2}/>
            <ContentBox data={props.data3}/>
        
    </div>
  )
}

export default HomeBox