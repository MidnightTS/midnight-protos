"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GallerySumoKillMonsterNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GallerySumoKillMonsterNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GallerySumoKillMonsterNotify", [
            { no: 6, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "kill_elite_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "kill_normal_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { score: 0, galleryId: 0, killEliteMonsterNum: 0, killNormalMonsterNum: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 kill_elite_monster_num */ 14:
                    message.killEliteMonsterNum = reader.uint32();
                    break;
                case /* uint32 kill_normal_monster_num */ 4:
                    message.killNormalMonsterNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 score = 6; */
        if (message.score !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 kill_elite_monster_num = 14; */
        if (message.killEliteMonsterNum !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.killEliteMonsterNum);
        /* uint32 kill_normal_monster_num = 4; */
        if (message.killNormalMonsterNum !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.killNormalMonsterNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GallerySumoKillMonsterNotify
 */
exports.GallerySumoKillMonsterNotify = new GallerySumoKillMonsterNotify$Type();
