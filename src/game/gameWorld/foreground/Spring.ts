import * as PIXI from "pixi.js";
import { StaticForeground } from "./StaticForeground";

class Spring extends StaticForeground{
    constructor(x:number,y:number){
        super(x,y,
            new PIXI.Sprite(PIXI.Texture.WHITE)
        )
        this.foreground.tint = 0x006ee6;
        this.collisionProperties = ["spring"]
        // TEST
        this.foreground.height = 16;
        this.foreground.width = 16;
    }
}

export {Spring};