export default function BottomBanner() {
    return (
        <div className="xl:space-x-[200px] flex justify-center items-center fixed w-full h-[80px] bg-[#1d9bf0] bottom-0">
            <div className="hidden xl:inline text-white">
                <h1 className="text-2xl font-bold">Dont's miss what's happening</h1>
                <span>People on Twitter are the first to know.</span>

            </div>
            
            <div>
                <button>Log In</button>
                <button>Sign Up</button>

            </div>
        </div>
    );
}