import { useSelector } from "react-redux"

export const usePTrackerContract = () => {
    const contract = useSelector(state => state.contracts.pTracker);
    return contract;
}