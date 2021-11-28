import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styles from './News.module.css';
import Vector from '../../img/Vector.svg';
import ReactHtmlParser from 'react-html-parser';
import { PropsNewsType } from '../type';



export const News = ({cards}: PropsNewsType) => {
    const sumParams: { id: string | undefined } = useParams()
    const navigate = useNavigate()
    const objId = sumParams.id
    const goBack = () => {navigate(-1)}
    return (
        <>
            <header className={styles.header}>
                <button className={styles.btn} onClick={goBack}>
                    Вернуться назад
                </button>
                <h1 className={styles.title}>
                    Новость
                </h1>
                    <img src={Vector} alt="Logo"/>
            </header>

            {cards.length > 0 && cards.map(el => objId && el.id === +objId &&
                <div className={styles.blockCard} key={el.id}>
                    <div className={styles.cardTitle}>{el.title}</div>
                    <img width={800} height={553} src={el.image_big} alt="img"/>
                    <div className={styles.cardLead}>
                        {ReactHtmlParser(el.lead)}
                    </div>
                </div>
            )}
        </>
    );
};



