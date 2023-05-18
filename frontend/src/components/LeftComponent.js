import React from 'react'

const LeftComponent = () => {
  return (
    <>
        <div className="w-full px-2 py-2 text-xs/[12px]">
            <button className="w-full flex flex-row justify-start items-center border-2 rounded-md border-gray-600 py-3 px-4">
            <svg className="mx-2" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                New Chat
            </button>
        </div>
    </>
  )
}

export default LeftComponent