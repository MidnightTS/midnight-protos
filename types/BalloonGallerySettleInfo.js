"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalloonGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class BalloonGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BalloonGallerySettleInfo", [
            { no: 12, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 13, name: "hit_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { score: 0, ownerUid: 0, reason: 0, hitCount: 0 };
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
                case /* uint32 score */ 12:
                    message.score = reader.uint32();
                    break;
                case /* uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* GalleryStopReason reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* uint32 hit_count */ 13:
                    message.hitCount = reader.uint32();
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
        /* uint32 score = 12; */
        if (message.score !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 owner_uid = 2; */
        if (message.ownerUid !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* GalleryStopReason reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 hit_count = 13; */
        if (message.hitCount !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.hitCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BalloonGallerySettleInfo
 */
exports.BalloonGallerySettleInfo = new BalloonGallerySettleInfo$Type();
