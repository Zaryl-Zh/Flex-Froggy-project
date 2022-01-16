import React from 'react'
import classes from './InputArea.module.css'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { levelActions } from '../../redux-store/level-slice'


const InputArea = () => {
    
    const dispatch = useDispatch()
    const currentLevel = useSelector(state => state.level.currentLevel)
    const allLevels = useSelector(state=> state.level.levels)
    const levelData = allLevels.filter(item => item.level === currentLevel)[0]
    const [answer, setAnswer] = useState('')
    const inputHandler = (e) => {
        setAnswer(e.target.value)
        dispatch(levelActions.setStyles(answer))
        
    }

    const nextLevel = () => {
        if((currentLevel + 1) <=10)
        {dispatch(levelActions.setCurrentLevel(currentLevel + 1)) }
    }
  
    const buttonDisabled = (levelData.correctAnswer=== answer) ? `${classes.enabled}` : classes.disabled

     useEffect(() => {
        dispatch(levelActions.setStyles(''))
        setAnswer('')
    }, [levelData.level])
    
    const textareaHeight = {height: `${24 * levelData.lines}px`}

    return (
        <div id={classes.editor}>
            <div id={classes.css}>
                <div className={classes['line-numbers']}> 
                    1 <br/>
                    2 <br/>
                    3 <br/>
                    4 <br/>
                    5 <br/>
                    6 <br/>
                    7 <br/>
                    8 <br/>
                    9 <br/>
                    10 
                </div>
                <pre id='before'>#pond { '{'} display: flex;</pre>
                <textarea 
                   id={classes.code} 
                   style={textareaHeight}
                   autoFocus autoCapitalize = 'none'
                   onChange={inputHandler}
                   value={answer}
                   ></textarea>
                <pre id='after'>{ '}'}</pre>
            </div>
            <button className={`${classes.next} ${buttonDisabled}`} onClick={nextLevel}>Next</button>
        </div>
    )
}

export default InputArea
