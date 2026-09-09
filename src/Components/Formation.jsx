function Formation() {
     return (
       <section className="bg-slate-400 mt-10">
         {/*Div container */}
         <div className="flex justify-center p-5 m-5">
           <div>
             <h1 className="font-bold text-lg text-center">Formation</h1>
             <div className="flex flex-col gap-3 mt-3">
               <ul>
                 <li>
                   <div>img</div>
                   <div>
                     <h4>2022-2023</h4>
                     <h4 className="text-black">
                       Formation <span className="font-bold">Doranco</span>
                     </h4>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>
     );
};

export default Formation;