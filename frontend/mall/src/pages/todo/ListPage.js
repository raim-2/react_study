import { useSearchParams } from "react-router-dom";

const ListPage = () => {

    const [queryParams] = useSearchParams();

    // parseInt는 문자열을 정수로 변환하는 함수이다. 이 함수는 문자열을 해석하고, 지정된 진수(기본적으로 10진수)로 변환한다.
    //쿼리스트링 : URL의 끝에 위치하며, 물음표(?)로 시작하고, 하나 이상의 키-값 쌍으로 구성, & (앰퍼샌드)로 구분
    // http://example.com/page?key1=value1&key2=value2
    // → 웹 애플리케이션에서 검색, 페이지 네이션, 필터링 및 정렬과 같은 다양한 기능을 구현할 때 자주 사용
    // → url에 데이터 직접포함해 간단하게 데이터 전달 및 가독성이 좋으나, 보안 문제나 길이제한이 있을 수 있다.

    // 쿼리스트링이 있는 경우 /todo/Iist?page=2&sizc=20 값으로 표현, 없을땐 아래의 1, 10값을 사용
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Page Component {page} --- {size}
            </div>
        </div>
    );
}

export default ListPage;