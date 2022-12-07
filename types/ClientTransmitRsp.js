"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTransmitRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TransmitReason_1 = require("./TransmitReason");
// @generated message type with reflection information, may provide speed optimized methods
class ClientTransmitRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientTransmitRsp", [
            { no: 11, name: "reason", kind: "enum", T: () => ["TransmitReason", TransmitReason_1.TransmitReason, "TRANSMIT_REASON_"] },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { reason: 0, retcode: 0 };
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
                case /* TransmitReason reason */ 11:
                    message.reason = reader.int32();
                    break;
                case /* int32 retcode */ 13:
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
        /* TransmitReason reason = 11; */
        if (message.reason !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.reason);
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientTransmitRsp
 */
exports.ClientTransmitRsp = new ClientTransmitRsp$Type();
