"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompoundQueueData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CompoundQueueData$Type extends runtime_5.MessageType {
    constructor() {
        super("CompoundQueueData", [
            { no: 5, name: "Unk3300_NCEHJAAHOKM", kind: "scalar", jsonName: "Unk3300NCEHJAAHOKM", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_COMIGCMIPLE", kind: "scalar", jsonName: "Unk3300COMIGCMIPLE", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_JHJNOPCPPAD", kind: "scalar", jsonName: "Unk3300JHJNOPCPPAD", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "compound_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300NCEHJAAHOKM: 0, unk3300COMIGCMIPLE: 0, unk3300JHJNOPCPPAD: 0, compoundId: 0 };
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
                case /* uint32 Unk3300_NCEHJAAHOKM = 5 [json_name = "Unk3300NCEHJAAHOKM"];*/ 5:
                    message.unk3300NCEHJAAHOKM = reader.uint32();
                    break;
                case /* uint32 Unk3300_COMIGCMIPLE = 14 [json_name = "Unk3300COMIGCMIPLE"];*/ 14:
                    message.unk3300COMIGCMIPLE = reader.uint32();
                    break;
                case /* uint32 Unk3300_JHJNOPCPPAD = 10 [json_name = "Unk3300JHJNOPCPPAD"];*/ 10:
                    message.unk3300JHJNOPCPPAD = reader.uint32();
                    break;
                case /* uint32 compound_id */ 12:
                    message.compoundId = reader.uint32();
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
        /* uint32 Unk3300_NCEHJAAHOKM = 5 [json_name = "Unk3300NCEHJAAHOKM"]; */
        if (message.unk3300NCEHJAAHOKM !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300NCEHJAAHOKM);
        /* uint32 Unk3300_COMIGCMIPLE = 14 [json_name = "Unk3300COMIGCMIPLE"]; */
        if (message.unk3300COMIGCMIPLE !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300COMIGCMIPLE);
        /* uint32 Unk3300_JHJNOPCPPAD = 10 [json_name = "Unk3300JHJNOPCPPAD"]; */
        if (message.unk3300JHJNOPCPPAD !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300JHJNOPCPPAD);
        /* uint32 compound_id = 12; */
        if (message.compoundId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.compoundId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CompoundQueueData
 */
exports.CompoundQueueData = new CompoundQueueData$Type();
