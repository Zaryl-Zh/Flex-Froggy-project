import React from 'react'
import classes from './Instructions.module.css'
import { useSelector } from 'react-redux'
import descriptionList from './DescriptionList'


const Instructions = () => {
    const level = useSelector(state => state.level.currentLevel)
   
    return (
        <div className={classes.instructions}>
                {descriptionList[level - 1]}
        </div>
    )
}

export default Instructions
