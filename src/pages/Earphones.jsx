// components
import { Featured, Footer, ProductsList } from "../components";

// utils
import { customFetch } from "../utils";

export const loader = async () => {
  const request = await customFetch(" ");
  const products = request.data.data;
  return { products };
};

function Earphones() {
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
        <h2 style={{ color: "#fff" }}>Earphones</h2>
      </div>
      <ProductsList order={1} category="earphones" />
      <Featured />
      <Footer />
    </div>
  );
}

export default Earphones;
