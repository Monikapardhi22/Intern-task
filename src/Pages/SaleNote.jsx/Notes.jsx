import React from 'react'

export default function Notes() {
  return (
    <div className='text-center text-black'>
        <div className='w-[400px] h-[250px]'>
            <h1 className='text-2xl font-semibold p-6'>
Add/Edit Note to Selected Order
            </h1>
<textarea rows='2' placeholder='Enter Your Notes' className='border p-2 focus:border-blue-400 rounded-md text-black'>

</textarea>
<div>
    <button className='p-3 bg-blue-400 text-white font-bold'>Add</button>
</div>


        </div>
      
    </div>
  )
}
