"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusFighterTrainingSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStopReason_1 = require("./GalleryStopReason");
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusFighterTrainingSettleInfo", [
            { no: 13, name: "used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reason", kind: "enum", T: () => ["GalleryStopReason", GalleryStopReason_1.GalleryStopReason, "GALLERY_STOP_REASON_"] },
            { no: 3, name: "transaction", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { usedTime: 0, reason: 0, transaction: "" };
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
                case /* uint32 used_time */ 13:
                    message.usedTime = reader.uint32();
                    break;
                case /* GalleryStopReason reason */ 4:
                    message.reason = reader.int32();
                    break;
                case /* string transaction */ 3:
                    message.transaction = reader.string();
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
        /* uint32 used_time = 13; */
        if (message.usedTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* GalleryStopReason reason = 4; */
        if (message.reason !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.reason);
        /* string transaction = 3; */
        if (message.transaction !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.transaction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterTrainingSettleInfo
 */
exports.FungusFighterTrainingSettleInfo = new FungusFighterTrainingSettleInfo$Type();
