import React from 'react'
import {motion} from 'framer-motion'
import { dotLoader } from '../utility/animation'

const DotLoader = () => {
  return (
    <div className='flex justify-center items-center gap-2 pt-2'>
        <motion.div
        variants={dotLoader(0)}
        animate = "animate"
        className='w-[10px] h-[10px] rounded-full bg-primary-300 '>
        </motion.div>
        <motion.div
        variants={dotLoader(0.2)}
        animate = "animate"
        className='w-[10px] h-[10px] rounded-full bg-primary-300 '>
        </motion.div>
        <motion.div
        variants={dotLoader(0.4)}
        animate = "animate"
        className='w-[10px] h-[10px] rounded-full bg-primary-300 '>
        </motion.div>

    </div>
  )
}

export default DotLoader