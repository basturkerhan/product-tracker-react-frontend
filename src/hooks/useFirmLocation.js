import { useSelector } from "react-redux"

export const useFirmLocation = () => {
    const loc = useSelector(state => state.firm.firmLocation);
    return loc;
}