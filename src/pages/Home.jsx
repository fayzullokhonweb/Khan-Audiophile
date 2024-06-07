
// components
import { Hero, Featured, Card, Footer } from "../components";

// react router dom
import { useLoaderData } from "react-router-dom";

// utils
import { customFetch } from "../utils";

export const loader = async () => {
  const request = await customFetch(" ");
  const products = request.data.data;
  return { products };
};

function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
