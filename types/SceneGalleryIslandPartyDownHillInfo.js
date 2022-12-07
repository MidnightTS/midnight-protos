"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryIslandPartyDownHillInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStartSource_1 = require("./GalleryStartSource");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartyDownHillInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryIslandPartyDownHillInfo", [
            { no: 10, name: "max_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource_1.GalleryStartSource, "GALLERY_START_SOURCE_"] },
            { no: 12, name: "total_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { maxKillMonsterCount: 0, startSource: 0, totalKillMonsterCount: 0, coin: 0 };
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
                case /* uint32 max_kill_monster_count */ 10:
                    message.maxKillMonsterCount = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 2:
                    message.startSource = reader.int32();
                    break;
                case /* uint32 total_kill_monster_count */ 12:
                    message.totalKillMonsterCount = reader.uint32();
                    break;
                case /* uint32 coin */ 4:
                    message.coin = reader.uint32();
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
        /* uint32 max_kill_monster_count = 10; */
        if (message.maxKillMonsterCount !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.maxKillMonsterCount);
        /* GalleryStartSource start_source = 2; */
        if (message.startSource !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.startSource);
        /* uint32 total_kill_monster_count = 12; */
        if (message.totalKillMonsterCount !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.totalKillMonsterCount);
        /* uint32 coin = 4; */
        if (message.coin !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryIslandPartyDownHillInfo
 */
exports.SceneGalleryIslandPartyDownHillInfo = new SceneGalleryIslandPartyDownHillInfo$Type();
