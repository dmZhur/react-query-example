import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ProductItem } from '@/components';
import { useProduct } from '@/api';

export function ProductDetails() {
  const navigate = useNavigate();
  const product = useProduct();

  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2 className="mb-4">Product details</h2>
      <div>
        {product.isLoading && <div>Loading...</div>}

        {product.error instanceof Error && <div>{product.error.message}</div>}

        {product.data && (
          <ProductItem
            product={product.data}
          />
        )}
      </div>
    </div>
  );
}
