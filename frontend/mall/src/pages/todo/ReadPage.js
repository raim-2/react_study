//useParam은 경로 자체의 값을 사용하고 ? 뒤에 나오는 쿼리스트링은 useSearchParams()를 이용할 수 있다.
//조회 → 수정 삭제 이동은 번호에 따라 동적으로 처리해야 되므로, useParams()로 찾은 번호를 사용해야 함useSearchParams
import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {

    const {tno} = useParams();

    const navigate = useNavigate();

    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({page, size}).toString()

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }, [tno, page, size])

    const moveToList = useCallback(() => {
        navigate({
            pathname: `/todo/list`,
            search: queryStr
        }, [page, size])
    })
    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component {tno}

            <div>
            <button onClick={() => moveToModify(33)}>Test Modify</button>
            <button onClick={() => moveToList()}>Test List</button>
            </div>
        </div>
    );
}

export default ReadPage;