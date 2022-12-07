"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSettleOptionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSettleOption_1 = require("./GCGSettleOption");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSettleOptionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSettleOptionRsp", [
            { no: 2, name: "option", kind: "enum", T: () => ["GCGSettleOption", GCGSettleOption_1.GCGSettleOption] },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { option: 0, retcode: 0 };
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
                case /* GCGSettleOption option */ 2:
                    message.option = reader.int32();
                    break;
                case /* int32 retcode */ 5:
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
        /* GCGSettleOption option = 2; */
        if (message.option !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.option);
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSettleOptionRsp
 */
exports.GCGSettleOptionRsp = new GCGSettleOptionRsp$Type();
