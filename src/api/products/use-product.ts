import { useParams } from 'react-router-dom';
import { apiProducts } from '@/api';
import { useQuery } from '@tanstack/react-query';

export function useProduct() {
  const { id } = useParams();

  const getProductFn = async () => {
    const response = await apiProducts.get(`${id}`);
    return response.data;
  };

  return useQuery({
    queryKey: ['product', id],
    queryFn: getProductFn,
    retry: 1,
  });
}
