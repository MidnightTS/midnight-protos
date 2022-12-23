"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityAcceptGiftResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityAcceptGiftResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityAcceptGiftResultInfo", [
            { no: 1, name: "Unk3300_JFHLEBLOFMA", kind: "map", jsonName: "Unk3300JFHLEBLOFMA", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "Unk3300_COCFNBJCFGP", kind: "map", jsonName: "Unk3300COCFNBJCFGP", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300JFHLEBLOFMA: {}, unk3300COCFNBJCFGP: {}, uid: 0 };
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
                case /* map<uint32, uint32> Unk3300_JFHLEBLOFMA = 1 [json_name = "Unk3300JFHLEBLOFMA"];*/ 1:
                    this.binaryReadMap1(message.unk3300JFHLEBLOFMA, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_COCFNBJCFGP = 9 [json_name = "Unk3300COCFNBJCFGP"];*/ 9:
                    this.binaryReadMap9(message.unk3300COCFNBJCFGP, reader, options);
                    break;
                case /* uint32 uid */ 12:
                    message.uid = reader.uint32();
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
    binaryReadMap1(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field ActivityAcceptGiftResultInfo.Unk3300_JFHLEBLOFMA");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap9(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field ActivityAcceptGiftResultInfo.Unk3300_COCFNBJCFGP");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> Unk3300_JFHLEBLOFMA = 1 [json_name = "Unk3300JFHLEBLOFMA"]; */
        for (let k of Object.keys(message.unk3300JFHLEBLOFMA))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300JFHLEBLOFMA[k]).join();
        /* map<uint32, uint32> Unk3300_COCFNBJCFGP = 9 [json_name = "Unk3300COCFNBJCFGP"]; */
        for (let k of Object.keys(message.unk3300COCFNBJCFGP))
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300COCFNBJCFGP[k]).join();
        /* uint32 uid = 12; */
        if (message.uid !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityAcceptGiftResultInfo
 */
exports.ActivityAcceptGiftResultInfo = new ActivityAcceptGiftResultInfo$Type();
