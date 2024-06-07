// react router dom
import { useLoaderData, Link } from "react-router-dom";

function ProductsList({ category, order }) {
  const { products } = useLoaderData();

  // Reverse the products array
  const reversedProducts = [...products].reverse();

  return (
    <ul
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "200px",
        alignItems: "center",
        gap: "160px",
      }}
    >
      {reversedProducts.map((product, index) => {
        if (product.category === category) {
          return (
            <li
              className="flex-container"
              key={product.slug} // Better to use a unique key like product.slug
              style={{
                display: "flex",
                alignItems: "center",
                gap: "125px",
              }}
            >
              <div style={{ order: index === 2 ? "1" : "2" }}>
                <img
                  style={{
                    width: "540px",
                    height: "560px",
                    borderRadius: "8px",
                  }}
                  src={product.categoryImage.desktop}
                  alt={`${product.category} image`}
                />
              </div>
              <div style={{ order: index === order ? "1" : "2" }}>
                <h5
                  style={{
                    color: "#D87D4A",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontWeight: "400",
                    marginBottom: "16px",
                  }}
                >
                  new product
                </h5>
                <h2
                  style={{ textTransform: "uppercase", marginBottom: "32px" }}
                >
                  {product.slug}
                </h2>
                <p style={{ marginBottom: "40px" }}>{product.description}</p>
                <Link to={`/product/${product.slug}`} className="btn-primary">
                  See Product
                </Link>
              </div>
            </li>
          );
        } else {
          return null; // Add return null to avoid warnings
        }
      })}
    </ul>
  );
}

export default ProductsList;
