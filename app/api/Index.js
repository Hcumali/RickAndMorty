import * as request from './request'
import axios from 'axios'

var axiosInstance = axios.create();

export default class index {
    static getFirstPageEpisodes = async () => {
        const headers = {
          'content-type': 'application/json'
        };

        const params = {
          page: 1
        };
    
        return axiosInstance({
            method: 'GET',
            headers,
            params,
            url: request.episodePagedList,
          })
        .then((response) => response.data)
        .catch((error) => console.log("getFirstPageEpisodes err: ", err));
      };

      static requestWithURL = async (url) => {
        const headers = {
            'content-type': 'application/json'
        };

        return axiosInstance({
            method: 'GET',
            headers,
            url: url,
          })
        .then((response) => response.data)
        .catch((error) => console.log("requestWithURL err: ", err));
      }
}