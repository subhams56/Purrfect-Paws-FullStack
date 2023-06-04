import React from 'react'
import { Info } from 'lucide-react'

export function Banner(props) {
  return (
    <div className="rounded-md border-l-4 mt-[20px] md:w-[1800px] mx-auto border-black bg-gray-100 p-4">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <Info className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium">
          {props.message}
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

 export default Banner
