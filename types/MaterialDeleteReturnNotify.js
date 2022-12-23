"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialDeleteReturnNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MaterialDeleteReturnType_1 = require("./MaterialDeleteReturnType");
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteReturnNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MaterialDeleteReturnNotify", [
            { no: 7, name: "type", kind: "enum", T: () => ["MaterialDeleteReturnType", MaterialDeleteReturnType_1.MaterialDeleteReturnType, "MATERIAL_DELETE_RETURN_TYPE_"] },
            { no: 12, name: "Unk3300_OFOKFKBALJD", kind: "map", jsonName: "Unk3300OFOKFKBALJD", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "Unk3300_LAIHDKJAHAF", kind: "map", jsonName: "Unk3300LAIHDKJAHAF", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { type: 0, unk3300OFOKFKBALJD: {}, unk3300LAIHDKJAHAF: {} };
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
                case /* MaterialDeleteReturnType type */ 7:
                    message.type = reader.int32();
                    break;
                case /* map<uint32, uint32> Unk3300_OFOKFKBALJD = 12 [json_name = "Unk3300OFOKFKBALJD"];*/ 12:
                    this.binaryReadMap12(message.unk3300OFOKFKBALJD, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_LAIHDKJAHAF = 8 [json_name = "Unk3300LAIHDKJAHAF"];*/ 8:
                    this.binaryReadMap8(message.unk3300LAIHDKJAHAF, reader, options);
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
    binaryReadMap12(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteReturnNotify.Unk3300_OFOKFKBALJD");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap8(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteReturnNotify.Unk3300_LAIHDKJAHAF");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* MaterialDeleteReturnType type = 7; */
        if (message.type !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.type);
        /* map<uint32, uint32> Unk3300_OFOKFKBALJD = 12 [json_name = "Unk3300OFOKFKBALJD"]; */
        for (let k of Object.keys(message.unk3300OFOKFKBALJD))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300OFOKFKBALJD[k]).join();
        /* map<uint32, uint32> Unk3300_LAIHDKJAHAF = 8 [json_name = "Unk3300LAIHDKJAHAF"]; */
        for (let k of Object.keys(message.unk3300LAIHDKJAHAF))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300LAIHDKJAHAF[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteReturnNotify
 */
exports.MaterialDeleteReturnNotify = new MaterialDeleteReturnNotify$Type();
