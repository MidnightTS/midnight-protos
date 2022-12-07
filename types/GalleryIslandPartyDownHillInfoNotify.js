"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryIslandPartyDownHillInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GalleryIslandPartyDownHillInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GalleryIslandPartyDownHillInfoNotify", [
            { no: 8, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "total_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { coin: 0, galleryId: 0, totalKillMonsterCount: 0 };
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
                case /* uint32 coin */ 8:
                    message.coin = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 14:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 total_kill_monster_count */ 7:
                    message.totalKillMonsterCount = reader.uint32();
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
        /* uint32 coin = 8; */
        if (message.coin !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.coin);
        /* uint32 gallery_id = 14; */
        if (message.galleryId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 total_kill_monster_count = 7; */
        if (message.totalKillMonsterCount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.totalKillMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GalleryIslandPartyDownHillInfoNotify
 */
exports.GalleryIslandPartyDownHillInfoNotify = new GalleryIslandPartyDownHillInfoNotify$Type();
