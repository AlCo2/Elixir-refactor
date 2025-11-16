import NavbarLayout from "@/layouts/navbar-layout";
import ServiceIntro from "./ServiceIntro";
import { Box, Check, ShoppingCart } from "lucide-react";



export default function Index() {
    return (
        <NavbarLayout>
            <div className="flex flex-wrap items-center justify-center px-4 my-4">
                <div className="sm:w-1/2 space-y-10">
                    <div>
                        <h1 className="font-Italiana font-bold text-3xl sm:text-5xl max-xs:text-xl text-black">Welcome to Elixir Shop <br/> online store</h1>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <p className="font-Poppins font-bold mb-1">220+</p>
                            <p className="font-Poppins opacity-60 font-semibold text-sm">Total Products</p>
                        </div>
                        <div>
                            <p className="font-Poppins font-bold mb-1">2+</p>
                            <p className="font-Poppins opacity-60 font-semibold text-sm">Years on the market</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-white py-2 px-4 bg-black rounded-md">Shop Now</button>
                    </div>
                </div>
                <div className="max-sm:hidden">
                    <img src="/assets/intro.webp" width={450} alt="" />
                </div>
            </div>
            <div className="flex justify-center px-20 bg-black text-white py-10">
                <ServiceIntro icon={<Check className="size-10" />} title='Original Authentie' description='it is our policy to provide original authentic fragrances to our costumers and community' />
                <ServiceIntro icon={<Box className="size-10" />} title='Brand New Product' description='We will not provide any second fragrances all our fragrances are sent directly from the companies' />
                <ServiceIntro icon={<ShoppingCart className="size-10" />} title='Fast Shipping' description='You have the right to use our fragrances as fast as possible and we will make sure you have your right' />
            </div>
             <div className="text-center py-8">
                <h1 className="text-5xl font-italiana font-bold max-sm:text-4xl max-xs:text-3xl">Recommendation</h1>
                <div className="flex justify-center text-center">
                    <p className="font-Opensans w-80">These fragrances are the best selling ones. it is designed precisly by the designers.</p>
                </div>
            </div>
        </NavbarLayout>
    )
}