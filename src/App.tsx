import React, {useEffect, useState} from 'react';
import './components/Home/Home.module.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {News} from './components/Card/News';
import {fetchCardsTC} from './store/appReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import { cardType } from './components/type';


function App() {
    const cards = useSelector<AppRootStateType, Array<cardType>>((state) => state.cards.cards)
    const isLoading = useSelector<AppRootStateType, boolean>((state) => state.cards.isLoading)
    const [language, setLanguage] = useState({value: '1', label: 'RU '})
    const dispatch = useDispatch()

    const mainLangId = 1
    const countPage = 9

    useEffect(() => {
        dispatch(fetchCardsTC(countPage, mainLangId))
    }, [dispatch])

    return (<Routes>
            <Route path="/"
                   key={null}
                   element={
                       <Home cards={cards}
                             language={language}
                             countPage={countPage}
                             isLoading={isLoading}
                             setLanguage={setLanguage}/>
                   }/>
            <Route path="/:id" key={null} element={<News  cards={cards}/>}
            />
        </Routes>
    );
}

export default App;
