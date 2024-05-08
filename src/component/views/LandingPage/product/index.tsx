import Card from "@/component/shared-component/Card/Card";
import Image from "next/image";
import Eat1 from "@/assets/image/biarapa.png";
import Eat2 from "@/assets/image/apalahhh.png";
import Eat3 from "@/assets/image/awaa.png";
import Eat4 from "@/assets/image/astagaaa.png";
import Eat5 from "@/assets/image/ywdhpng.png";
import Eat6 from "@/assets/image/jajaaa.png"; 

const HomeProduct = () => {
  return (
    <section
      className="mb-20 flex justify-center md:px-16 px-6 xl:px-28 2xl:px-80 items-center w-full"
      id="menu"
    >
      <div className="mt-36 md:mt-28 h-full">
        <div className="space-y-3 mb-10 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Featured Menus</h2>
          <hr className="border-t-4 border-t-red-700 w-32"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <Card
            label="Order Now"
            type="button"
            title="Laklak"
            desc="Laklak is a traditional Balinese cake made from a blend of rice flour and grated coconut, steamed in molds. It's commonly served with palm sugar syrup or coconut milk"
          >
            <Image src={Eat1} alt="food" className="w-full h-64 object-cover" />
          </Card>
          <Card
            label="Order Now"
            type="button"
            title="Jaje Bali"
            desc="Jaje Bali are traditional Balinese snacks and sweets made from local ingredients like rice flour, coconut, and palm sugar. They often have a sweet flavor and include treats like klepon and jaja laklak."
          >
            <Image src={Eat2} alt="food" className="w-full h-64 object-cover" />
          </Card>
          <Card
            label="Order Now"
            type="button"
            title="Jukut Urap"
            desc="Jukut urap is a vibrant Balinese salad known for its refreshing blend of vegetables, fragrant spices, and coconut, making it a delightful accompaniment to traditional Balinese meals."
          >
            <Image src={Eat3} alt="food" className="w-full h-64 object-cover" />
          </Card>
          <Card
            label="Order Now"
            type="button"
            title="Kue Putu Ayu"
            desc="Kue putu ayu is a traditional Indonesian cake originating from Java. It's made from a mixture of rice flour, grated coconut, palm sugar, and coconut milk, which is then steamed in banana leaf molds. "
          >
            <Image src={Eat4} alt="food" className="w-full h-64 object-cover" />
          </Card>
          <Card
            label="Order Now"
            type="button"
            title="Kue Ku"
            desc="Kue ku or kue ku ketan is a traditional Indonesian cake made from a mixture of glutinous rice flour, palm sugar, and coconut milk. These cakes are typically small and round. "
          >
            <Image src={Eat5} alt="food" className="w-full h-64 object-cover" />
          </Card>
          <Card
            label="Order Now"
            type="button"
            title="Kue Apem"
            desc="Kue Apem is a popular traditional Indonesian cake, especially in Java and Sumatra. This cake is made from a mixture of rice flour, palm sugar, yeast, and coconut milk."
          >
            <Image src={Eat6} alt="food" className="w-full h-64 object-cover" />
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeProduct;
