"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGOperationReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGOperation_1 = require("./GCGOperation");
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGOperationReq", [
            { no: 12, name: "redirect_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "op_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "op", kind: "message", T: () => GCGOperation_1.GCGOperation }
        ]);
    }
    create(value) {
        const message = { redirectUid: 0, opSeq: 0 };
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
                case /* uint32 redirect_uid */ 12:
                    message.redirectUid = reader.uint32();
                    break;
                case /* uint32 op_seq */ 10:
                    message.opSeq = reader.uint32();
                    break;
                case /* GCGOperation op */ 8:
                    message.op = GCGOperation_1.GCGOperation.internalBinaryRead(reader, reader.uint32(), options, message.op);
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
        /* uint32 redirect_uid = 12; */
        if (message.redirectUid !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.redirectUid);
        /* uint32 op_seq = 10; */
        if (message.opSeq !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.opSeq);
        /* GCGOperation op = 8; */
        if (message.op)
            GCGOperation_1.GCGOperation.internalBinaryWrite(message.op, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationReq
 */
exports.GCGOperationReq = new GCGOperationReq$Type();
