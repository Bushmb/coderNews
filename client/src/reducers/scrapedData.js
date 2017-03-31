export function scrapedDataHasErrored(state = false, action) {
    switch (action.type) {
        case 'SCRAPEDDATA_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function scrapedDataIsLoading(state = false, action) {
    switch (action.type) {
        case 'SCRAPEDDATA_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function scrapedData(state = [], action) {
    switch (action.type) {
        case 'SCRAPEDDATA_FETCH_DATA_SUCCESS':
            return action.scrapedData;
        default:
            return state;
    }
}