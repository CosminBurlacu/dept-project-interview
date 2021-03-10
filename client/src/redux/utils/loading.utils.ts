interface ILoading {
    type: string;
    loading: boolean;
}
export const loading = ({type, loading}: ILoading) => {
    return {
        type,
        loading,
    }
}