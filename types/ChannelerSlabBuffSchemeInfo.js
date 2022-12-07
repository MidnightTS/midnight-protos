"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabBuffSchemeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabBuffSchemeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabBuffSchemeInfo", [
            { no: 9, name: "Unk3300_NCMDDAFNENO", kind: "scalar", jsonName: "Unk3300NCMDDAFNENO", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "slot_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 5, name: "Unk3300_CKMNFOCNMGL", kind: "scalar", jsonName: "Unk3300CKMNFOCNMGL", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300NCMDDAFNENO: 0, slotMap: {}, unk3300CKMNFOCNMGL: 0 };
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
                case /* uint32 Unk3300_NCMDDAFNENO = 9 [json_name = "Unk3300NCMDDAFNENO"];*/ 9:
                    message.unk3300NCMDDAFNENO = reader.uint32();
                    break;
                case /* map<uint32, uint32> slot_map */ 11:
                    this.binaryReadMap11(message.slotMap, reader, options);
                    break;
                case /* uint32 Unk3300_CKMNFOCNMGL = 5 [json_name = "Unk3300CKMNFOCNMGL"];*/ 5:
                    message.unk3300CKMNFOCNMGL = reader.uint32();
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
    binaryReadMap11(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field ChannelerSlabBuffSchemeInfo.slot_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_NCMDDAFNENO = 9 [json_name = "Unk3300NCMDDAFNENO"]; */
        if (message.unk3300NCMDDAFNENO !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300NCMDDAFNENO);
        /* map<uint32, uint32> slot_map = 11; */
        for (let k of Object.keys(message.slotMap))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.slotMap[k]).join();
        /* uint32 Unk3300_CKMNFOCNMGL = 5 [json_name = "Unk3300CKMNFOCNMGL"]; */
        if (message.unk3300CKMNFOCNMGL !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300CKMNFOCNMGL);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabBuffSchemeInfo
 */
exports.ChannelerSlabBuffSchemeInfo = new ChannelerSlabBuffSchemeInfo$Type();
