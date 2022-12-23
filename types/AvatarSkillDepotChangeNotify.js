"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarSkillDepotChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarSkillDepotChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarSkillDepotChangeNotify", [
            { no: 9, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 1, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 13, name: "skill_depot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "talent_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "core_proud_skill_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { proudSkillExtraLevelMap: {}, proudSkillList: [], entityId: 0, avatarGuid: 0n, skillLevelMap: {}, skillDepotId: 0, talentIdList: [], coreProudSkillLevel: 0 };
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
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 9:
                    this.binaryReadMap9(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated uint32 proud_skill_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.proudSkillList.push(reader.uint32());
                    else
                        message.proudSkillList.push(reader.uint32());
                    break;
                case /* uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* uint64 avatar_guid */ 7:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, uint32> skill_level_map */ 1:
                    this.binaryReadMap1(message.skillLevelMap, reader, options);
                    break;
                case /* uint32 skill_depot_id */ 13:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* repeated uint32 talent_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* uint32 core_proud_skill_level */ 15:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
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
                default: throw new globalThis.Error("unknown map entry field for field AvatarSkillDepotChangeNotify.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                default: throw new globalThis.Error("unknown map entry field for field AvatarSkillDepotChangeNotify.skill_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> proud_skill_extra_level_map = 9; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated uint32 proud_skill_list = 3; */
        if (message.proudSkillList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.proudSkillList.length; i++)
                writer.uint32(message.proudSkillList[i]);
            writer.join();
        }
        /* uint32 entity_id = 5; */
        if (message.entityId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.entityId);
        /* uint64 avatar_guid = 7; */
        if (message.avatarGuid !== 0n)
            writer.tag(7, runtime_2.WireType.Varint).uint64(message.avatarGuid);
        /* map<uint32, uint32> skill_level_map = 1; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* uint32 skill_depot_id = 13; */
        if (message.skillDepotId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* repeated uint32 talent_id_list = 14; */
        if (message.talentIdList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talentIdList.length; i++)
                writer.uint32(message.talentIdList[i]);
            writer.join();
        }
        /* uint32 core_proud_skill_level = 15; */
        if (message.coreProudSkillLevel !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarSkillDepotChangeNotify
 */
exports.AvatarSkillDepotChangeNotify = new AvatarSkillDepotChangeNotify$Type();
