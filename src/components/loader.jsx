export default function Loader() {
    
    return <>
        <div className="loader h-20 flex gap-1 fixed ">
            <div className="bg-theme-1 w-5 rounded-sm duration-300 animate-bounce delay-0"></div>
            <div className="bg-theme-1 w-5 rounded-sm duration-300 animate-bounce delay-[50ms]"></div>
            <div className="bg-theme-1 w-5 rounded-sm duration-300 animate-bounce delay-[100ms]"></div>
            <div className="bg-theme-1 w-5 rounded-sm duration-300 animate-bounce delay-[150ms]"></div>
            <div className="bg-theme-1 w-5 rounded-sm duration-300 animate-bounce delay-[200ms]"></div>
        </div>
    </>
}