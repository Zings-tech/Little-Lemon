import { fetchAPI } from '../utils/tempAPI.js';

export function initializeTimes() {
    return fetchAPI(new Date());
}

export function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
        return fetchAPI(new Date(action.date));
    }
    return state;
}