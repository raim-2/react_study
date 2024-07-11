// import { createBrowserRouter } from "react-router-dom";
// 필요 순간까지 컴포넌트를 메모리상으로 올리지 않기 위한 지연로딩위해 사용
// - 리액트는 처음에 필요한 모든 컴포넌트를 로딩해 초기 실행이 오래걸린다.→ 이를 해결하기 위해 Suspense와 Lazy를 사용해 분할로딩함 : 코드분할
import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

const root = createBrowserRouter([

    {
        path:"",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:"about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path:"todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        //아래의 경우 children 속성을 사용해 중첩라우팅 설정이 가능하나 페이지가 많아지면 root.js가 복잡해지므로
        // → 별도의 함수에서 children 속성값에 해당하는 설정을 반환하는 방식이 더 수월
        // children : [
        //     {
        //         path:"list",
        //         element: <Suspense fallback={Loading}><TodoList/></Suspense>
        //     }
        // ]
        children: todoRouter(),
    }
])

export default root;