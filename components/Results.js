import React from 'react'
import SingleResults from './SingleResults'
import FlipMove from 'react-flip-move';

 function Results({results}) { 
    console.log(results,'res');
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3'>
        {
            results.map((res) =>{
              return  <SingleResults key={res.id} result={res} />
            })
        }
    </div>
  )
}
export default Results