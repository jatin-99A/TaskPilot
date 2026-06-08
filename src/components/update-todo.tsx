import { PopUpContainerContext } from "../state/pop-up-container/pop-up-container-context";
import PopUpContainer from "./pop-up-container";
import AddTodoForm from "./register-todo";
import * as React from "react";


const UpdateTodoForm = ({ todoId, isUpdateForm }: { todoId: string, isUpdateForm: boolean }) => {
    const { setIsPopUpContainerOpen } = React.useContext(PopUpContainerContext);
    React.useEffect(() => {
        setIsPopUpContainerOpen(true);

        return () => {
            setIsPopUpContainerOpen(false);
        }
    }, [])

    return (
        <PopUpContainer>
            <AddTodoForm todoId={todoId} isUpdateForm={isUpdateForm} />
        </PopUpContainer>
    )
}

export default UpdateTodoForm