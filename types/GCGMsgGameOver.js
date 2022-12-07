"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgGameOver = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGEndReason_1 = require("./GCGEndReason");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgGameOver$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgGameOver", [
            { no: 6, name: "end_reason", kind: "enum", T: () => ["GCGEndReason", GCGEndReason_1.GCGEndReason] },
            { no: 3, name: "win_controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { endReason: 0, winControllerId: 0 };
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
                case /* GCGEndReason end_reason */ 6:
                    message.endReason = reader.int32();
                    break;
                case /* uint32 win_controller_id */ 3:
                    message.winControllerId = reader.uint32();
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
        /* GCGEndReason end_reason = 6; */
        if (message.endReason !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.endReason);
        /* uint32 win_controller_id = 3; */
        if (message.winControllerId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.winControllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgGameOver
 */
exports.GCGMsgGameOver = new GCGMsgGameOver$Type();
