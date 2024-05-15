import { Description } from "app/presentation/home/components/Description";
import { Hero } from "app/presentation/home/components/Hero";
import { MainProducts } from "app/presentation/home/components/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
