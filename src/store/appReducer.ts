import {Dispatch} from 'redux';
import {getCards} from '../api/cardsApi';
import {ActionsType, cardType, InitialType} from '../components/type';

const initialState: InitialType = {
    cards: [],
    isLoading: false
}

export const cardsReducer = (state: InitialType = initialState, action: ActionsType): InitialType => {
    switch (action.type) {
        case 'SET-CARDS':
            return {...state, cards: action.cards}
        case 'SET-LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}
export const setCardsAC = (cards: Array<cardType>) => ({
    type: 'SET-CARDS',
    cards
} as const)

export const isLoadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING',
    isLoading
} as const)

// thunks
export const fetchCardsTC = (countPage: number, id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(isLoadingAC(true))
        const res = await getCards(countPage, id)
        dispatch(setCardsAC(res.data.news))
        dispatch(isLoadingAC(false))
    }
}



