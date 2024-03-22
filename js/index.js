var cropper = null;
var croppable = false;
var imageA = null;
var imageB = null;
var imgUploaded = false;
var step = 1;
var canvasHidden = true;


//
const Index = {
    view:()=>{
        return [
            m(Navbar),
            m(".min-h-screen.items-center.flex.flex-col", [
                step == 1? m(Card, { title: "Upload your DP" }, [
                      m("input.file-input.file-input-bordered.w-full.mt-8[id=input][name=image][type=file][accept=image/*]",{
                        onchange:(e)=>{
                            let input = document.getElementById("input");
                            imageA = document.querySelector(".profile-img-1");
                            imageB = document.querySelector(".profile-img-2");
                            const curFiles = input.files;
                            
                            if(curFiles.length == 1){
                                imageA.src = imageB.src = URL.createObjectURL(curFiles[0]);
                                imgUploaded = true;
                            }else{
                                imgUploaded =false;
                            }
                        }
                    }),
                    m("button.btn.btn-primary.w-full",{
                        class: !imgUploaded?"btn-disabled" : "",
                        onclick:()=>{
                            step = 2;
                            
                            cropper = new Cropper(imageB, {
                              aspectRatio: 1,
                              viewMode: 1,
                              ready: function () {
                                  document.getElementById("msg").remove()
                                croppable = true;
                              },
                            });
                        }
                    }, "Next >")
                 ]) 
                : null,
                m(Card, { title: "Crop DP", class: (step != 2? "hidden" : "") }, [
                   m(".preview", [
                       m("p#msg", "Loading ..."),
                       m("img.profile-img-2.hidden[src='']")
                    ]),
                    m("button.btn.btn-primary.w-full",{
                       class: !imgUploaded?"btn-disabled" : "",
                       onclick:()=>{
                           step = 3;
                           
                            var canvas = document.getElementById("canvas");
                            var context = canvas.getContext("2d");
                            var result = document.getElementById('result');
                            var croppedCanvas;
                            var roundedCanvas;
                            var roundedImage;
                    
                            if (!croppable) {
                              return;
                            }
                    
                            // Crop
                            croppedCanvas = cropper.getCroppedCanvas();
                    
                            // Round
                            roundedCanvas = getRoundedCanvas(croppedCanvas);
                    
                            // Show
                            var imgAvatar = new Image();
                            
                                        
                            roundedImage = document.createElement('img');
                            roundedImage.src = roundedCanvas.toDataURL()
                            result.innerHTML = '';
                            imgAvatar.onload = function () {
                             context.drawImage(imgAvatar, 363, 199, 380, 380);
                            }
                            imgAvatar.src = roundedCanvas.toDataURL();
                            
                            roundedImage.src = canvas.toDataURL()
                            
                            context.save()
                            // var dataURL = canvas.toDataURL();

                            result.appendChild(canvas);
                            canvasHidden = false;
                            m.redraw()
                       }
                    }, "Next >")
                ]),
                 m(Card, { title: "Download your DP", class: (step != 3? "hidden" : "") }, [
                    m("#result.preview.overflow-auto", [
                        m("img.output[src='']")
                    ]),
                    m("a.btn.btn-primary.w-full[download=emerge.png]",{
                       class: !imgUploaded?"btn-disabled" : "",
                       onclick:()=> downloadCanvasAsImage() 
                    }, "Download")
               ]),
               step < 3?m(Stepper) : null
            ]),
            m("canvas#canvas[width=1280][height=1280]",{ oncreate:()=> initCanvas(), class: canvasHidden?"hidden" : ""}, "Your browser does not support HTML5 Canvas."),
        ]
    }
};

function getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
}



const initCanvas = () =>{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    if (!canvas || !canvas.getContext) {
        canvasHidden = false;
        return;
    }
    
    var img = new Image();
    img.onload = function () {
     context.drawImage(img, 0, 0, 500, 500);
    }
    img.src = "img/template.png";
}

function downloadCanvasAsImage(){
    let canvasImage = document.getElementById('canvas').toDataURL('image/png');
    
    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        console.log(window.URL.createObjectURL(xhr.response))
        a.download = 'emerge.png';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
    xhr.open('GET', canvasImage); // This is to download the canvas Image
    xhr.send();
}


m.mount(document.getElementById("root"), Index);
