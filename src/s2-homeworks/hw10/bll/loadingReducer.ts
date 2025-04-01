const initState:Type = {
    isLoading: false,
}

type Type = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action:LoadingActionType):Type  => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            console.log('disp')
        return {...state,isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
