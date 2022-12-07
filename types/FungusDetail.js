"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusDetail = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FungusDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusDetail", [
            { no: 8, name: "name_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EHNBDJPANKL", kind: "scalar", jsonName: "Unk3300EHNBDJPANKL", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fungus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_cultivate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_GCLBPDJDEDN", kind: "scalar", jsonName: "Unk3300GCLBPDJDEDN", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { nameId: 0, unk3300EHNBDJPANKL: 0, fungusId: 0, isCultivate: false, unk3300GCLBPDJDEDN: 0 };
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
                case /* uint32 name_id */ 8:
                    message.nameId = reader.uint32();
                    break;
                case /* uint32 Unk3300_EHNBDJPANKL = 2 [json_name = "Unk3300EHNBDJPANKL"];*/ 2:
                    message.unk3300EHNBDJPANKL = reader.uint32();
                    break;
                case /* uint32 fungus_id */ 3:
                    message.fungusId = reader.uint32();
                    break;
                case /* bool is_cultivate */ 7:
                    message.isCultivate = reader.bool();
                    break;
                case /* uint32 Unk3300_GCLBPDJDEDN = 13 [json_name = "Unk3300GCLBPDJDEDN"];*/ 13:
                    message.unk3300GCLBPDJDEDN = reader.uint32();
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
        /* uint32 name_id = 8; */
        if (message.nameId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.nameId);
        /* uint32 Unk3300_EHNBDJPANKL = 2 [json_name = "Unk3300EHNBDJPANKL"]; */
        if (message.unk3300EHNBDJPANKL !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EHNBDJPANKL);
        /* uint32 fungus_id = 3; */
        if (message.fungusId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.fungusId);
        /* bool is_cultivate = 7; */
        if (message.isCultivate !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isCultivate);
        /* uint32 Unk3300_GCLBPDJDEDN = 13 [json_name = "Unk3300GCLBPDJDEDN"]; */
        if (message.unk3300GCLBPDJDEDN !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300GCLBPDJDEDN);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusDetail
 */
exports.FungusDetail = new FungusDetail$Type();
