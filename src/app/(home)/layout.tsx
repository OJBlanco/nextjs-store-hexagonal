import { Description } from "app/presentation/home/components/Description";
import { Hero } from "app/presentation/home/components/Hero";


export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}