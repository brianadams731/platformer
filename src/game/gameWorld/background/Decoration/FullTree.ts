import { Sprite } from "@pixi/sprite";
import { SpriteManager } from "../../../SpriteManager";
import { Decoration } from "./Decoration";

class FullTree extends Decoration{
    constructor(spriteManager:SpriteManager, x:number, y:number){
        super(new Sprite(spriteManager.getDecoration().textures["tree.png"]), x, y)
    }
}

export {FullTree};