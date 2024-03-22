const Card = {
    view:(vnode)=>{
        return m(".card.w-full.md:w-96.bg-neutral.text-neutral-content.mt-32",{
            class: vnode.attrs.class
        }, 
          m(".card-body.items-center.text-center",
            [
              m("img.mask.mask-squircle.profile-img-1.bg-white[src='img/avatar.png']", { class: step != 1? "hidden" : ""}),
              m("h2.card-title.mb-2", vnode.attrs.title),
              vnode.children
            ]
          )
        )
    }
}