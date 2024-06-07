import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils";
import { Details, Featured, Footer } from "../components";

function SingleProduct() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await customFetch(`?slug=${slug}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    others,
    gallery,
    categoryImage,
    description,
    features,
    price,
    includes,
  } = product[0];


  return (
    <div>
      {product && (
        <Details
          gallery={gallery}
          categoryImage={categoryImage}
          slug={slug}
          description={description}
          features={features}
          price={price}
          includes={includes}
          others={others}
        />
      )}
      <Featured />
      <Footer />
    </div>
  );
}

export default SingleProduct;
