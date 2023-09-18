//selecting all requires elements
const gallery = document.querySelectorAll(".gallery .image");
const pereviewBox = document.querySelector(".preview_box");
const pereviewImg = pereviewBox.querySelector("img");
const closeIcon = pereviewBox.querySelector(".icon");
const totalImg = pereviewBox.querySelector(".total_img");
const currentImg = pereviewBox.querySelector(".current_img");
const shadow = document.querySelector(".shadow");

window.onload = () => { //once window lodead
    for(let i = 0; i < gallery.length; i++){
        totalImg.innerHTML = gallery.length;
        let newIndex = i; //passing  i value to newIDex variable
        let clickedImgIndex;
        
        gallery[i].onclick = () => {
            clickedImgIndex = i;
            function preview(){
                currentImg.innerHTML = newIndex + 1; //passing newIndex value to current by addimg
                clickedImgIndex = newIndex;

                let selectedImgUrl = gallery[newIndex].querySelector('img').src;
                pereviewImg.src = selectedImgUrl; // pasing user clicek img url to previe img source
            };
            preview(); // calling above function
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0 ){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length -1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () =>{
                newIndex--; //decrement newIndevalue
                
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none"
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () =>{
                newIndex++; //indecrement newIndevalue
                if (newIndex >= gallery.length -1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            pereviewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden"
            closeIcon.onclick = ()=>{
                shadow.style.display = "none";
                newIndex = clickedImgIndex ;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                pereviewBox.classList.remove("show");
                document.querySelector("body").style.overflow = "scroll";
            };
        }
    }
}