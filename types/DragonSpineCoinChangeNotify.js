"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSpineCoinChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DragonSpineCoinChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DragonSpineCoinChangeNotify", [
            { no: 11, name: "Unk3300_IMLKIJAOADF", kind: "scalar", jsonName: "Unk3300IMLKIJAOADF", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_FOHJDGCAKEK", kind: "scalar", jsonName: "Unk3300FOHJDGCAKEK", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_NEOCMGJCEOJ", kind: "scalar", jsonName: "Unk3300NEOCMGJCEOJ", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IMLKIJAOADF: 0, scheduleId: 0, unk3300FOHJDGCAKEK: 0, unk3300NEOCMGJCEOJ: 0 };
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
                case /* uint32 Unk3300_IMLKIJAOADF = 11 [json_name = "Unk3300IMLKIJAOADF"];*/ 11:
                    message.unk3300IMLKIJAOADF = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 15:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 Unk3300_FOHJDGCAKEK = 3 [json_name = "Unk3300FOHJDGCAKEK"];*/ 3:
                    message.unk3300FOHJDGCAKEK = reader.uint32();
                    break;
                case /* uint32 Unk3300_NEOCMGJCEOJ = 2 [json_name = "Unk3300NEOCMGJCEOJ"];*/ 2:
                    message.unk3300NEOCMGJCEOJ = reader.uint32();
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
        /* uint32 Unk3300_IMLKIJAOADF = 11 [json_name = "Unk3300IMLKIJAOADF"]; */
        if (message.unk3300IMLKIJAOADF !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300IMLKIJAOADF);
        /* uint32 schedule_id = 15; */
        if (message.scheduleId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 Unk3300_FOHJDGCAKEK = 3 [json_name = "Unk3300FOHJDGCAKEK"]; */
        if (message.unk3300FOHJDGCAKEK !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300FOHJDGCAKEK);
        /* uint32 Unk3300_NEOCMGJCEOJ = 2 [json_name = "Unk3300NEOCMGJCEOJ"]; */
        if (message.unk3300NEOCMGJCEOJ !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300NEOCMGJCEOJ);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DragonSpineCoinChangeNotify
 */
exports.DragonSpineCoinChangeNotify = new DragonSpineCoinChangeNotify$Type();
