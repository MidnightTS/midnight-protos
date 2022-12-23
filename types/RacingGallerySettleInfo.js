"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RacingGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class RacingGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RacingGallerySettleInfo", [
            { no: 10, name: "winner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "use_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] }
        ]);
    }
    create(value) {
        const message = { winnerUid: 0, useTime: 0, reason: 0 };
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
                case /* uint32 winner_uid */ 10:
                    message.winnerUid = reader.uint32();
                    break;
                case /* uint32 use_time */ 15:
                    message.useTime = reader.uint32();
                    break;
                case /* GalleryStopReason reason */ 11:
                    message.reason = reader.int32();
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
        /* uint32 winner_uid = 10; */
        if (message.winnerUid !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.winnerUid);
        /* uint32 use_time = 15; */
        if (message.useTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.useTime);
        /* GalleryStopReason reason = 11; */
        if (message.reason !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RacingGallerySettleInfo
 */
exports.RacingGallerySettleInfo = new RacingGallerySettleInfo$Type();
