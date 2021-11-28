import {useDispatch} from 'react-redux';
import React from 'react';
import {fetchCardsTC} from '../../store/appReducer';
import styles from './Home.module.css';
import Vector from '../../img/Vector.svg';
import {SelectedNews} from '../News/SelectedNews';
import Select from 'react-select'
import {countPlug} from '../Plug/CountPlug';
import {PropsHomeType, typeSelect} from '../type';


export const Home = ({
                         countPage,
                         cards,
                         setLanguage, language,
                         isLoading
                     }: PropsHomeType) => {
    const dispatch = useDispatch()

    const handlerSelect = (e: any) => {
        const lang = e.value
        setLanguage(lang.label)
        dispatch(fetchCardsTC(countPage, lang))
    }

    const statusOptions: Array<typeSelect> = [
        {value: '1', label: 'RU'},
        {value: '2', label: 'ENG'}
    ];


    return (
        <>
            <header className={styles.header}>
                <img src={Vector} alt="Logo"/>
                <Select
                    value={language}
                    onChange={handlerSelect}
                    options={statusOptions}/>
            </header>
            <h1 className={styles.title}>Новости и события</h1>
            <div className={styles.grid}>
                {isLoading
                    ? countPlug(countPage)
                    : cards?.map(card => <SelectedNews
                        key={card.id}
                        id={card.id}
                        image_small={card.image_small}
                        date={card.date}
                        title={card.title}/>
                    )
                }
            </div>
        </>
    )
}

