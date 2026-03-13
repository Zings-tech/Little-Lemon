import { fetchAPI } from '../utils/tempAPI.js'; // Import the local version

export function initializeTimes() {
    return fetchAPI(new Date());
}

export function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
        return fetchAPI(new Date(action.date));
    }
    return state;
}