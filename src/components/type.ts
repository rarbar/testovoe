import {isLoadingAC, setCardsAC} from '../store/appReducer';

export  type PropsHomeType = {
    countPage: number
    cards: cardType[]
    setLanguage: (e: typeSelect) => void
    language: typeSelect
    isLoading: boolean
}

export type typeSelect = {
    value: string
    label: string

}
export type PropsNewsType = {
    cards: cardType[]
}
export type PropsSelectedNewsType = {
    id: number
    image_small: string
    date: string
    title: string
}
export type objApiType = {
    category: number,
    total: number,
    page: number,
    per_page: number,
    last_page: number,
    news: Array<cardType>
}
export type cardType = {
    category: {
        category_id: 9
        category_title: string
        color: string
        color_title: string
    }
    creation_date: string
    date: string
    id: number
    image_big: string
    image_small: string
    parent_category: {
        category_id: number,
        category_title: string,
        color_title: string,
        color: string
    }
    title: string
    url: string
    view_count: number
    lead: string
}
export type InitialType = {
    cards: Array<cardType>
    isLoading: boolean
}
export type ActionsType = setCardsActionType | IsLoadingActionType
type setCardsActionType = ReturnType<typeof setCardsAC>;
type IsLoadingActionType = ReturnType<typeof isLoadingAC>;