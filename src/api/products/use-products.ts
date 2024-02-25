import { apiProducts } from '@/api';
import { useQuery } from '@tanstack/react-query';

const getProductsFn = async () => {
  const response = await apiProducts.get('');

  return response.data.products;
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsFn,
  });
}
