import { decrement, increment } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {

  //useSelector: React Reduxが提供するフックで、Reduxストアの状態にアクセスするための関数
  //Reduxストアにアクセスし、data (通常はカウンターの値) を取得
  const {data} = useAppSelector(state => state.counter);

  //useDispatch: React Reduxが提供するフックで、Reduxストアにアクションをディスパッチ (送信) するための関数 (dispatch) を取得します。
  //dispatch(): この関数にアクションオブジェクトを渡すことで(↓)、Reduxストアの状態を更新する処理が開始され
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">
        Contact page
      </Typography>
      <Typography variant="body1">
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} color="secondary">Increment</Button>
        <Button onClick={() => dispatch(increment(5))} color="primary">Increment by 5</Button>

      </ButtonGroup>
    </>

  )
}