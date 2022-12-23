"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponAwakenRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WeaponAwakenRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WeaponAwakenRsp", [
            { no: 3, name: "cur_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "old_affix_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "target_weapon_awaken_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curAffixLevelMap: {}, avatarGuid: 0n, retcode: 0, targetWeaponGuid: 0n, oldAffixLevelMap: {}, targetWeaponAwakenLevel: 0 };
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
                case /* map<uint32, uint32> cur_affix_level_map */ 3:
                    this.binaryReadMap3(message.curAffixLevelMap, reader, options);
                    break;
                case /* uint64 avatar_guid */ 8:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 target_weapon_guid */ 14:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> old_affix_level_map */ 15:
                    this.binaryReadMap15(message.oldAffixLevelMap, reader, options);
                    break;
                case /* uint32 target_weapon_awaken_level */ 2:
                    message.targetWeaponAwakenLevel = reader.uint32();
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
    binaryReadMap3(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.cur_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap15(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.old_affix_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> cur_affix_level_map = 3; */
        for (let k of Object.keys(message.curAffixLevelMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.curAffixLevelMap[k]).join();
        /* uint64 avatar_guid = 8; */
        if (message.avatarGuid !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 target_weapon_guid = 14; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* map<uint32, uint32> old_affix_level_map = 15; */
        for (let k of Object.keys(message.oldAffixLevelMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.oldAffixLevelMap[k]).join();
        /* uint32 target_weapon_awaken_level = 2; */
        if (message.targetWeaponAwakenLevel !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.targetWeaponAwakenLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponAwakenRsp
 */
exports.WeaponAwakenRsp = new WeaponAwakenRsp$Type();
