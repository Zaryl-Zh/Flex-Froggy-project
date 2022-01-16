import React from 'react'
import classes from './DropList.module.css'
import {useDispatch } from 'react-redux'
import { levelActions } from '../../redux-store/level-slice'

const DropList = (level) => {
    const dispatch = useDispatch()
    const clickedLevel = () => {
       dispatch(levelActions.setCurrentLevel(level.level))
    }
    return (
        <div> 
           <span onClick={clickedLevel} className={classes['level-marker']} >{level.level}</span>   
        </div>
    )
}

export default DropList
