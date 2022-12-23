"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuminanceStoneChallengeGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class LuminanceStoneChallengeGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LuminanceStoneChallengeGallerySettleInfo", [
            { no: 12, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "clean_mud_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "kill_special_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { finalScore: 0, cleanMudCount: 0, reason: 0, galleryId: 0, killSpecialMonsterCount: 0, killMonsterCount: 0 };
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
                case /* uint32 final_score */ 12:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 clean_mud_count */ 8:
                    message.cleanMudCount = reader.uint32();
                    break;
                case /* GalleryStopReason reason */ 15:
                    message.reason = reader.int32();
                    break;
                case /* uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 kill_special_monster_count */ 4:
                    message.killSpecialMonsterCount = reader.uint32();
                    break;
                case /* uint32 kill_monster_count */ 1:
                    message.killMonsterCount = reader.uint32();
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
        /* uint32 final_score = 12; */
        if (message.finalScore !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 clean_mud_count = 8; */
        if (message.cleanMudCount !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.cleanMudCount);
        /* GalleryStopReason reason = 15; */
        if (message.reason !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 kill_special_monster_count = 4; */
        if (message.killSpecialMonsterCount !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.killSpecialMonsterCount);
        /* uint32 kill_monster_count = 1; */
        if (message.killMonsterCount !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.killMonsterCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuminanceStoneChallengeGallerySettleInfo
 */
exports.LuminanceStoneChallengeGallerySettleInfo = new LuminanceStoneChallengeGallerySettleInfo$Type();
