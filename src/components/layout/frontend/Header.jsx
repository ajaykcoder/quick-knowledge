import React,{useState} from "react";

const Header = () => {
    const isLogin = false;
    const userImage = false;
    const [darkMode, setDarkmode] = useState(false);
    const handleDarkMode = () => (
        setDarkmode(!darkMode)
    )
    return (
        <div className="w-full bg-white py-6 px-5 box-border">
            <div className="w-[1440px] max-w-full mx-auto box-border flex gap-x-4 items-center justify-between">
                <div className="w-60">
                    <a href="/" className="text-2xl text-green">Quick Knowledge</a>
                </div>
                <ul className="flex gap-x-6 items-center">
                    <li><a href="/" className="text-base text-text hover:text-green">Home</a></li>
                    <li><a href="/" className="text-base text-text hover:text-green">About</a></li>
                    <li><a href="/" className="text-base text-text hover:text-green">Blog</a></li>
                    <li><a href="/" className="text-base text-text hover:text-green">Contact</a></li>
                </ul>
                <div className="w-60 flex gap-3 justify-end">
                    {isLogin ? (
                        <div className="flex items-center gap-x-3">
                            {userImage ? (
                                <img src="/assets/user.jpeg" className="flex w-[38px] h-[38px] object-cover overflow-hidden rounded-full" alt="Ajay Kumar"/>
                            ) : (
                                <svg viewBox="0 0 53 53" width="38" height="38"><path fill="#E7ECED" d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 00-1.269.903A26.377 26.377 0 0026.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 00-1.394-.934l-8.467-4.233a3.229 3.229 0 01-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 002.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 00-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 01-1.684 2.833z"></path><path fill="#556080" d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 011.257-.894l7.907-4.313a3.23 3.23 0 001.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 01-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 01-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 011.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"></path></svg>
                            )}
                            <div>
                                <div className="text-base text-green">Ajay Kumar</div>
                                <div className="text-sm text-text">Admin</div>
                            </div>
                        </div>
                    ) : (
                        <button className="text-base h-10 text-white bg-green hover:bg-darkGreen px-6 rounded">Login</button>
                    )}
                    <button onClick={handleDarkMode} className="text-base h-10 w-10 text-white bg-green hover:bg-darkGreen rounded flex items-center justify-center gap-x-1">
                        {darkMode ? (
                            <svg width="18" height="18" className="fill-white shrink-0" viewBox="0 0 302.4 302.4"><path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-53.6-46c5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4zm85.2 29.2l22-22c4-4 4-10.4 0-14.4s-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10 4 14.4 0zm55.6 60h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zm-56 80.8c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4l-22-22zm-84.8 29.2c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM66 221.6l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4-3.6-4-10-4-14.4 0zm-14.4-70.4c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.8 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4zM66 80.8c4 4 10.4 4 14.4 0s4-10.4 0-14.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22z"></path></svg>
                        ) : (
                            <svg width="18" height="18" className="fill-white shrink-0" viewBox="0 0 32 32"><path d="M30.706 19.721a1 1 0 00-1.042-.234A13.423 13.423 0 0112.513 2.335a1 1 0 00-1.276-1.278A15.214 15.214 0 005.51 4.68a15.422 15.422 0 0021.81 21.81 15.214 15.214 0 003.623-5.728 1 1 0 00-.237-1.041z"></path></svg>
                        )}
                        {/* <span>{darkMode ? `Light` : `Dark`}</span> */}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Header;