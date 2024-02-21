import React, { FC } from 'react';
import styles from './submit-input.module.scss';

export type Prop = {
    text: string
    type?: 'submit' | 'button' | 'reset'
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


export const SubmitInput: FC<Prop> = ({
      text,
      type,
      onClick }) => {
    return (
        <button className={styles.button} type={type} onClick={e => onClick(e)}>
            {text}
        </button>
    );
};
