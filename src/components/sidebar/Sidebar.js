import React from 'react'
import LevelCounter from './LevelCounter'
import Title from './Title'
import classes from './Sidebar.module.css'
import Instructions from './Instructions'
import InputArea from './InputArea'

const Sidebar = () => {
    return (
        <section className={classes.sidebar}>
        <header className={classes.header}>
            <Title/>
            <LevelCounter/>
        </header>
         <Instructions/>
         <InputArea/>
        </section>
    )
}

export default Sidebar
