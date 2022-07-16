const themeModes = {dark: 'dark', light: 'light'};

const initialState = {
    currTheme: themeModes.light,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_THEME': return {
            ...state,
            currTheme: action.payload,
        } ;
        default: return state;
    }
}
export default reducer;

export const getThemeMode = (state)=>{
    return state.currTheme;
}

export const getThemeModes = ()=>{
    return themeModes;
}
