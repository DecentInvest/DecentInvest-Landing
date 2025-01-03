"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutUsCards = () => {
    useEffect(() => {
        const elements = gsap.utils.toArray('.animate-left') as HTMLElement[];
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '-100%', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 100%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    useEffect(() => {
        const elements2 = gsap.utils.toArray('.animate-right') as HTMLElement[];
        elements2.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '100%', opacity: 0 },
                { 
                    x:0,
                    opacity:1,
                    duration:1,
                    ease:'power3.out',
                    scrollTrigger: {
                        trigger:element,
                        start: 'top 100%',
                        toggleActions: 'play none none none'
                    },
                }
            );
        })
    }, []);

    return (
        <>
            <div className="max-w-7xl flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">

                <div
                    className="relative animate-me w-full max-w-[550px] aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center animate-left"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                            <h2 className="text-white text-[22px] sm:text-[25px] lg:text-[28px] font-bold leading-none mt-8">
                                Marketplace for startups and investors
                            </h2>
                            <Image
                                src="/Bitcoin.svg"
                                alt="Marketplace illustration"
                                width={260}
                                height={260}
                                className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px]"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>

                <div
                    className="relative w-full max-w-[550px] aspect-[14/9] md:aspect-[14/19] rounded-[48px] overflow-hidden flex flex-col items-center row-span-2 animate-right"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                            <h2 className="text-white text-[18px] sm:text-[25px] md:text-[30px] font-bold leading-none mt-2">
                                All startups in one place for investors and all investors in one place for startups
                            </h2>
                            <Image
                                src="/startups.svg"
                                alt="Startups illustration"
                                width={600}
                                height={200}
                                className="ml-8 md:ml-16 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>

                <div
                    className="relative w-full max-w-[550px] aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center animate-left"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                            <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-16">
                                NFT for your startups
                            </h2>
                            <Image
                                src="/nfts.svg"
                                alt="NFT illustration"
                                width={280}
                                height={280}
                                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[200px] md:h-[250px] lg:w-[260px] lg:h-[260px] mb-8"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>


                <div
                    className="relative w-full col-span-full max-w-[550px] md:max-w-[1150px] aspect-[14/9] md:aspect-[32/9] h-[240px] sm:h-[350px] md:h-[400px] rounded-[48px] overflow-hidden animate-right"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col md:flex-row  items-center justify-center text-center px-6">
                            <h2 className="text-white text-[min(4vw,38px)] font-bold leading-tight mb-4 mt-4 sm:mt-8">
                                Find customised investors and startups according to your needs
                            </h2>
                            <Image
                                src="/people.svg"
                                alt="Customised search illustration"
                                width={600}
                                height={200}
                                className="w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>


                <div
                    className="relative w-full max-w-[550px] aspect-[14/9] 
                  sm:aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center animate-left"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                            <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-8">
                                Easy transactions
                            </h2>
                            <Image
                                src="/transactions.svg"
                                alt="Transactions illustration"
                                width={280}
                                height={280}
                                className="w-[150px] h-[150px] sm:w-[260px] sm:h-[260px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>

                <div
                    className="relative w-full max-w-[550px] aspect-[14/9] 
                  sm:aspect-[14/9] rounded-[48px] overflow-hidden flex flex-col items-center  animate-right"
                    style={{
                        background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                        padding: '2px',
                    }}
                >
                    <div className="absolute inset-[2px] rounded-[46px] bg-black overflow-hidden">
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
                            <h2 className="text-white text-[22px] sm:text-[28px] font-bold leading-none mt-8">
                                Grants and investments
                            </h2>
                            <Image
                                src="/grants.svg"
                                alt="Grants illustration"
                                width={280}
                                height={280}
                                className="w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] md:w-[190px] md:h-[190px] lg:w-[260px] lg:h-[260px]"
                            />
                        </div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsCards;