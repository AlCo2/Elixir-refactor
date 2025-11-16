import NavbarLayout from "@/layouts/navbar-layout";



export default function Index() {
    return (
        <NavbarLayout>
            <div className="flex flex-wrap items-center justify-center px-4">
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
                        <button className="text-white py-2 px-4 bg-black rounded-sm">Shop Now</button>
                    </div>
                </div>
                <div className="max-sm:hidden">
                    <img src="/assets/intro.webp" width={450} alt="" />
                </div>
            </div>
        </NavbarLayout>
    )
}