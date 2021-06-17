import React from 'react'
import TodoItem from './todo_item_component'

function ComponentTest(){

    const date = new Date();
    const hours = date.getHours;

    let dateText;

    if (hours < 12){
        dateText = "Good Morning!"
    }else if(hours > 12 && hours < 17){
        dateText = "Good Afternoon!"
    }else{
        dateText = "Good Evening!"
    }

    return (
        <div class ="centerShit">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>

    );
}

export default ComponentTest