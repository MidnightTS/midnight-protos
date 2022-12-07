"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeFloatSignalPositionNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeFloatSignalPositionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeFloatSignalPositionNotify", [
            { no: 6, name: "is_transfer_anchor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "float_signal_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "position", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { isTransferAnchor: false, floatSignalId: 0 };
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
                case /* bool is_transfer_anchor */ 6:
                    message.isTransferAnchor = reader.bool();
                    break;
                case /* uint32 float_signal_id */ 15:
                    message.floatSignalId = reader.uint32();
                    break;
                case /* Vector position */ 14:
                    message.position = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
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
        /* bool is_transfer_anchor = 6; */
        if (message.isTransferAnchor !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isTransferAnchor);
        /* uint32 float_signal_id = 15; */
        if (message.floatSignalId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.floatSignalId);
        /* Vector position = 14; */
        if (message.position)
            Vector_1.Vector.internalBinaryWrite(message.position, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeFloatSignalPositionNotify
 */
exports.SummerTimeFloatSignalPositionNotify = new SummerTimeFloatSignalPositionNotify$Type();
