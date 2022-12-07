"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackHitEffectResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AttackHitEffectResult$Type extends runtime_5.MessageType {
    constructor() {
        super("AttackHitEffectResult", [
            { no: 13, name: "Unk3300_DABGDGLAIKL", kind: "scalar", jsonName: "Unk3300DABGDGLAIKL", T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "Unk3300_JDEFHMKICPF", kind: "scalar", jsonName: "Unk3300JDEFHMKICPF", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "Unk3300_ECHOFBLGIIO", kind: "scalar", jsonName: "Unk3300ECHOFBLGIIO", T: 2 /*ScalarType.FLOAT*/ },
            { no: 8, name: "Unk3300_LCKECJCKKJK", kind: "scalar", jsonName: "Unk3300LCKECJCKKJK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_KLNGDAMMFIF", kind: "scalar", jsonName: "Unk3300KLNGDAMMFIF", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_MNGCOAIGGAL", kind: "scalar", jsonName: "Unk3300MNGCOAIGGAL", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { unk3300DABGDGLAIKL: 0, unk3300JDEFHMKICPF: 0, unk3300ECHOFBLGIIO: 0, unk3300LCKECJCKKJK: 0, unk3300KLNGDAMMFIF: 0, unk3300MNGCOAIGGAL: 0 };
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
                case /* float Unk3300_DABGDGLAIKL = 13 [json_name = "Unk3300DABGDGLAIKL"];*/ 13:
                    message.unk3300DABGDGLAIKL = reader.float();
                    break;
                case /* float Unk3300_JDEFHMKICPF = 10 [json_name = "Unk3300JDEFHMKICPF"];*/ 10:
                    message.unk3300JDEFHMKICPF = reader.float();
                    break;
                case /* float Unk3300_ECHOFBLGIIO = 9 [json_name = "Unk3300ECHOFBLGIIO"];*/ 9:
                    message.unk3300ECHOFBLGIIO = reader.float();
                    break;
                case /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"];*/ 8:
                    message.unk3300LCKECJCKKJK = reader.uint32();
                    break;
                case /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"];*/ 1:
                    message.unk3300KLNGDAMMFIF = reader.uint32();
                    break;
                case /* float Unk3300_MNGCOAIGGAL = 3 [json_name = "Unk3300MNGCOAIGGAL"];*/ 3:
                    message.unk3300MNGCOAIGGAL = reader.float();
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
        /* float Unk3300_DABGDGLAIKL = 13 [json_name = "Unk3300DABGDGLAIKL"]; */
        if (message.unk3300DABGDGLAIKL !== 0)
            writer.tag(13, runtime_1.WireType.Bit32).float(message.unk3300DABGDGLAIKL);
        /* float Unk3300_JDEFHMKICPF = 10 [json_name = "Unk3300JDEFHMKICPF"]; */
        if (message.unk3300JDEFHMKICPF !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.unk3300JDEFHMKICPF);
        /* float Unk3300_ECHOFBLGIIO = 9 [json_name = "Unk3300ECHOFBLGIIO"]; */
        if (message.unk3300ECHOFBLGIIO !== 0)
            writer.tag(9, runtime_1.WireType.Bit32).float(message.unk3300ECHOFBLGIIO);
        /* uint32 Unk3300_LCKECJCKKJK = 8 [json_name = "Unk3300LCKECJCKKJK"]; */
        if (message.unk3300LCKECJCKKJK !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300LCKECJCKKJK);
        /* uint32 Unk3300_KLNGDAMMFIF = 1 [json_name = "Unk3300KLNGDAMMFIF"]; */
        if (message.unk3300KLNGDAMMFIF !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300KLNGDAMMFIF);
        /* float Unk3300_MNGCOAIGGAL = 3 [json_name = "Unk3300MNGCOAIGGAL"]; */
        if (message.unk3300MNGCOAIGGAL !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.unk3300MNGCOAIGGAL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AttackHitEffectResult
 */
exports.AttackHitEffectResult = new AttackHitEffectResult$Type();
