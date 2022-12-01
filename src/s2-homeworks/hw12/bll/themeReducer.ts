const initState = {
    themeId: 1,
}
export type ThemeStateType = {
    themeId: number
}

type RootActionType =   ChangeThemeIdType
export const themeReducer = (state: ThemeStateType = initState, action: RootActionType): ThemeStateType => {
    switch (action.type) {
        case "SET_THEME_ID":{
            return {themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id})

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}