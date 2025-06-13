import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="container mx-auto flex font-[family-name:var(--font-geist-sans)] ">
                <main className="flex w-full ">
                    {/* Left side */}
                    <div className="basis-[35%] ">
                        <div className="pr-10">
                            <Image className="mt-20 mb-15" src="img/logo-alb.svg" alt="Naturevo logo" width={250} height={50} priority />
                            <h1 className="text-4xl font-normal text-center sm:text-left">
                                Peste două decenii de <br />
                                <span className="font-bold"> agricultură inteligentă în România.</span>
                            </h1>
                        </div>
                        <div className="flex flex-row justify-evenly py-10 bg-[#fff] mt-20">
                            <div className="flex flex-col items-center justify-center">
                                <Image className="" src="/img/fertilizers.png" alt="Naturevo logo" width={70} height={70} priority />
                                <p className="text-sm text-center text-[#2C6A36] mt-4">
                                    Produsul <br /> săptămânii
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Image className="" src="/img/microscops.png" alt="Naturevo logo" width={45} height={70} priority />
                                <p className="text-sm text-center text-[#2C6A36] mt-4">
                                    Produsul <br /> săptămânii
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Image className="" src="/img/catalogue.png" alt="Naturevo logo" width={70} height={70} priority />
                                <p className="text-sm text-center text-[#2C6A36] mt-4">
                                    Produsul <br /> săptămânii
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="basis-[65%] flex-row bg-red-500 min-h-[100%] w-[100%]">
                        <div className="flex w-full h-full">
                            <div
                                style={{ backgroundImage: "url('/img/slide-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                                className="h-full flex-1 bg-blue-500 transition-all duration-300 hover:grow-4 hover:shadow-lg"
                            >
                                box 1
                            </div>
                            <div
                                style={{ backgroundImage: "url('/img/slide-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                                className="h-full flex-1 bg-green-500 transition-all duration-300 hover:grow-4 hover:shadow-lg"
                            >
                                box 2
                            </div>
                            <div
                                style={{ backgroundImage: "url('/img/slide-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
                                className="h-full flex-1 bg-yellow-500 transition-all duration-300 hover:grow-4 hover:shadow-lg"
                            >
                                box 3
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
