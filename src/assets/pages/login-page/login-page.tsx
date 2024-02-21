import React, {ChangeEvent, FC, useState} from 'react';
import {DataInput} from "../../components/type/type.ts";
import {checkEmptyFields} from "../../components/utils/function.ts";
import {Input} from "../../components/input";
import {SubmitInput} from "../../components/submit-input/submit-input.tsx";
import styles from './login-page.module.scss'

const inputs: DataInput[] = [
    {
        name: 'userName',
        label: 'User name',
        value: '',
        maxLength: 30,
        placeholder: 'Please enter username',
        errorMessage: '',
        validationFn: checkEmptyFields,
        type: 'text',
    },
    {
        name: 'password',
        label: 'Password',
        value: '',
        maxLength: 30,
        placeholder: 'Please enter password',
        type: 'password',
        errorMessage: '',
        validationFn: checkEmptyFields,
    },
]

export const LoginPage: FC = () => {
    const [inputData, setInputData] = useState(inputs)

    const validate = (index?: number) => {
        const newArr = index
            ? [...inputData]
            : inputData.map(data => {
                const errorMessage = data.validationFn(data.value)
                return errorMessage ? {...data, errorMessage} : data
            })

        if (index) {
            newArr[index] = {
                ...newArr[index],
                errorMessage: newArr[index].validationFn(inputData[index].value),
            }
        }

        if (newArr.findIndex(data => data.errorMessage) >= 0) {
            setInputData(newArr)
        }
    }

    const blurInputHandler = (index: number) => {
        validate(index)
    }

    const handlerlogButton = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        validate()
    }

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value
        const newArr = [...inputData]
        newArr[index] = {...newArr[index], value, errorMessage: ''}
        setInputData(newArr)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <p className={styles.title__main}>Let’s Login</p>
                <p className={styles.title__additional}>And notes your idea</p>
            </div>
            <form className={styles.form}>
                {inputData.map((data, index) => (
                    <Input
                        key={index}
                        label={data.label}
                        value={data.value}
                        name={data.name}
                        type={data.type}
                        maxLength={data.maxLength}
                        placeholder={data.placeholder}
                        autofocus={index === 0}
                        errorMessage={data.errorMessage}
                        onChange={e => changeInputHandler(e, index)}
                        onBlur={() => blurInputHandler(index)}
                    />
                ))}
                <SubmitInput
                    text='Login'
                    onClick={handlerlogButton}
                    type="submit" />
            </form>
        </div>
    )
}
