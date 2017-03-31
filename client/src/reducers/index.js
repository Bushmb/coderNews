import { combineReducers } from 'redux';
import { scrapedData, scrapedDataHasErrored, scrapedDataIsLoading } from './scrapedData';
import topic from './topic'
export default combineReducers({
    scrapedData,
    scrapedDataHasErrored,
    scrapedDataIsLoading,
    topic
});