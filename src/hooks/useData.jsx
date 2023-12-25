import { useQuery } from "@tanstack/react-query";
import useReqLink from "./useReqLink";

const useData = () => {
    const getData = useReqLink();
    const { data: datas = [], refetch, isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const res = await getData.get('/datas');
            return res.data
        }
    })
    return [datas, refetch, isLoading]
};

export default useData;