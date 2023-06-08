import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";


const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Wrong input :D',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        };
        if (+enteredAge < 1) {
            setError({
                title: 'Too young :D',
                message: 'Please enter a valid age (at least 1 years old).'
            });
            return;
        };
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };
    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card classNameJan={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        onChange={userNameChangeHandler}
                        value={enteredUsername}
                        id="username"
                        type="text"
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        onChange={userAgeChangeHandler}
                        value={enteredAge}
                        id="age"
                        type="number"
                    />
                    <Button type="submit">Add User </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;