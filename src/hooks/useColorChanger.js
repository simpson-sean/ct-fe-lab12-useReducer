export const initialValue = {
    current: '#FF0000',
    before: [],
    after: [],

};

const colorReducer = (state, action) => {
    
    const { current, before, after } = state;
    
    switch(action.type) {
        case 'undo':
            return {
                after: [current, ...after],
                current: before[before.length -1],
                before: before.slice(0, -1),
            };
        case 'redo':
            return {
                before: [...before, current],
                current: after[0],
                after: after.slice(1),
            };
        case 'selector':
            return {
                ...state,
                before: [...before, current],
                current: action.payload,
            };
    }
};

export default colorReducer;