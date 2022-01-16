


let initState = {
    currentLevel: 1,
    userAnswer: '',
    

    levels: [
        {
            level: 1,
            lines: 1,
            correctAnswer:'justify-content: flex-end;',
            colors: ['green'], 
            lilypadStyle: {justifyContent: 'flex-end'},

        },


        {
           
            level: 2,
            lines: 1,
            correctAnswer:'justify-content: center;',
            colors: ['green', 'yellow'], 
            lilypadStyle: {justifyContent:'center'},



        },
        
        {
            level: 3,
            lines: 1,
            correctAnswer: 'justify-content: space-around;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {justifyContent: 'space-around'},
           
        },
        {
            level: 4,
            lines: 1,
            correctAnswer: 'justify-content: space-between;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {justifyContent: 'space-between'},
        },
        {
            level: 5,
            lines: 1,
            correctAnswer: 'align-items: flex-end;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {alignItems: 'flex-end'},
    
    
        },
        {
            level: 6,
            lines: 2,
            correctAnswer: 'justify-content: center; align-items: center;',
            colors: ['green'],
            lilypadStyle: {justifyContent: 'center', alignItems: 'center'},
           
    
        },
        {
            level: 7,
            lines: 2,
            correctAnswer: 'justify-content: space-around; align-items: flex-end;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {justifyContent: 'space-around', alignItems: 'flex-end'},
    
        },
        {
            level: 8,
            lines: 1,
            correctAnswer: 'flex-direction: row-reverse;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {flexDirection: 'row-reverse'},
    
        },
        {
            level: 9,
            lines: 1,
            correctAnswer: 'flex-direction: column;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {flexDirection: 'column'},
        },
        {
            level: 10,
            lines: 2,
            correctAnswer: 'flex-direction: row-reverse; justify-content:flex-end;',
            colors: ['green', 'yellow', 'red'],
            lilypadStyle: {flexDirection: 'row-reverse', justifyContent: 'flex-end'},
            
            
        },
        
    
    ]
    
}


export default initState;