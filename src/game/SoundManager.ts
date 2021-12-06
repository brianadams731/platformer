import { Howl } from "howler";

class SoundManager{
    private coinCollection:Howl;
    private hit:Howl;
    private soundtrack:Howl;
    constructor(){
        this.coinCollection = new Howl({
            src:"/audio/coinSound.wav"
        })
        this.hit = new Howl({
            src:"/audio/hit.wav"
        })
        this.soundtrack = new Howl({
            src:"/audio/soundtrack.mp3",
            loop: true
        })
    }
    public playSoundTrack():void{
        if(this.soundtrack.playing()){
            return;
        }
        this.soundtrack.play();
    }
    public playCoinCollection():void{
        this.coinCollection.play();
    }
    public playHit():void{
        if(this.hit.playing()){
            return;
        }
        this.hit.play();
    }
}

export {SoundManager};