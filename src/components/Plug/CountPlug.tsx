import React from 'react';
import styles from './Plug.module.css'

export const countPlug = (count: number) => Array(count).fill(<Plug/>)


const Plug = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}></div>
            <div className={styles.a}>
                <div className={styles.value}></div>
                <div className={styles.value}></div>
                <div className={styles.value}></div>
                <div className={styles.value}></div>
                <div className={styles.value}></div>
            </div>

        </div>
    );
};

