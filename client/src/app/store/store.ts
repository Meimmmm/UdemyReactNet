import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogAPI";
import { uiSlice } from "../layout/uiSlice";

//store.tsの役割
//1.createStore関数 (またはRedux ToolkitのconfigureStore関数) を使って、
//  Reduxストアのインスタンスを作成
//2.アプリケーション全体の状態を更新するために使用するルートリデューサーを定義
//3.必要に応じて、Reduxミドルウェア (例えば、Redux ThunkやRedux Saga) を設定
//4.作成したReduxストアをアプリケーション全体で使用できるようにエクスポート


export function configureTheStore() {
  return legacy_createStore(counterReducer);    //ルートリデューサーを
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMidleware) => 
    getDefaultMidleware().concat(catalogApi.middleware) //RTK Query が Redux ストアと連携するために必要なミドルウェア
});

//https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux/learn/lecture/47616123#overview
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//Redux機能をTypeScriptに対応させる
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()