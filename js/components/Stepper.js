const Stepper = {
    view:()=>{
        return m("ul.steps.rounded-box.bg-base-200.px-5.py-2.fixed.bottom-5.shadow-lg",
          [
            m("li.step",{ class: step >= 1? "step-primary" : "" }, "Upload" ),
            m("li.step",{ class: step >= 2? "step-primary" : "" }, "Crop" ),
            m("li.step",{ class: step >= 3? "step-primary" : "" }, "Download" )
          ]
        )
    }
}