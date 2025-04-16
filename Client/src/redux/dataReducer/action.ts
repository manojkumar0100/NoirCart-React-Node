import * as types from "./actionType";
import axios, { AxiosResponse } from "axios";
import { DataPayload } from "../../constants";
export const getDataReq = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export const getDataSuccess = (pa: DataPayload) => {
  return {
    type: types.GET_DATA_SUCC,
    payload: pa,
  };
};
export const getDataError = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};
export const getDataReqById = () => {
  return {
    type: types.GET_DATA_REQ_BY_ID,
  };
};

export const getDataSuccessById = (pa: DataPayload) => {
  return {
    type: types.GET_DATA_SUCC_BY_ID,
    payload: pa,
  };
};
export const getDataErrorById = () => {
  return {
    type: types.GET_DATA_ERR_BY_ID,
  };
};

const getCategoryData =
  (category: string, p: string | undefined) => (dispatch: any) => {
    dispatch(getDataReq());
    return axios.get(
      `http://localhost:8080/products/${category}`,
      {
        params: {
          sortby: p,
        },
      }
    );
  };

  const getDataByIdApi = (articleCode: string) => (dispatch: any) => {
    console.log(articleCode);
    dispatch(getDataReqById());
  
    const url = `http://localhost:8080/products/mens/${articleCode}`;
  
    return axios
      .get(url) // Use axios.get to fetch data
      .then((response) => {
        dispatch(getDataSuccessById(response.data.data)); // Dispatch success action with product data
        return response.data; // Return data for further use if needed
      })
      .catch((error) => {
        console.error(error);
        dispatch(getDataErrorById()); // Dispatch error action
      });
  };
const getDataById = (id: string) => (dispatch: any) => {
  dispatch(getDataReqById());
  return axios.get(``);
};
export { getCategoryData, getDataByIdApi };
