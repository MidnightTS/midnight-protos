"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerAcceptFlowerResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerAcceptFlowerResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerAcceptFlowerResultInfo", [
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_PALEJEDIAJP", kind: "map", jsonName: "Unk3300PALEJEDIAJP", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "Unk3300_ILAADDCOPKE", kind: "map", jsonName: "Unk3300ILAADDCOPKE", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { uid: 0, unk3300PALEJEDIAJP: {}, unk3300ILAADDCOPKE: {} };
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
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> Unk3300_PALEJEDIAJP = 6 [json_name = "Unk3300PALEJEDIAJP"];*/ 6:
                    this.binaryReadMap6(message.unk3300PALEJEDIAJP, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_ILAADDCOPKE = 7 [json_name = "Unk3300ILAADDCOPKE"];*/ 7:
                    this.binaryReadMap7(message.unk3300ILAADDCOPKE, reader, options);
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerAcceptFlowerResultInfo.Unk3300_PALEJEDIAJP");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerAcceptFlowerResultInfo.Unk3300_ILAADDCOPKE");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> Unk3300_PALEJEDIAJP = 6 [json_name = "Unk3300PALEJEDIAJP"]; */
        for (let k of Object.keys(message.unk3300PALEJEDIAJP))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300PALEJEDIAJP[k]).join();
        /* map<uint32, uint32> Unk3300_ILAADDCOPKE = 7 [json_name = "Unk3300ILAADDCOPKE"]; */
        for (let k of Object.keys(message.unk3300ILAADDCOPKE))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300ILAADDCOPKE[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerAcceptFlowerResultInfo
 */
exports.PlantFlowerAcceptFlowerResultInfo = new PlantFlowerAcceptFlowerResultInfo$Type();
