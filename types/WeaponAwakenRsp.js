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
            { no: 3, name: "Unk3300_IKJALGGLHOM", kind: "map", jsonName: "Unk3300IKJALGGLHOM", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 8, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "Unk3300_AMMAMKJDEMG", kind: "map", jsonName: "Unk3300AMMAMKJDEMG", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "target_weapon_awaken_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IKJALGGLHOM: {}, avatarGuid: 0n, retcode: 0, targetWeaponGuid: 0n, unk3300AMMAMKJDEMG: {}, targetWeaponAwakenLevel: 0 };
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
                case /* map<uint32, uint32> Unk3300_IKJALGGLHOM = 3 [json_name = "Unk3300IKJALGGLHOM"];*/ 3:
                    this.binaryReadMap3(message.unk3300IKJALGGLHOM, reader, options);
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
                case /* map<uint32, uint32> Unk3300_AMMAMKJDEMG = 15 [json_name = "Unk3300AMMAMKJDEMG"];*/ 15:
                    this.binaryReadMap15(message.unk3300AMMAMKJDEMG, reader, options);
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
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.Unk3300_IKJALGGLHOM");
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
                default: throw new globalThis.Error("unknown map entry field for field WeaponAwakenRsp.Unk3300_AMMAMKJDEMG");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> Unk3300_IKJALGGLHOM = 3 [json_name = "Unk3300IKJALGGLHOM"]; */
        for (let k of Object.keys(message.unk3300IKJALGGLHOM))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300IKJALGGLHOM[k]).join();
        /* uint64 avatar_guid = 8; */
        if (message.avatarGuid !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint64 target_weapon_guid = 14; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* map<uint32, uint32> Unk3300_AMMAMKJDEMG = 15 [json_name = "Unk3300AMMAMKJDEMG"]; */
        for (let k of Object.keys(message.unk3300AMMAMKJDEMG))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.unk3300AMMAMKJDEMG[k]).join();
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
