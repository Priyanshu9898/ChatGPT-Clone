import React from 'react'

const ContentBox = (props) => {
  return (
    <div className="text-white text-center padding-10 border-1 mt-2 mb-2 bg-gray-700 hover:bg-slate-800 w-[16vw] py-3 px-2 text-sm rounded-md">
        {props.data}
    </div>
  )
}

export default ContentBox