import { useNavigate } from "react-router-dom";

const ModifyPage = ({tno}) => {

    const navigate = useNavigate()

    const moveToRead = () => {
        // `템플릿리터럴 - ${}는 변수사용시`
        navigate({pathname: `/todo/read/${tno}`},[navigate])
    }

    const moveToList = () => {
        navigate({pathname: `/todo/List`},[navigate])
    }

    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
            <div>
                <button onClick={() => moveToRead(33)}>Test Modify</button>
                <div className="mx-1"></div>
                <button onClick={() => moveToList()}>Test List</button>
            </div>
        </div>
    );
}

export default ModifyPage;