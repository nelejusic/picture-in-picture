const videoElement = document.getElementById('video');
const buttonn = document.getElementById('button');

/* Prompt to select media stream, pass to video element and play */

async function selectMediaStream (){
    try {

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch(error) {

    }
}

buttonn.addEventListener('click', async ()=> {
    //disable Button
    buttonn.disabled = true;
    //start picture in picture 
    await videoElement.requestPictureInPicture();
    //reset Button 
    buttonn.disabled = false;
});

//on load
selectMediaStream()