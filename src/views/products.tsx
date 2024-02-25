import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { ProductList } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '@/api';

export function Products() {
  const navigate = useNavigate();
  const products = useProducts();

  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2 className="mb-4">Product list</h2>
      <div>
        {products.isLoading && (
          <div className="py-2 text-teal-900 font-bold">Loading...</div>
        )}

        {products.error instanceof Error && <div>{products.error.message}</div>}

        {products.isSuccess && (
          <div>
            <ProductList products={products.data} />
          </div>
        )}
      </div>
    </div>
  );
}
