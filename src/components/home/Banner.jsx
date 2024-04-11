import React from "react";

const Banner = () => {
    return (
        <div className="w-full bg-green py-[100px] px-5 box-border">
            <div className="w-[1440px] max-w-full mx-auto box-border">
                <div>
                    <h1 className="text-4xl font-medium text-darkBlack mb-5">Learn anywhere, Learn quickly.</h1>
                    <div className="text-white text-sm leading-6 max-w-[450px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    <div className="flex gap-x-3 mt-7">
                        <button className="text-base h-10 text-white bg-darkBlack hover:bg-black px-6 rounded">About Us</button>
                        <button className="text-base h-10 text-white bg-black hover:bg-darkBlack px-6 rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;