import React from 'react'
import classes from './FrogsField.module.css'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { levelActions } from '../../redux-store/level-slice'

const FrogsField = () => {
    
    const dispatch = useDispatch()
    const currentLevel = useSelector(state => state.level.currentLevel)
    const levelData = useSelector(state=> state.level.levels.find(item =>item.level===currentLevel))
    const userStyle = useSelector(state => state.level.userAnswer)
    const frogRef = useRef()
    
    useEffect(() => { 
        frogRef.current.style = userStyle
        if(levelData.correctAnswer.trim() === userStyle.trim()) {
            dispatch(levelActions.setStyles(levelData.correctAnswer))
       } 
    },[userStyle])
    
    const frogColor = () => {
        return levelData.colors.map((color) => (
            <Frogs key={color} className={classes[color]}/>
        ))
    };

    const lilypadColor = () => {
        return levelData.colors.map((color) => (
            <Lilypad key={color} className={classes[color]}/>
        ))
    }
  

    return (
        <>
            <div id={classes.board}>
            <div id={classes.pond} ref={frogRef}>
                {frogColor()}
            </div>
            <div id={classes.background} style={levelData.lilypadStyle}>
                {lilypadColor()}
            </div>
           </div>
          </>
        
    )
}

const Frogs = ({className}) => {
    return(<div className={`${classes.frog} ${className}`}>    
    <div className={`${classes.bg}`}></div>
</div>
 )}

 const Lilypad = ({className}) =>{
     return (<div className={`${classes.lilypad} ${className}`}>
     <div className={classes.bg}></div>
 </div>)
 }
 

export default FrogsField




