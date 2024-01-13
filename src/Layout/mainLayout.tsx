import { ReactNode } from "react";

export default function mainLayout({ img, form }: { img: ReactNode, form: ReactNode }) {
   return (
      <div className="w-full h-full flex flex-row items-center justify-center p-8 bg-[#9A616D]">
         <div className="w-full flex flex-row justify-center items-center">
            <div className="w-[60%] h-[900px]">
               {img}
            </div>
            <div className="w-[40%] h-[900px] flex flex-col items-center justify-center p-10 bg-[#727272] rounded-br-2xl rounded-tr-2xl">
               {form}
            </div>
         </div>
      </div>
   )
}
