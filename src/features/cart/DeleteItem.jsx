import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
import Button from "../../ui/Button"

function DeleteItem({id}) {
    console.log(id)
    const dispatch = useDispatch()
    return (
        <Button type="small" OnClick={() => dispatch(deleteItem(id))}>Delete</Button>

    )
}

export default DeleteItem
