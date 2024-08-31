import React from 'react'
import { ModeToggle } from '../ModeToggle'

export const Headers = () => {
  return (
    <div className='py-8 xl:px-12'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='left'>
          <h2>Aphiwat<span>.</span>dev</h2>
        </div>
        <div className='right'>
          <ModeToggle />
        </div>
      </div>
    </div>


  )
}
