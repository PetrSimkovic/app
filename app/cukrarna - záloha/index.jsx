import Dessert from "../cukrarna/dessert";
import Footer from "../cukrarna/footer";
import Header from "../cukrarna/header";
import Hero from "../cukrarna/hero";

export const meta = () => {
  return [
    { title: "Cukrárna" },
    { name: "description", content: "Vítejte v naší cukrárně!" },
  ];
};

export default function Index() {

  let List ={
    title="Čokoládový dort"
    price="120 Kč"
    img="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg"
  }
  return (
    <div>
      <Header />
      <Hero />

      <Dessert
        title="Čokoládový dort"
        price="120 Kč"
        img="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg"
      />

      <Dessert
        title="Ovocný koláč"
        price="90 Kč"
        img="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/rainbow_cake_20402_16x9.jpg"
      />

      <Footer />
    </div>
  );
}
