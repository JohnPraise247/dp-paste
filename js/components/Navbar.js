const Navbar = {
    view:()=>{
        return m(".w-full.flex.items-center.fixed.top-5", m(".rounded-box.px-5.py-5.w-64.bg-base-300.text-center.m-auto.flex.items-center.font-bold.shadow-lg", m(".w-full", [
            m("span","EMERGE"), 
            m("span.text-primary.ml-1", "2024")
            ])
        ))
    }
}
