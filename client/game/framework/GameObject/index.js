import GameEngine from '../engine/GameEngine';
import hubObjects from '../engine/Hub';

export default class GameObject extends GameEngine {

   static addSprite(uniqueId, x, y, key, frame, group ) {
        hubObjects.sprites[uniqueId] = window.game.add.sprite( x, y, key, frame, group );
        hubObjects.sprites[uniqueId].uniqueId = uniqueId;
        hubObjects.sprites[uniqueId].events.onKilled.add(function () {
            delete hubObjects.sprites[uniqueId];
        }, this);

        return hubObjects.sprites[uniqueId];
    }

    static addGroup(uniqueId) {
        hubObjects.groups[uniqueId] = window.game.add.group();
        hubObjects.groups[uniqueId].uniqueId = uniqueId;
        hubObjects.groups[uniqueId].onDestroy.add(function () {
            delete hubObjects.groups[uniqueId];
        }, this);

        return hubObjects.groups[uniqueId];
    }

    static addComponent(uniqueId, component) {
        hubObjects.components[uniqueId] = component;
        hubObjects.components[uniqueId].uniqueId = uniqueId;

        return hubObjects.components[uniqueId];
    }

    static addText(uniqueId, x, y, text, style) {
        hubObjects.texts[uniqueId] = window.game.add.text(x, y, text, style);
        hubObjects.texts[uniqueId].uniqueId = uniqueId;
        hubObjects.texts[uniqueId].events.onKilled.add(function () {
            delete hubObjects.texts[uniqueId];
        }, this);

        return hubObjects.texts[uniqueId];
    }

    static findSprite(uniqueId) {
        return hubObjects.sprites[uniqueId];
    }

    static findGroup(uniqueId) {
        return hubObjects.groups[uniqueId];
    }

    static findComponent(uniqueId) {
        return hubObjects.components[uniqueId];
    }

    static findText(uniqueId) {
        return hubObjects.texts[uniqueId];
    }

}