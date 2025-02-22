import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api'
});

//API リクエストに遅延を追加する
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi,
    extraOptions: object) => {
    api.dispatch(startLoading());
    await sleep(); // 1 秒間待機
    const result = await customBaseQuery(args, api, extraOptions); // 別の関数 (ここでは未定義) を呼び出す
    api.dispatch(stopLoading());
    if (result.error) {
        const { status, data } = result.error;
        console.log({ status, data }); // エラー情報をコンソールに出力
    }
    return result;
};  