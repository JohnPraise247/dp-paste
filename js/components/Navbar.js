const Navbar = {
    view:()=>{
        return m(".w-full.flex.items-center.fixed.top-5", m(".rounded-box.px-5.py-5.w-64.bg-base-300.text-center.m-auto.flex.items-center.font-bold.shadow-lg", m(".w-full", [
            m("span","DP"), 
            m("span.text-primary.ml-1", "PASTE")
            ])
        ))
        
        
        // m("div.navbar.bg-base-300.shadow-xl",
        //       [
        //         m("div.flex-1.navbar-center", 
        //           m("a.btn.btn-ghost.text-xl", 
        //             m("span","DP"), m("span.font-bold", "PASTE")
        //           )
        //         ),
        //         /*m("div.flex-none", 
        //         //   m("button.btn.btn-square.btn-ghost", 
        //         //     m("svg.inline-block.w-5.h-5.stroke-current[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24']", 
        //         //       m("path[stroke-linecap='round'][stroke-linejoin='round'][stroke-width='2'][d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z']")
        //         //     )
        //         //   ),
        //           m("button.btn.btn-square.btn-ghost", 
        //             m("svg.inline-block.w-5.h-5.stroke-current[xmlns='http://www.w3.org/2000/svg'][fill='none'][viewBox='0 0 24 24']", 
        //               m("path[stroke-linecap='round'][stroke-linejoin='round'][stroke-width='2'][d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z']")
        //             )
        //           )
        //         )*/
        //       ]
        //     )
    }
}