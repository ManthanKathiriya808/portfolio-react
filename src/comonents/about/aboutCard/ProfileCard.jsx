
// import { X, Facebook, Instagram } from "iconoir-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard() {
  return (
   <div class=" text-[#C27AFF] group py-7 before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80  relative bg-zinc-900 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden text-base/7">
  <div class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 mb-5">
    <img src="https://bt-portfolio-zeta.vercel.app/img/WhatsApp%20Image%202024-09-11%20at%204.27.00%20PM.jpeg" className="rounded-full" alt="" />
  </div>
  <div class="z-10  group-hover:-translate-y-10 mb-2 transition-all duration-500">
    <span class="text-2xl font-bold">Manthan Kathiriya</span>
    <p>Software Developer</p>
  </div>
 <div className="flex gap-6 text-2xl">
     <a class=" text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 nav-hover" href="#"><i class="fa-brands fa-linkedin"></i></a>
  <a class=" text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 nav-hover " href="#"><i class="fa-brands fa-instagram"></i></a>
  <a class="  text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 nav-hover" href="#"><i class="fa-brands fa-facebook"></i></a>

 </div>
</div>
  );
}
