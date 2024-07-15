// a태그 - 로딩 Link 이용시 로딩없이 페이지 이동 가능
// import { Link } from "react-router-dom";

// const MainPage = () => {
//     return (
//         <div>
//             <div className="flex">
//                 <Link to={'/about'}>About</Link>
//             </div>
//             <div className="text-3xl">Main Page</div>
//         </div>
//     );
// }

// export default MainPage;

import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
    return (
        <BasicLayout>
            <div className="text-3xl">Main Page</div>
        </BasicLayout>
    );
}

export default MainPage;
