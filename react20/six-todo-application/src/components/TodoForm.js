import React, {useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import {v4} from 'uuid';
import {TodoContext} from '../context/TodoContext';
import {ADD_TODO} from "../context/action.types";

const TodoForm = () => {
    return(
        <Form>
            <FormGroup>
                <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    //TODO: Value, onChange
                />
                <Button
                    color="warning"
                    //TODO: onClick
                >Add</Button>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;