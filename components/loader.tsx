import Image from "next/image";


export const Loader = () => {
    return (  
        <div className="p-20 relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500">
            </div> 

            <div className="absolute rounded-full h-20 w-20">
                <Image alt="" fill src="/logo.png"/>
            </div>
            
            
        </div>
    );
}
 