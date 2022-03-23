export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after finished developing
    // token:'BQBk45AA-w7BvgJdV6kcbkwqw9tk679FyxSiFx0i4dtx9TL2cK…64tzxk69cep7MBWonBxWMSKt3VD_dBI-mCqOHKv3MD36uyWgr'
    // token:"BQBuxhIbv2iFH-07FV9hAOOiPqhsJdZHg1LbdBWdxjjrwcgE6KiHUMC-QFMFxnA-7oDHQIIfEnERXsXAmAET5a8kzj4LgIJlzdYt6RBCX1m36KOY6Vh2yVPYjmL-FRCQift0Z69sN189xFj2kIPk5v4e5fieg1LOnuWivVdHegrpIJtv"

};

const reducer = (state,action) =>{
console.log(action);
//action->type,[playload]
switch(action.type){
    case'SET_USER':
    return{
        ...state,
        user:action.user,
    };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token,
        };
    case 'SET_PLAYLISTS':
        return{
           ...state,
           playlists:action.playlists,
        };
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly:action.discover_weekly,
        };
    default:
        return state;
}
}
export default reducer;