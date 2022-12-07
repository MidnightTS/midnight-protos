"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgAddDice = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGReason_1 = require("./GCGReason");
const GCGDiceSideType_1 = require("./GCGDiceSideType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgAddDice$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgAddDice", [
            { no: 13, name: "Unk3300_KFKOGOKPIFN", kind: "map", jsonName: "Unk3300KFKOGOKPIFN", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["GCGDiceSideType", GCGDiceSideType_1.GCGDiceSideType] } },
            { no: 10, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason_1.GCGReason] },
            { no: 6, name: "change_count", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "Unk3300_PCMPCCLFEIM", kind: "map", jsonName: "Unk3300PCMPCCLFEIM", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["GCGDiceSideType", GCGDiceSideType_1.GCGDiceSideType] } },
            { no: 5, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300KFKOGOKPIFN: {}, reason: 0, changeCount: 0, unk3300PCMPCCLFEIM: {}, controllerId: 0 };
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
                case /* map<uint32, GCGDiceSideType> Unk3300_KFKOGOKPIFN = 13 [json_name = "Unk3300KFKOGOKPIFN"];*/ 13:
                    this.binaryReadMap13(message.unk3300KFKOGOKPIFN, reader, options);
                    break;
                case /* GCGReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* int32 change_count */ 6:
                    message.changeCount = reader.int32();
                    break;
                case /* map<uint32, GCGDiceSideType> Unk3300_PCMPCCLFEIM = 11 [json_name = "Unk3300PCMPCCLFEIM"];*/ 11:
                    this.binaryReadMap11(message.unk3300PCMPCCLFEIM, reader, options);
                    break;
                case /* uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
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
    binaryReadMap13(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGMsgAddDice.Unk3300_KFKOGOKPIFN");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGMsgAddDice.Unk3300_PCMPCCLFEIM");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, GCGDiceSideType> Unk3300_KFKOGOKPIFN = 13 [json_name = "Unk3300KFKOGOKPIFN"]; */
        for (let k of Object.keys(message.unk3300KFKOGOKPIFN))
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.unk3300KFKOGOKPIFN[k]).join();
        /* GCGReason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.reason);
        /* int32 change_count = 6; */
        if (message.changeCount !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.changeCount);
        /* map<uint32, GCGDiceSideType> Unk3300_PCMPCCLFEIM = 11 [json_name = "Unk3300PCMPCCLFEIM"]; */
        for (let k of Object.keys(message.unk3300PCMPCCLFEIM))
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.unk3300PCMPCCLFEIM[k]).join();
        /* uint32 controller_id = 5; */
        if (message.controllerId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgAddDice
 */
exports.GCGMsgAddDice = new GCGMsgAddDice$Type();
