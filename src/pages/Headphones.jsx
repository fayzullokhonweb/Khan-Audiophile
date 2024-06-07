// components
import { Featured, Footer, ProductsList } from "../components";

// utils
import { customFetch } from "../utils";

export const loader = async () => {
  const request = await customFetch(" ");
  const products = request.data.data;
  return { products };
};

function Headphones() {
  return (
    <div>
      <div
        style={{
          textTransform: "uppercase",
          backgroundColor: "#000",
          paddingBottom: "97px",
          paddingTop: "98px",
          textAlign: "center",
          marginBottom: "160px",
        }}
      >
        <h2 style={{ color: "#fff" }}>headphones</h2>
      </div>
      <ProductsList order={3} category="headphones" />
      <Featured />
      <Footer />
    </div>
  );
}

export default Headphones;
