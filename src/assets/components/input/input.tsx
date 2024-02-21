import {ChangeEvent, FC, useState} from 'react';
import {EyeClose} from "../icon/eye-close.tsx";
import {EyeOpen} from "../icon/eye-open.tsx";
import styles from './input.module.scss';
import classNames from 'classnames'

export type Props = {
    name: string
    label: string
    value: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: 'text' | 'number' | 'email' | 'password'
    maxLength: number
    autofocus?: boolean
    onBlur: () => void
    errorMessage?: string
}

export const Input: FC<Props> = ({
     label,
     value,
     name,
     type,
     maxLength,
     placeholder,
     autofocus = false,
     onChange,
     onBlur,
     errorMessage = '',
    }) => {

    const [inputType, setInputType]= useState(type)

    const classes = classNames(styles.field, {
        [styles.invalid]: errorMessage,
    })

    return (
        <label className={classes}>
            <p className={styles.title}>{label}</p>
            <input
                name={name}
                type={inputType}
                autoFocus={autofocus}
                maxLength={maxLength}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e)}
                onBlur={onBlur}
            />
            {
                type === 'password' &&
                (inputType === 'password' ?
                    (<EyeClose onClick={() => setInputType('text')}/>) :
                    (<EyeOpen onClick={() => setInputType('password')} />))
            }
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </label>
    );
};
