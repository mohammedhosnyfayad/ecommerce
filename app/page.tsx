import { getallprodcut } from "@/apis/getallprocut";
import Slider from "./_Files/Slider";
import Designallprodcut from "./Desins/designallprodcut";

export default async function home() {

  

  
  const productImages = [
  "/assets/slid1.jpeg",
  "/assets/slid2.jpeg",
  "/assets/slid3.jpeg",
  ];

  return (
    <>
        <section className="w-full">
      <Slider  pagelist={productImages} />
    </section>
    <div>

      <Designallprodcut/>
    </div>
    
    </>
  );
}