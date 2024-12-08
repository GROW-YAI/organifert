import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../components/constants";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchProduct = () => {
    try {
      setLoading(true);
      console.log("id-->", id);
      const p = PRODUCTS.find((product) => Number(product.id) === Number(id));
      if (p) {
        setProduct(p);
      } else {
        console.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1>Product loading...</h1>;
  }

  if (!product) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      {/* Container */}
      <div className="container max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="text-red-600 hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link to="/crop-nutrition" className="text-red-600 hover:underline">
            Crop Nutrition
          </Link>{" "}
          &gt;{" "}
          <Link to="/fertilisers" className="text-red-600 hover:underline">
            Fertilizers
          </Link>{" "}
          &gt; <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Header */}
        <div className="flex flex-wrap items-center bg-white p-6 rounded-lg shadow">
          {/* Product Information */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700">{product.description}</p>
          </div>
          {/* Product Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-auto object-contain"
            />
          </div>
        </div>

        {/* Nutrients Section */}
        {product.nutrients?.length > 0 && (
          <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Nutrients
            </h2>
            <div className="flex space-x-4">
              {product.nutrients.map((nutrient) => (
                <div
                  key={nutrient.symbol}
                  className="bg-white text-center p-4 shadow-md rounded-sm"
                >
                  <div className="text-2xl font-bold text-red-600">
                    {nutrient.symbol}
                  </div>
                  <div className="text-gray-600 text-sm">{nutrient.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {product.relatedProducts?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {product.relatedProducts.length} Related Organic Fertilizers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((related) => (
                <div
                  key={related.id}
                  className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-48 object-contain bg-gray-100 p-4"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {related.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
