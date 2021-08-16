import API from '@shared/httpService/config';
import URLS from "@shared/constants/urls";

/**
 * get star wars list
 * 
 * @returns api response
 */
export const _getStarWarsList = () => {
    return API.get(URLS.STAR_WARS_LIST);
};

/**
 * get star wars character details
 * @param {Number} id star wars character ID 
 * @returns 
 */
export const _getStarWarsDetails = (id) => {
    return API.get(`${URLS.STAR_WARS_LIST}${id}/`)
};