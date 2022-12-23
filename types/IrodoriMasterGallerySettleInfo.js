"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriMasterGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriMasterGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriMasterGallerySettleInfo", [
            { no: 10, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 2, name: "difficult", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, difficult: 0, finishTime: 0, levelId: 0, isFinish: false };
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
                case /* uint32 difficult */ 2:
                    message.difficult = reader.uint32();
                    break;
                case /* uint32 finish_time */ 4:
                    message.finishTime = reader.uint32();
                    break;
                case /* uint32 level_id */ 1:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_finish */ 3:
                    message.isFinish = reader.bool();
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
        /* uint32 difficult = 2; */
        if (message.difficult !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.difficult);
        /* uint32 finish_time = 4; */
        if (message.finishTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.finishTime);
        /* uint32 level_id = 1; */
        if (message.levelId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool is_finish = 3; */
        if (message.isFinish !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isFinish);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriMasterGallerySettleInfo
 */
exports.IrodoriMasterGallerySettleInfo = new IrodoriMasterGallerySettleInfo$Type();
