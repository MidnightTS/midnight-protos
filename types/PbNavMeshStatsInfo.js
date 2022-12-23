"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbNavMeshStatsInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PbNavMeshStatsInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PbNavMeshStatsInfo", [
            { no: 8, name: "Unk3300_MOKPJBIPHNI", kind: "scalar", jsonName: "Unk3300MOKPJBIPHNI", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "Unk3300_IMLHLJAOBLF", kind: "scalar", jsonName: "Unk3300IMLHLJAOBLF", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "Unk3300_DHJKKJLKDHB", kind: "scalar", jsonName: "Unk3300DHJKKJLKDHB", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "Unk3300_EEONKADBJME", kind: "scalar", jsonName: "Unk3300EEONKADBJME", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MOKPJBIPHNI: 0, unk3300IMLHLJAOBLF: 0, unk3300DHJKKJLKDHB: 0, unk3300EEONKADBJME: 0 };
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
                case /* int32 Unk3300_MOKPJBIPHNI = 8 [json_name = "Unk3300MOKPJBIPHNI"];*/ 8:
                    message.unk3300MOKPJBIPHNI = reader.int32();
                    break;
                case /* int32 Unk3300_IMLHLJAOBLF = 3 [json_name = "Unk3300IMLHLJAOBLF"];*/ 3:
                    message.unk3300IMLHLJAOBLF = reader.int32();
                    break;
                case /* int32 Unk3300_DHJKKJLKDHB = 15 [json_name = "Unk3300DHJKKJLKDHB"];*/ 15:
                    message.unk3300DHJKKJLKDHB = reader.int32();
                    break;
                case /* int32 Unk3300_EEONKADBJME = 13 [json_name = "Unk3300EEONKADBJME"];*/ 13:
                    message.unk3300EEONKADBJME = reader.int32();
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
        /* int32 Unk3300_MOKPJBIPHNI = 8 [json_name = "Unk3300MOKPJBIPHNI"]; */
        if (message.unk3300MOKPJBIPHNI !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.unk3300MOKPJBIPHNI);
        /* int32 Unk3300_IMLHLJAOBLF = 3 [json_name = "Unk3300IMLHLJAOBLF"]; */
        if (message.unk3300IMLHLJAOBLF !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.unk3300IMLHLJAOBLF);
        /* int32 Unk3300_DHJKKJLKDHB = 15 [json_name = "Unk3300DHJKKJLKDHB"]; */
        if (message.unk3300DHJKKJLKDHB !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.unk3300DHJKKJLKDHB);
        /* int32 Unk3300_EEONKADBJME = 13 [json_name = "Unk3300EEONKADBJME"]; */
        if (message.unk3300EEONKADBJME !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.unk3300EEONKADBJME);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PbNavMeshStatsInfo
 */
exports.PbNavMeshStatsInfo = new PbNavMeshStatsInfo$Type();
