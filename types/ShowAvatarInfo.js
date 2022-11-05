"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowAvatarInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExcelInfo_1 = require("./AvatarExcelInfo");
const AvatarFetterInfo_1 = require("./AvatarFetterInfo");
const ShowEquip_1 = require("./ShowEquip");
const PropValue_1 = require("./PropValue");
// @generated message type with reflection information, may provide speed optimized methods
class ShowAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowAvatarInfo", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue_1.PropValue } },
            { no: 3, name: "talent_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 5, name: "skill_depot_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "core_proud_skill_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "inherent_proud_skill_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "skill_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "proud_skill_extra_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 10, name: "equip_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ShowEquip_1.ShowEquip },
            { no: 11, name: "fetter_info", kind: "message", T: () => AvatarFetterInfo_1.AvatarFetterInfo },
            { no: 12, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "excel_info", kind: "message", T: () => AvatarExcelInfo_1.AvatarExcelInfo }
        ]);
    }
    create(value) {
        const message = { propMap: {}, talentIdList: [], fightPropMap: {}, inherentProudSkillList: [], skillLevelMap: {}, proudSkillExtraLevelMap: {}, equipList: [] };
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
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 2:
                    this.binaryReadMap2(message.propMap, reader, options);
                    break;
                case /* repeated uint32 talent_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.talentIdList.push(reader.uint32());
                    else
                        message.talentIdList.push(reader.uint32());
                    break;
                case /* map<uint32, float> fight_prop_map */ 4:
                    this.binaryReadMap4(message.fightPropMap, reader, options);
                    break;
                case /* optional uint32 skill_depot_id */ 5:
                    message.skillDepotId = reader.uint32();
                    break;
                case /* optional uint32 core_proud_skill_level */ 6:
                    message.coreProudSkillLevel = reader.uint32();
                    break;
                case /* repeated uint32 inherent_proud_skill_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.inherentProudSkillList.push(reader.uint32());
                    else
                        message.inherentProudSkillList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> skill_level_map */ 8:
                    this.binaryReadMap8(message.skillLevelMap, reader, options);
                    break;
                case /* map<uint32, uint32> proud_skill_extra_level_map */ 9:
                    this.binaryReadMap9(message.proudSkillExtraLevelMap, reader, options);
                    break;
                case /* repeated com.midnights.game.ShowEquip equip_list */ 10:
                    message.equipList.push(ShowEquip_1.ShowEquip.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional com.midnights.game.AvatarFetterInfo fetter_info */ 11:
                    message.fetterInfo = AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryRead(reader, reader.uint32(), options, message.fetterInfo);
                    break;
                case /* optional uint32 costume_id */ 12:
                    message.costumeId = reader.uint32();
                    break;
                case /* optional com.midnights.game.AvatarExcelInfo excel_info */ 13:
                    message.excelInfo = AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryRead(reader, reader.uint32(), options, message.excelInfo);
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue_1.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue_1.PropValue.create();
    }
    binaryReadMap4(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.fight_prop_map");
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.skill_level_map");
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.ShowAvatarInfo.proud_skill_extra_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.avatarId);
        /* map<uint32, com.midnights.game.PropValue> prop_map = 2; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            PropValue_1.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 talent_id_list = 3; */
        if (message.talentIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.talentIdList.length; i++)
                writer.uint32(message.talentIdList[i]);
            writer.join();
        }
        /* map<uint32, float> fight_prop_map = 4; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional uint32 skill_depot_id = 5; */
        if (message.skillDepotId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.skillDepotId);
        /* optional uint32 core_proud_skill_level = 6; */
        if (message.coreProudSkillLevel !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.coreProudSkillLevel);
        /* repeated uint32 inherent_proud_skill_list = 7; */
        if (message.inherentProudSkillList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.inherentProudSkillList.length; i++)
                writer.uint32(message.inherentProudSkillList[i]);
            writer.join();
        }
        /* map<uint32, uint32> skill_level_map = 8; */
        for (let k of Object.keys(message.skillLevelMap))
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.skillLevelMap[k]).join();
        /* map<uint32, uint32> proud_skill_extra_level_map = 9; */
        for (let k of Object.keys(message.proudSkillExtraLevelMap))
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.proudSkillExtraLevelMap[k]).join();
        /* repeated com.midnights.game.ShowEquip equip_list = 10; */
        for (let i = 0; i < message.equipList.length; i++)
            ShowEquip_1.ShowEquip.internalBinaryWrite(message.equipList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AvatarFetterInfo fetter_info = 11; */
        if (message.fetterInfo)
            AvatarFetterInfo_1.AvatarFetterInfo.internalBinaryWrite(message.fetterInfo, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 costume_id = 12; */
        if (message.costumeId !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.costumeId);
        /* optional com.midnights.game.AvatarExcelInfo excel_info = 13; */
        if (message.excelInfo)
            AvatarExcelInfo_1.AvatarExcelInfo.internalBinaryWrite(message.excelInfo, writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowAvatarInfo
 */
exports.ShowAvatarInfo = new ShowAvatarInfo$Type();
