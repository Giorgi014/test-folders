var i = 0;
            var images = new Array();
            var time = 3000;
            
            slides()

            images[0] = 'img/assasin.jpg';
            images[1] = 'img/gta.jpg';
            images[2] = 'img/duty.jpg';
            images[3] = 'img/farcry.jpg';

            function slides() {
                document.slides.src = [i];
                if(i < images.length -1){
                    i++;
                }else{
                    i=0;
                }
                setTimeout("slides()", time)
            }