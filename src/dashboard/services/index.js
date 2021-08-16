import { createAction, handleActions } from 'redux-actions';
import ActionTypes from '@shared/constants/actionTypes';
import { _getStarWarsList, _getStarWarsDetails } from '@shared/httpService/api';

const initialState = {
	star_wars: { loading: false, response: {}, hasError: false, error: {} },
	star_wars_details: { loading: false, response: {}, hasError: false, error: {} },
};

const getStarWarsListStart = createAction(ActionTypes.GET_START_WARS_LIST);
const getStarWarsListSuccess = createAction(ActionTypes.GET_START_WARS_LIST_SUCCESS, response => response);
const getStarWarsListError = createAction(ActionTypes.GET_START_WARS_LIST_ERROR, error => error);

export const getStarWarsList = () => (dispatch) => {
	dispatch(getStarWarsListStart());
	return _getStarWarsList().then((response) => {
		dispatch(getStarWarsListSuccess(response));
	}).catch((error) => {
		dispatch(getStarWarsListError(error));
	});
};

const getStarWarsDetailsStart = createAction(ActionTypes.GET_STAR_WARS_DETAILS);
const getStarWarsDetailsSuccess = createAction(ActionTypes.GET_STAR_WARS_DETAILS_SUCCESS, response => response);
const getStarWarsDetailsError = createAction(ActionTypes.GET_STAR_WARS_DETAILS_ERROR, error => error);

export const getStarWarsDetails = (id) => (dispatch) => {
	dispatch(getStarWarsDetailsStart());
	return _getStarWarsDetails(id).then((response) => {
		dispatch(getStarWarsDetailsSuccess(response));
	}).catch((error) => {
		dispatch(getStarWarsDetailsError(error));
	});
};

const reducer = handleActions({
	[ActionTypes.GET_START_WARS_LIST]: (state) => ({
		...state, star_wars: {
			...state.star_wars,
			loading: true, hasError: false, error: {}
		}
	}),
	[ActionTypes.GET_START_WARS_LIST_SUCCESS]: (state, action) => ({
		...state,
		star_wars: {
			...state.star_wars,
			response: action.payload, loading: false, hasError: false, error: {}
		}
	}),
	[ActionTypes.GET_START_WARS_LIST_ERROR]: (state, action) => ({
		...state,
		star_wars: {
			...state.star_wars,
			error: action.payload, loading: false, hasError: true, response: {}
		}
	}),

	[ActionTypes.GET_STAR_WARS_DETAILS]: (state) => ({
		...state, star_wars_details: {
			...state.star_wars_details,
			loading: true, hasError: false, error: {}
		}
	}),
	[ActionTypes.GET_STAR_WARS_DETAILS_SUCCESS]: (state, action) => ({
		...state,
		star_wars_details: {
			...state.star_wars_details,
			response: action.payload, loading: false, hasError: false, error: {}
		}
	}),
	[ActionTypes.GET_STAR_WARS_DETAILS_ERROR]: (state, action) => ({
		...state,
		star_wars_details: {
			...state.star_wars_details,
			error: action.payload, loading: false, hasError: true, response: {}
		}
	}),
}, initialState);

export default reducer;