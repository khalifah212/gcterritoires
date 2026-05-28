module.exports=[48931,a=>{"use strict";var b=a.i(89173),c=a.i(30849),d=a.i(99244),e=a.i(78788);a.s(["default",0,function(){let a=(0,d.useParams)(),f=(0,d.useRouter)(),[g,h]=(0,c.useState)(null),[i,j]=(0,c.useState)(null),k=["1A","1B","2C","3D","4A","5F","6C","7B","8E"];if((0,c.useEffect)(()=>{let b=JSON.parse(localStorage.getItem("bookings")||"[]").find(b=>b.id.toString()===a.id);j(b),b?.seat&&h(b.seat)},[a.id]),!i)return(0,b.jsx)("div",{className:"   min-h-screen   flex   items-center   justify-center   text-3xl   ",children:"Loading seats..."});let l=Array.from({length:8},(a,b)=>b+1),m=["A","B","C","D","E","F"];return(0,b.jsxs)("main",{className:"flex bg-[#f5f7fb]",children:[(0,b.jsx)(e.default,{}),(0,b.jsxs)("section",{className:"   ml-[220px]   min-h-screen   w-full   px-16   py-16   ",children:[(0,b.jsxs)("div",{className:"mb-16",children:[(0,b.jsx)("p",{className:"   uppercase   tracking-[6px]   text-[#8A1538]   text-sm   mb-4   ",children:"Seat Selection"}),(0,b.jsx)("h1",{className:"   text-6xl   font-light   ",children:"Choose Your Seat"}),(0,b.jsxs)("p",{className:"   mt-6   text-slate-500   text-xl   ",children:["Flight ",i.flight," • ",i.from," → ",i.to]})]}),(0,b.jsxs)("div",{className:"   grid   grid-cols-3   gap-8   mb-10   ",children:[(0,b.jsxs)("div",{className:"   bg-white   rounded-[30px]   p-8   shadow-sm   ",children:[(0,b.jsx)("p",{className:"text-slate-400 text-sm uppercase",children:"Selected Seat"}),(0,b.jsx)("p",{className:"   text-5xl   font-light   mt-4   ",children:g||"--"})]}),(0,b.jsxs)("div",{className:"   bg-white   rounded-[30px]   p-8   shadow-sm   ",children:[(0,b.jsx)("p",{className:"text-slate-400 text-sm uppercase",children:"Cabin"}),(0,b.jsx)("p",{className:"   text-5xl   font-light   mt-4   ",children:"Business"})]}),(0,b.jsxs)("div",{className:"   bg-white   rounded-[30px]   p-8   shadow-sm   ",children:[(0,b.jsx)("p",{className:"text-slate-400 text-sm uppercase",children:"Extra Cost"}),(0,b.jsx)("p",{className:"   text-5xl   font-light   mt-4   ",children:"€0"})]})]}),(0,b.jsxs)("div",{className:"   bg-white   rounded-[50px]   shadow-sm   p-16   ",children:[(0,b.jsx)("div",{className:"text-center mb-16",children:(0,b.jsx)("div",{className:"   mx-auto   w-[400px]   bg-slate-200   py-5   rounded-full   text-slate-500   tracking-[10px]   ",children:"COCKPIT"})}),(0,b.jsxs)("div",{className:"   flex   justify-center   gap-10   mb-16   ",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:"   w-6   h-6   rounded-full   bg-slate-200   "}),(0,b.jsx)("p",{children:"Available"})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:"   w-6   h-6   rounded-full   bg-red-500   "}),(0,b.jsx)("p",{children:"Occupied"})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:"   w-6   h-6   rounded-full   bg-[#8A1538]   "}),(0,b.jsx)("p",{children:"Selected"})]})]}),(0,b.jsx)("div",{className:"   flex   flex-col   gap-6   items-center   ",children:l.map(a=>(0,b.jsxs)("div",{className:"   flex   items-center   gap-6   ",children:[(0,b.jsx)("div",{className:"flex gap-4",children:m.slice(0,3).map(c=>{let d=`${a}${c}`,e=k.includes(d),f=g===d;return(0,b.jsx)("button",{disabled:e,onClick:()=>h(d),className:`
                              w-16
                              h-16
                              rounded-2xl
                              text-lg
                              font-medium
                              transition
                              ${e?`
                                  bg-red-500
                                  text-white
                                  cursor-not-allowed
                                  `:f?`
                                  bg-[#8A1538]
                                  text-white
                                  scale-110
                                  `:`
                                  bg-slate-200
                                  hover:bg-slate-300
                                  `}
                              `,children:d},d)})}),(0,b.jsx)("div",{className:"   w-20   text-center   text-slate-400   ",children:a}),(0,b.jsx)("div",{className:"flex gap-4",children:m.slice(3).map(c=>{let d=`${a}${c}`,e=k.includes(d),f=g===d;return(0,b.jsx)("button",{disabled:e,onClick:()=>h(d),className:`
                              w-16
                              h-16
                              rounded-2xl
                              text-lg
                              font-medium
                              transition
                              ${e?`
                                  bg-red-500
                                  text-white
                                  cursor-not-allowed
                                  `:f?`
                                  bg-[#8A1538]
                                  text-white
                                  scale-110
                                  `:`
                                  bg-slate-200
                                  hover:bg-slate-300
                                  `}
                              `,children:d},d)})})]},a))})]}),(0,b.jsxs)("div",{className:"   flex   justify-end   gap-6   mt-10   ",children:[(0,b.jsx)("button",{onClick:()=>f.push(`/bookings/${a.id}`),className:"   border   border-slate-300   hover:bg-slate-100   transition   px-10   py-5   rounded-full   text-lg   ",children:"Back"}),(0,b.jsx)("button",{disabled:!g,onClick:()=>{if(!g)return;let b=JSON.parse(localStorage.getItem("bookings")||"[]").map(b=>b.id.toString()===a.id?{...b,seat:g}:b);localStorage.setItem("bookings",JSON.stringify(b)),f.push(`/bookings/${a.id}`)},className:`
            px-12
            py-5
            rounded-full
            text-lg
            text-white
            transition
            ${g?`
                bg-[#8A1538]
                hover:bg-[#70112e]
                `:`
                bg-slate-300
                cursor-not-allowed
                `}
            `,children:"Confirm Seat"})]})]})]})}])}];

//# sourceMappingURL=frontend_app_bookings_%5Bid%5D_seat_page_tsx_03ic9ah._.js.map