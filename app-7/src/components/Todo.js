import React from 'react'

export const Todo = (props) => {
    console.log('props.tasks', props.tasks)

    let tasks = props.tasks.map((element, index ) => {
return(
    <h2 key = {index}>{element}</h2>
)
    })
    return(
        <div>
        {tasks}
        </div>
    )
}
