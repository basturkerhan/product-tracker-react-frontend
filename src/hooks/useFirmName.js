import { useSelector } from "react-redux"

export const useFirmName = () => {
    const name = useSelector(state => state.firm.firmName);
    return name;
}