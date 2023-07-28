import  { useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'add_number':
            return { count: state.count + 1, showText: state.showText };
        case 'subtraction':
            return { count: state.count - 1, showText: state.showText};
        case 'toggleHose':
            return {count:state.count, showText:!state.showText}
        default:
            return state; 
    }
};

function Num() {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div className='flex items-center pr-14 column'>
            {state.count}
            <button onClick={() => dispatch({ type: 'add_number' })}>add number</button>
            <button onClick={() => dispatch({type: 'subtraction'})}>subtraction </button>
            <button onClick={() => dispatch({type: 'toggleHose'})}>witch</button>
            {state.showText&&<div>shows text</div>}
        </div>
    )
}

export default Num