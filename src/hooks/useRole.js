import { useSelector } from "react-redux"

export const useRole = () => {
    const role = useSelector(state => state.data.userRole);
    return role;
}