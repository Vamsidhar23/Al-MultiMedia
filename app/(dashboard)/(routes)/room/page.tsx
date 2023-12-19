import GenerateBtn from "@/components/genratebtn";
import PreviewImg from "@/components/previewimg";
import SelectInp from "@/components/selectinp";
import ThemeOptions from "@/components/themeoptions";
import { Heading } from "@/components/ui/heading"
import UploadDnd from "@/components/uploaddnd";
import { Home } from "lucide-react"

const RoomPage=()=>{
    return(
        <div>
            <Heading title="Room Generation"
                     description="Generate the interior"
                     icon={Home}
                     iconColor="[#C5FFF8]"
                     bg="bg-[#C5FFF8]"
            />
            <div className="container mx-auto py-10">
                <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
                    <div className="flex flex-col items-center gap-8 md:w-1/3">
                        <div className="flex flex-col items-center gap-5 w-full">
                            <h3 className="font-bold text-xl">Upload a photo of your room</h3>
                            <UploadDnd />
                        </div>
                        <div className="flex flex-col items-center gap-5 w-full">
                            <h3 className="font-bold text-xl">Select Room Type</h3>
                            <SelectInp />
                        </div>
                        <div className="flex flex-col items-center gap-5 w-full">
                            <h3 className="font-bold text-xl">Select Room Theme</h3>
                            <ThemeOptions/>
                        </div>
                        <GenerateBtn/>
                    </div>
                    <div className="md:w-2/3 flex flex-col items-center pb-10">
                    <div className="md:flex hidden flex-col gap-5 text-center">
                        <h1 className="text-6xl font-bold">
                        Redesign your <span className="text-blue-500">room</span> in
                        seconds
                        </h1>
                        <p className="text-2xl">
                        Upload a room, specify the room type, and select your room theme
                        to redesign.
                        </p>
                    </div>
                    <PreviewImg/>
                    </div>
                </div>
                </div>

        </div>
    )

}

export default RoomPage;