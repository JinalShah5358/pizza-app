import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQty, increaseItemQty } from "./cartSlice"

function UpdateItemQty({id,currentQty}) {
    const dispatch = useDispatch()
    return (
        <div className="flex item-center  gap-1 md:gap-3">
            <Button type='round' OnClick={()=>dispatch(decreaseItemQty(id))}>-</Button>
            <span className="text-sm font-medium">{currentQty}</span>
            <Button type='round' OnClick={()=>dispatch(increaseItemQty(id))}>+</Button>
        </div>
    )
}

export default UpdateItemQty
