import React,{useEffect, useState} from 'react';

import {v4 as uuiv4} from "uuid"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '@mui/material';

import TodoItem from '../TodoItem';
import MainTodoListSection from '../MainTodoListSection';
import MyButton from '../MyButton';


import "./todoList.css"


const TodoList = () => {
    const[title,setTitle] = useState("");
    const[todos,setTodos] = useState(getLocal());
    const[editedTodo,setEditedTodo] = useState(null)
    const[isEditing,setIsEditing] = useState(false) 

    function getLocal(){
        return JSON.parse(localStorage.getItem("todos")) || []
    }

    function saveToLocal(){
        localStorage.setItem("todos",JSON.stringify(todos))  
    }

    useEffect(()=>{
        saveToLocal()
    },[todos])


    function handleChangeInput(value){
        setTitle(value)
    }

    function addTodo(){
        if(validateTodoInputValue()){
            const originalTodos = [...todos]
            const newTodo = {title,id:uuiv4()}
            const newTodos = [...originalTodos,newTodo]
            setTodos(newTodos)
            setTitle("")
        }else{
            toast.error("please enter some value")
        }
    }

    function deleteTodo(id){
        const newTodos = todos.filter(todo=>todo.id!==id)
        setTodos(newTodos)
    }

    function editTodoBtn(id){
        const index = todos.findIndex(todo=>todo.id === id)
        setTitle(todos[index].title)
        setEditedTodo(index)
        setIsEditing(true)
    }

    function editTodoHandler(){
        if(validateTodoInputValue()){
            const originalTodos = [...todos]
            originalTodos[editedTodo].title = title;
            setTodos(originalTodos)
            setIsEditing(false)
            setTitle("")
        }else{
            toast.error("please enter some value")
        }
    }

    function handleBtns(){
        return(
            isEditing ? <MyButton title="update" func={editTodoHandler}/> : 
            <MyButton title="add" func={addTodo}/>
        )
    }

    function validateTodoInputValue(){
        return title ? true : false
    }

    return ( 
        <>
        <ToastContainer
        autoClose={2000}/>
        <Box sx={styles.boxStyle}>
            <MainTodoListSection title={title} change={handleChangeInput} buttons={handleBtns}/>
            <Box>
                {todos.map(todo=>(
                    <TodoItem title={todo.title} id={todo.id} editFunc={editTodoBtn} deleteFunc={deleteTodo} key={todo.id}/>
                ))}
            </Box>
        </Box>
        </>
     );
}


const styles = {
    boxStyle:{
        boxShadow: 10,
        width: '18rem',
        bgcolor:'#171A2B',
        borderRadius: '8px',
        pt:2,
        px:2,
        pb:3,
        display:'flex',
        flexDirection:'column',
        gap:2
    },
}
 
export default TodoList;