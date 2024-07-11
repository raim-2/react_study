import { Suspense, lazy } from "react";
//리다이렉션(Redirection)은 웹 개발에서 사용자가 요청한 URL을 다른 URL로 자동으로 이동시키는 것을 의미
//이때 사용되는 게 Navigate의 replace속성
import { Navigate } from "react-router-dom";

const todoRouter = () => {
    const Loading = <div>Loading....</div>
    const TodoList = lazy(() => import("../pages/todo/ListPage"))
    const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
    const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
    const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))

    return [
        {
            path:"list",
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {
            path:"",
            //특정 경로 진입시 → 여기선 /todo로 진입시 /todo/list로 경로 호출
            element: <Navigate replace to="list"></Navigate>
        },
        {
            // : 는 경로 일부를 변수를 사용하기 위한 설정 + tno는 식별자(식별자명은 달라져도 상관없음)
            path:"read/:tno",
            element: <Suspense fallback={Loading}><TodoRead/></Suspense>
        },
        {
            path:"Add",
            element: <Suspense fallback={Loading}><TodoAdd/></Suspense>
        },
        {
            path:"Modify/:tno",
            element: <Suspense fallback={Loading}><TodoModify/></Suspense>
        },
    ]
}

export default todoRouter;