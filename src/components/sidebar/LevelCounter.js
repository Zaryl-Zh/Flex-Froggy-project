import React from 'react'
import DropList from './DropList'
import classes from './LevelCounter.module.css'
import { useState } from 'react'
import { levelActions } from '../../redux-store/level-slice'
import { useDispatch, useSelector } from 'react-redux'


const LevelCounter = () => {
    const [state, setState] = useState(false)

    const dispatch = useDispatch()
    const level = useSelector(state => state.level.currentLevel)
    const levels = useSelector(state=> state.level.levels)

    const nextLevel = () => {
        dispatch(levelActions.incrementLevel())
    }

    const previousLevel = () => {
        dispatch(levelActions.decrementLevel())
    }
       
    const dropListHandler = () => {
       setState(state => !state)
        
    }
    const droplist = () => {
        return (
           <div id={classes.levelsWrapper} className={classes.tooltip}>
             <div id={classes.levels}>
              {levels.map(level =>{ return(<DropList key={level.level} level={level.level}/>)})}
          </div>
           <div id={classes.labelReset}>Reset</div>
          </div>
        )  
    }
    
    return (
        
        <div id={classes['level-counter']}>
            {level <= 1 ? 
            <span className={`${classes.arrow} ${classes.left} ${classes.disabled}`}> 
                <span className={classes.triangle}></span>
            </span> :
            <span className={`${classes.arrow} ${classes.left} `} onClick={previousLevel}> 
            <span className={classes.triangle}></span>
        </span>
            }
            <span id={classes['level-indicator']} className={classes.arrow} onClick={dropListHandler}>
                <span id={classes.labelLevel}>Level</span> {' '}
                <span>{level }</span> {' '}
                <span>of</span> {' '}
                <span>10</span> {' '}
                <span className={classes.caret}>▾</span>
            </span>
          {level >= 10 ?
            <span className={`${classes.arrow} ${classes.right} ${classes.disabled}`}>
                <span className={classes.triangle}></span>
            </span> :
            <span className={`${classes.arrow} ${classes.right}`} onClick={nextLevel}>
            <span className={classes.triangle}></span>
        </span>
           }
           {state && droplist() }
           
        </div>
    )
}

export default LevelCounter
