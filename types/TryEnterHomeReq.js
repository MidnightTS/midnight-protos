"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryEnterHomeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TryEnterHomeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("TryEnterHomeReq", [
            { no: 13, name: "is_transfer_to_safe_point", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "target_point", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isTransferToSafePoint: false, targetPoint: 0, targetUid: 0 };
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
                case /* bool is_transfer_to_safe_point */ 13:
                    message.isTransferToSafePoint = reader.bool();
                    break;
                case /* uint32 target_point */ 10:
                    message.targetPoint = reader.uint32();
                    break;
                case /* uint32 target_uid */ 1:
                    message.targetUid = reader.uint32();
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
        /* bool is_transfer_to_safe_point = 13; */
        if (message.isTransferToSafePoint !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isTransferToSafePoint);
        /* uint32 target_point = 10; */
        if (message.targetPoint !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.targetPoint);
        /* uint32 target_uid = 1; */
        if (message.targetUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.targetUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TryEnterHomeReq
 */
exports.TryEnterHomeReq = new TryEnterHomeReq$Type();
