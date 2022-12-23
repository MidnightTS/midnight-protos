"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerLevelStarCondData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelStarCondData$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerLevelStarCondData", [
            { no: 14, name: "Unk3300_KBCFDFOAJMM", kind: "scalar", jsonName: "Unk3300KBCFDFOAJMM", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "Unk3300_CPBCNACKAAK", kind: "scalar", jsonName: "Unk3300CPBCNACKAAK", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "Unk3300_JGOLBFMJBCL", kind: "scalar", jsonName: "Unk3300JGOLBFMJBCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "cond_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KBCFDFOAJMM: false, unk3300CPBCNACKAAK: false, unk3300JGOLBFMJBCL: 0, condValue: 0 };
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
                case /* bool Unk3300_KBCFDFOAJMM = 14 [json_name = "Unk3300KBCFDFOAJMM"];*/ 14:
                    message.unk3300KBCFDFOAJMM = reader.bool();
                    break;
                case /* bool Unk3300_CPBCNACKAAK = 5 [json_name = "Unk3300CPBCNACKAAK"];*/ 5:
                    message.unk3300CPBCNACKAAK = reader.bool();
                    break;
                case /* uint32 Unk3300_JGOLBFMJBCL = 11 [json_name = "Unk3300JGOLBFMJBCL"];*/ 11:
                    message.unk3300JGOLBFMJBCL = reader.uint32();
                    break;
                case /* uint32 cond_value */ 12:
                    message.condValue = reader.uint32();
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
        /* bool Unk3300_KBCFDFOAJMM = 14 [json_name = "Unk3300KBCFDFOAJMM"]; */
        if (message.unk3300KBCFDFOAJMM !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.unk3300KBCFDFOAJMM);
        /* bool Unk3300_CPBCNACKAAK = 5 [json_name = "Unk3300CPBCNACKAAK"]; */
        if (message.unk3300CPBCNACKAAK !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.unk3300CPBCNACKAAK);
        /* uint32 Unk3300_JGOLBFMJBCL = 11 [json_name = "Unk3300JGOLBFMJBCL"]; */
        if (message.unk3300JGOLBFMJBCL !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300JGOLBFMJBCL);
        /* uint32 cond_value = 12; */
        if (message.condValue !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.condValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerLevelStarCondData
 */
exports.TowerLevelStarCondData = new TowerLevelStarCondData$Type();
