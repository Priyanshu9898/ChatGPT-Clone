import React from 'react'
import RightComponent from './RightComponent'

const Home = () => {
  return (
    <>
        <div className="flex h-[100vh] text-white">
            <div className="left w-2/12 bg-black">
                left
            </div>

            <div className="right w-10/12">
                <RightComponent />
            </div>
        </div>
    </>
  )
}

export default Home