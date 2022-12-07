"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarUpgradeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarUpgradeRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_OIMPFCDCDGA", kind: "map", jsonName: "Unk3300OIMPFCDCDGA", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 6, name: "Unk3300_BFNHHNKOLBH", kind: "map", jsonName: "Unk3300BFNHHNKOLBH", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 12, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, avatarGuid: 0n, curLevel: 0, unk3300OIMPFCDCDGA: {}, unk3300BFNHHNKOLBH: {}, oldLevel: 0 };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 avatar_guid */ 14:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_level */ 9:
                    message.curLevel = reader.uint32();
                    break;
                case /* map<uint32, float> Unk3300_OIMPFCDCDGA = 13 [json_name = "Unk3300OIMPFCDCDGA"];*/ 13:
                    this.binaryReadMap13(message.unk3300OIMPFCDCDGA, reader, options);
                    break;
                case /* map<uint32, float> Unk3300_BFNHHNKOLBH = 6 [json_name = "Unk3300BFNHHNKOLBH"];*/ 6:
                    this.binaryReadMap6(message.unk3300BFNHHNKOLBH, reader, options);
                    break;
                case /* uint32 old_level */ 12:
                    message.oldLevel = reader.uint32();
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
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarUpgradeRsp.Unk3300_OIMPFCDCDGA");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarUpgradeRsp.Unk3300_BFNHHNKOLBH");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 avatar_guid = 14; */
        if (message.avatarGuid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 cur_level = 9; */
        if (message.curLevel !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* map<uint32, float> Unk3300_OIMPFCDCDGA = 13 [json_name = "Unk3300OIMPFCDCDGA"]; */
        for (let k of Object.keys(message.unk3300OIMPFCDCDGA))
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.unk3300OIMPFCDCDGA[k]).join();
        /* map<uint32, float> Unk3300_BFNHHNKOLBH = 6 [json_name = "Unk3300BFNHHNKOLBH"]; */
        for (let k of Object.keys(message.unk3300BFNHHNKOLBH))
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.unk3300BFNHHNKOLBH[k]).join();
        /* uint32 old_level = 12; */
        if (message.oldLevel !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.oldLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarUpgradeRsp
 */
exports.AvatarUpgradeRsp = new AvatarUpgradeRsp$Type();
