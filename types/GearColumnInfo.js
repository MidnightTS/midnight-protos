"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearColumnInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GearColumnInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GearColumnInfo", [
            { no: 6, name: "Unk3300_GHIBPOIAIGF", kind: "scalar", jsonName: "Unk3300GHIBPOIAIGF", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KEEGLHMBAKM", kind: "scalar", jsonName: "Unk3300KEEGLHMBAKM", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_EDLLMBGNDEH", kind: "scalar", jsonName: "Unk3300EDLLMBGNDEH", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gear_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HGIKKDOBANK", kind: "scalar", jsonName: "Unk3300HGIKKDOBANK", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300GHIBPOIAIGF: 0, unk3300KEEGLHMBAKM: false, unk3300EDLLMBGNDEH: 0, gearId: 0, unk3300HGIKKDOBANK: false };
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
                case /* uint32 Unk3300_GHIBPOIAIGF = 6 [json_name = "Unk3300GHIBPOIAIGF"];*/ 6:
                    message.unk3300GHIBPOIAIGF = reader.uint32();
                    break;
                case /* bool Unk3300_KEEGLHMBAKM = 8 [json_name = "Unk3300KEEGLHMBAKM"];*/ 8:
                    message.unk3300KEEGLHMBAKM = reader.bool();
                    break;
                case /* uint32 Unk3300_EDLLMBGNDEH = 2 [json_name = "Unk3300EDLLMBGNDEH"];*/ 2:
                    message.unk3300EDLLMBGNDEH = reader.uint32();
                    break;
                case /* uint32 gear_id */ 7:
                    message.gearId = reader.uint32();
                    break;
                case /* bool Unk3300_HGIKKDOBANK = 15 [json_name = "Unk3300HGIKKDOBANK"];*/ 15:
                    message.unk3300HGIKKDOBANK = reader.bool();
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
        /* uint32 Unk3300_GHIBPOIAIGF = 6 [json_name = "Unk3300GHIBPOIAIGF"]; */
        if (message.unk3300GHIBPOIAIGF !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300GHIBPOIAIGF);
        /* bool Unk3300_KEEGLHMBAKM = 8 [json_name = "Unk3300KEEGLHMBAKM"]; */
        if (message.unk3300KEEGLHMBAKM !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300KEEGLHMBAKM);
        /* uint32 Unk3300_EDLLMBGNDEH = 2 [json_name = "Unk3300EDLLMBGNDEH"]; */
        if (message.unk3300EDLLMBGNDEH !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300EDLLMBGNDEH);
        /* uint32 gear_id = 7; */
        if (message.gearId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gearId);
        /* bool Unk3300_HGIKKDOBANK = 15 [json_name = "Unk3300HGIKKDOBANK"]; */
        if (message.unk3300HGIKKDOBANK !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.unk3300HGIKKDOBANK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearColumnInfo
 */
exports.GearColumnInfo = new GearColumnInfo$Type();
