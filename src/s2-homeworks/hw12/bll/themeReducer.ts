const initState:StateType = {
    themeId: 1,
} as const

export type StateType = {
    themeId: number,
}

export const themeReducer = (state = initState, action: changeThemeId): StateType=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeId = {
    type: string,
    id: number
}

export const changeThemeId = (id: number): changeThemeId => ({ type: 'SET_THEME_ID', id }) // fix any

