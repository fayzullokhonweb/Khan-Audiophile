// components
import { useLoaderData } from "react-router-dom";
import { Featured, Footer, ProductsList } from "../components";

// utils
import { customFetch } from "../utils";

export const loader = async () => {
  const request = await customFetch(" ");
  const products = request.data.data;
  return { products };
};

function Speakers() {
  const { products } = useLoaderData();
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
        <h2 style={{ color: "#fff" }}>speakers</h2>
      </div>
      <ProductsList order={1} category="speakers" />
      <Featured />
      <Footer />
    </div>
  );
}

export default Speakers;
