"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriEditFlowerCombinationRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriEditFlowerCombinationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriEditFlowerCombinationRsp", [
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "Unk3300_IAPLHBKJLBF", kind: "scalar", jsonName: "Unk3300IAPLHBKJLBF", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_DBBGPOMDKPK", kind: "scalar", jsonName: "Unk3300DBBGPOMDKPK", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, unk3300IAPLHBKJLBF: false, unk3300DBBGPOMDKPK: false };
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
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* bool Unk3300_IAPLHBKJLBF = 8 [json_name = "Unk3300IAPLHBKJLBF"];*/ 8:
                    message.unk3300IAPLHBKJLBF = reader.bool();
                    break;
                case /* bool Unk3300_DBBGPOMDKPK = 9 [json_name = "Unk3300DBBGPOMDKPK"];*/ 9:
                    message.unk3300DBBGPOMDKPK = reader.bool();
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
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool Unk3300_IAPLHBKJLBF = 8 [json_name = "Unk3300IAPLHBKJLBF"]; */
        if (message.unk3300IAPLHBKJLBF !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300IAPLHBKJLBF);
        /* bool Unk3300_DBBGPOMDKPK = 9 [json_name = "Unk3300DBBGPOMDKPK"]; */
        if (message.unk3300DBBGPOMDKPK !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300DBBGPOMDKPK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriEditFlowerCombinationRsp
 */
exports.IrodoriEditFlowerCombinationRsp = new IrodoriEditFlowerCombinationRsp$Type();
