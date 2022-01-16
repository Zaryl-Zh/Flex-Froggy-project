import React from 'react'
import classes from './DropList.module.css'
import { useSelector } from 'react-redux'

const DropList = (level) => {
    
    return (
        <div> 
           <span className={classes['level-marker']} >{level.level}</span>   
        </div>
    )
}

export default DropList
