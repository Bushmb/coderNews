export default function topic(state = '', action) {
  if (action.type === 'SELECT_TOPIC') {
  	console.log("ACTION", action);
    return {
    	...state,
    	selectedTopic: action.topic
    }
  }
  
  return state;
}