import React from 'react';
import styles from './SelectedNews.module.css';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru'
import { PropsSelectedNewsType } from '../type';



export const SelectedNews = ({
                                 image_small,
                                 date,
                                 title,
                                 id
                             }: PropsSelectedNewsType) => {
    const navigate = useNavigate()
    const ChangeDate = moment(date).format('LL')


    return (
        <div className={styles.card}
             onClick={() => navigate(`/${id}`)}>
            <img src={image_small} alt="img"/>
            <div className={styles.block}>
                <p>{ChangeDate}</p>
                <b>{title}</b>
            </div>
        </div>

    );
};

