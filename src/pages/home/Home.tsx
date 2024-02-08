import Hero from "./Hero/Hero";
import { Admin } from "../../layouts/Admin/Admin";
import { Company } from "./Sections/Company";

const Home = () => {
  return (
    <Admin>
      <Hero />
      <Company />
    </Admin>
  )
}

export default Home;
