import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'
import tasks from 'reducers/tasks'

const AddForm = styled.form`
display: flex;
position: relative;
background-color: white;
margin-bottom: 25px;
`
const ButtonAdd = styled.button`
border: none;
background: none;
font-size: 2rem;
margin-left: 10px;
cursor: pointer;
`
const InputField = styled.input`
font-size: 1.5em;
border: none;
outline-style: none;
width: 100%;
height: 5rem;
cursor: pointer;
`

const TaskAdd = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()
       
        const newTask = {
            //dependency uniqid to give each task a uniqueid
            id: uniqid(),
            text: inputValue,
            complete: false
        }

        dispatch(tasks.actions.addItem(newTask))

        setInputValue('')
    }

    return (
        <AddForm onSubmit={onFormSubmit}>
            <ButtonAdd type='submit' disabled={inputValue.length < 1}>
              <span role='img' aria-label='add task'>➕</span>
            </ButtonAdd>
            <InputField
              placeholder='Add task'
              aria-label='add task text'
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            >
            </InputField>
        </AddForm>
    )
}

export default TaskAdd
