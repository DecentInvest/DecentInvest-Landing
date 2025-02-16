import React from 'react'
import Image from 'next/image';
import { GradientCard } from '../componenets/gradientCard';
import { ProfileCard } from '../componenets/profileCard';
import NftSection from '../componenets/nftSection';

const Page = () => {
    const gradientStyle = "linear-gradient(180deg, #300C3B 0%, #48114C 50%, #B3278C 100%)";
    const values = [1, 0, 0, 0, 0,];
    const cardData = [
        { title: "Completed", value: "0.45" },
        { title: "In Progress", value: "0.25" }
    ];

    return (
        <div className="pt-[15vh] min-h-screen bg-black">

            <div className="flex gap-8 justify-center w-full p-8 flex-col md:flex-row items-center">
                <ProfileCard className="aspect-[35/39] max-w-full h-[100px] sm:h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/akg.jpg"
                            alt="Profile Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </ProfileCard>

                <GradientCard bgColor="#1A1A1D" className="aspect-[45/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8">
                        <p className="text-[45px] font-bold top-0 mb-8">Anushka Gupta</p>
                        <p className="text-[30px] mb-8">Company: DecentInvest</p>
                        <p className="text-[30px]">Believe in either a home run or running back home.</p>
                    </div>
                </GradientCard>
            </div>

            <div className="w-full min-h-screen mt-8 bg-[url('/Vector.svg')] bg-cover bg-center flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#1A1A1D] bg-opacity-50 flex flex-col items-center justify-center gap-8">

                    <div className="bg-white p-8 text-[30px] h-[238px] w-[80%] rounded-2xl">
                        <p className='text-black font-bold'>Amount Invested (in $)</p>
                        <div className="w-full h-full flex gap-4">
                            {values.map((num, i) => (
                                <GradientCard key={i} bgColor={gradientStyle} className="text-white flex items-center justify-center w-[110px] h-[110px]">
                                    <h1 className="text-[70px] text-center">{num}</h1>
                                </GradientCard>
                            ))}
                        </div>
                    </div>

                    {/* Equity Gained */}
                    <div className="flex justify-center w-full">
                        <div className="w-[80%] flex flex-col items-center">
                            <GradientCard bgColor="#1A1A1D" className="w-full text-white flex flex-col items-center justify-center h-[150px] sm:h-[300px]">
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <h2 className="text-white w-[80%] text-[35px]">Equity Gained</h2>
                                    <div className="flex gap-8 justify-center w-full mt-4">
                                        {cardData.map((item, i) => (
                                            <GradientCard key={i}
                                                bgColor="linear-gradient(180deg, rgba(48, 12, 59, 0.7) 0%, rgba(72, 17, 76, 0.7) 50%, rgba(179, 39, 140, 0.7) 100%)"
                                                className="text-white flex flex-col items-center justify-center w-[40%] h-[150px]">
                                                <h1 className="text-[40px] text-center font-bold">{item.title}</h1>
                                                <p className="text-[40px] text-center mt-4">{item.value}</p>
                                            </GradientCard>
                                        ))}
                                    </div>
                                </div>
                            </GradientCard>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start mt-16">
                <h1 className='text-white text-[50px] w-[80%]'>Startups Invested In:</h1>
                <NftSection background='black' />
            </div>
        </div>
    )
}

export default Page;
