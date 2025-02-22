import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
};

export const uiSlice = createSlice({
    name: 'ui',         //スライスの名前。この名前は、アクションタイプや reducer の名前空間として使用
    initialState: {
      isLoading: false,
      darkMode: getInitialDarkMode()
    },
    reducers: {         //Redux の reducer を定義するオブジェクト。reducer は、アクションに応じて状態を更新する関数
      startLoading: (state) => {
        state.isLoading = true;
      },
      stopLoading: (state) => {
        state.isLoading = false;
      },
      setDarkMode: (state) => {
        localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
        state.darkMode = ! state.darkMode
      }
    }
  });

  export const {startLoading, stopLoading, setDarkMode} = uiSlice.actions;