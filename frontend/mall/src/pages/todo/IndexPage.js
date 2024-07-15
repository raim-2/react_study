// Todo 대시보드 화면
// import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

// const indexPage = () => {
//     return (
//         <BasicLayout>
//             <div className="w-full flex m-2 p-2">
//                 <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">
//                     <Link to={'/todo/list'}>LIST</Link>
//                 </div>
//                 <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">ADD</div>
//             </div>
//             <div className="flex flex-wrap w-full">
//             <Outlet/>
//             </div>
//         </BasicLayout>
//     );
// }

// export default indexPage;

import { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// 라우터 이용시 고정 링크로 이동하지만, 대부분은 동적으로 데이터 처리해 이동하는 경우가 많음
// → Navigate랑 Link 대신 useNavigate()를 이용해서 해결한다.
const IndexPage = () => {
    
    const navigate = useNavigate();
        
    const handleClickList = useCallback(() => {
        navigate({pathname:'list'})
    }, [navigate])

    const handleClickAdd = useCallback(() => {
        navigate({pathname:'add'})
    }, [navigate])

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickList}>
                    List
                </div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickAdd}>ADD</div>
            </div>
            <div className="flex flex-wrap w-full">
            <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;