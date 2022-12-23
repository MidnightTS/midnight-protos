"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeV2BoatGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeV2BoatGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeV2BoatGallerySettleInfo", [
            { no: 10, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 12, name: "param2", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "param1", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "param3", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, param2: 0, usedTime: 0, param1: 0, galleryId: 0, param3: 0 };
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
                case /* GalleryStopReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* uint32 param2 */ 12:
                    message.param2 = reader.uint32();
                    break;
                case /* uint32 used_time */ 4:
                    message.usedTime = reader.uint32();
                    break;
                case /* uint32 param1 */ 7:
                    message.param1 = reader.uint32();
                    break;
                case /* uint32 gallery_id */ 11:
                    message.galleryId = reader.uint32();
                    break;
                case /* uint32 param3 */ 6:
                    message.param3 = reader.uint32();
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
        /* GalleryStopReason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* uint32 param2 = 12; */
        if (message.param2 !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.param2);
        /* uint32 used_time = 4; */
        if (message.usedTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* uint32 param1 = 7; */
        if (message.param1 !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.param1);
        /* uint32 gallery_id = 11; */
        if (message.galleryId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* uint32 param3 = 6; */
        if (message.param3 !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.param3);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeV2BoatGallerySettleInfo
 */
exports.SummerTimeV2BoatGallerySettleInfo = new SummerTimeV2BoatGallerySettleInfo$Type();
