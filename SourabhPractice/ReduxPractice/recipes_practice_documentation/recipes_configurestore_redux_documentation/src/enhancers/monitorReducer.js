const round=number=>Math.round(number*100)/100;

const monitorReducerEnhancer=createStore=>(reducer,initialState,enhancer)=>{
    const montitoredReducer=(state,action)=>{
        const start=performance.now();
        const newState=reducer(state,action);
        const end=performance.now();
        const diff=round(end-start);
        console.log('Reducer Process Time : ',diff);
        return newState;
    }
    return createStore(montitoredReducer,initialState,enhancer);
}

export default monitorReducerEnhancer;