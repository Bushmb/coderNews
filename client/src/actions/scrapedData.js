export function scrapedDataHasErrored(bool) {
    return {
        type: 'SCRAPEDDATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function scrapedDataIsLoading(bool) {
    return {
        type: 'SCRAPEDDATA_IS_LOADING',
        isLoading: bool
    };
}
export function scrapedDataFetchDataSuccess(scrapedData) {
    return {
        type: 'SCRAPEDDATA_FETCH_DATA_SUCCESS',
        scrapedData
    };
}

export function scrapedDataFetchData(url) {
    return (dispatch) => {
        dispatch(scrapedDataIsLoading(true));
        fetch(url)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(scrapedDataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((scrapedData) => dispatch(scrapedDataFetchDataSuccess(scrapedData)))
            .catch(() => dispatch(scrapedDataHasErrored(true)));
    };
}

