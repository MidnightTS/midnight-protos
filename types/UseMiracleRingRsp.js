"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseMiracleRingRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UseMiracleRingRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("UseMiracleRingRsp", [
            { no: 14, name: "miracle_ring_op_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { miracleRingOpType: 0, retcode: 0 };
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
                case /* uint32 miracle_ring_op_type */ 14:
                    message.miracleRingOpType = reader.uint32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
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
        /* uint32 miracle_ring_op_type = 14; */
        if (message.miracleRingOpType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.miracleRingOpType);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseMiracleRingRsp
 */
exports.UseMiracleRingRsp = new UseMiracleRingRsp$Type();