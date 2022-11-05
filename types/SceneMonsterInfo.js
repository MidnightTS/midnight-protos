"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneMonsterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FishtankFishInfo_1 = require("./FishtankFishInfo");
const SceneFishInfo_1 = require("./SceneFishInfo");
const MonsterRoute_1 = require("./MonsterRoute");
const MonsterBornType_1 = require("./MonsterBornType");
const SceneWeaponInfo_1 = require("./SceneWeaponInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneMonsterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneMonsterInfo", [
            { no: 1, name: "monster_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weapon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneWeaponInfo_1.SceneWeaponInfo },
            { no: 5, name: "authority_peer_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_elite", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "owner_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "summoned_tag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "summon_tag_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "pose_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "born_type", kind: "enum", opt: true, T: () => ["com.midnights.game.MonsterBornType", MonsterBornType_1.MonsterBornType] },
            { no: 13, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mark_flag", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "title_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "special_name_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "attack_target_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "monster_route", kind: "message", T: () => MonsterRoute_1.MonsterRoute },
            { no: 19, name: "ai_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "level_route_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "init_pose_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "is_light", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "kill_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 50, name: "fish_info", kind: "message", oneof: "content", T: () => SceneFishInfo_1.SceneFishInfo },
            { no: 51, name: "fishtank_fish_info", kind: "message", oneof: "content", T: () => FishtankFishInfo_1.FishtankFishInfo }
        ]);
    }
    create(value) {
        const message = { weaponList: [], affixList: [], summonTagMap: {}, content: { oneofKind: undefined } };
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
                case /* optional uint32 monster_id */ 1:
                    message.monsterId = reader.uint32();
                    break;
                case /* optional uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* optional uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.SceneWeaponInfo weapon_list */ 4:
                    message.weaponList.push(SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 authority_peer_id */ 5:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                case /* optional bool is_elite */ 7:
                    message.isElite = reader.bool();
                    break;
                case /* optional uint32 owner_entity_id */ 8:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* optional uint32 summoned_tag */ 9:
                    message.summonedTag = reader.uint32();
                    break;
                case /* map<uint32, uint32> summon_tag_map */ 10:
                    this.binaryReadMap10(message.summonTagMap, reader, options);
                    break;
                case /* optional uint32 pose_id */ 11:
                    message.poseId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MonsterBornType born_type */ 12:
                    message.bornType = reader.int32();
                    break;
                case /* optional uint32 block_id */ 13:
                    message.blockId = reader.uint32();
                    break;
                case /* optional uint32 mark_flag */ 14:
                    message.markFlag = reader.uint32();
                    break;
                case /* optional uint32 title_id */ 15:
                    message.titleId = reader.uint32();
                    break;
                case /* optional uint32 special_name_id */ 16:
                    message.specialNameId = reader.uint32();
                    break;
                case /* optional uint32 attack_target_id */ 17:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* optional com.midnights.game.MonsterRoute monster_route */ 18:
                    message.monsterRoute = MonsterRoute_1.MonsterRoute.internalBinaryRead(reader, reader.uint32(), options, message.monsterRoute);
                    break;
                case /* optional uint32 ai_config_id */ 19:
                    message.aiConfigId = reader.uint32();
                    break;
                case /* optional uint32 level_route_id */ 20:
                    message.levelRouteId = reader.uint32();
                    break;
                case /* optional uint32 init_pose_id */ 21:
                    message.initPoseId = reader.uint32();
                    break;
                case /* optional bool is_light */ 22:
                    message.isLight = reader.bool();
                    break;
                case /* optional uint32 kill_num */ 23:
                    message.killNum = reader.uint32();
                    break;
                case /* com.midnights.game.SceneFishInfo fish_info */ 50:
                    message.content = {
                        oneofKind: "fishInfo",
                        fishInfo: SceneFishInfo_1.SceneFishInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishInfo)
                    };
                    break;
                case /* com.midnights.game.FishtankFishInfo fishtank_fish_info */ 51:
                    message.content = {
                        oneofKind: "fishtankFishInfo",
                        fishtankFishInfo: FishtankFishInfo_1.FishtankFishInfo.internalBinaryRead(reader, reader.uint32(), options, message.content.fishtankFishInfo)
                    };
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
    binaryReadMap10(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneMonsterInfo.summon_tag_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 monster_id = 1; */
        if (message.monsterId !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.monsterId);
        /* optional uint32 group_id = 2; */
        if (message.groupId !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.groupId);
        /* optional uint32 config_id = 3; */
        if (message.configId !== undefined)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.configId);
        /* repeated com.midnights.game.SceneWeaponInfo weapon_list = 4; */
        for (let i = 0; i < message.weaponList.length; i++)
            SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryWrite(message.weaponList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 authority_peer_id = 5; */
        if (message.authorityPeerId !== undefined)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.authorityPeerId);
        /* repeated uint32 affix_list = 6; */
        if (message.affixList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        /* optional bool is_elite = 7; */
        if (message.isElite !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isElite);
        /* optional uint32 owner_entity_id = 8; */
        if (message.ownerEntityId !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.ownerEntityId);
        /* optional uint32 summoned_tag = 9; */
        if (message.summonedTag !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.summonedTag);
        /* map<uint32, uint32> summon_tag_map = 10; */
        for (let k of Object.keys(message.summonTagMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.summonTagMap[k]).join();
        /* optional uint32 pose_id = 11; */
        if (message.poseId !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.poseId);
        /* optional com.midnights.game.MonsterBornType born_type = 12; */
        if (message.bornType !== undefined)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.bornType);
        /* optional uint32 block_id = 13; */
        if (message.blockId !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.blockId);
        /* optional uint32 mark_flag = 14; */
        if (message.markFlag !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.markFlag);
        /* optional uint32 title_id = 15; */
        if (message.titleId !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.titleId);
        /* optional uint32 special_name_id = 16; */
        if (message.specialNameId !== undefined)
            writer.tag(16, runtime_2.WireType.Varint).uint32(message.specialNameId);
        /* optional uint32 attack_target_id = 17; */
        if (message.attackTargetId !== undefined)
            writer.tag(17, runtime_2.WireType.Varint).uint32(message.attackTargetId);
        /* optional com.midnights.game.MonsterRoute monster_route = 18; */
        if (message.monsterRoute)
            MonsterRoute_1.MonsterRoute.internalBinaryWrite(message.monsterRoute, writer.tag(18, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 ai_config_id = 19; */
        if (message.aiConfigId !== undefined)
            writer.tag(19, runtime_2.WireType.Varint).uint32(message.aiConfigId);
        /* optional uint32 level_route_id = 20; */
        if (message.levelRouteId !== undefined)
            writer.tag(20, runtime_2.WireType.Varint).uint32(message.levelRouteId);
        /* optional uint32 init_pose_id = 21; */
        if (message.initPoseId !== undefined)
            writer.tag(21, runtime_2.WireType.Varint).uint32(message.initPoseId);
        /* optional bool is_light = 22; */
        if (message.isLight !== undefined)
            writer.tag(22, runtime_2.WireType.Varint).bool(message.isLight);
        /* optional uint32 kill_num = 23; */
        if (message.killNum !== undefined)
            writer.tag(23, runtime_2.WireType.Varint).uint32(message.killNum);
        /* com.midnights.game.SceneFishInfo fish_info = 50; */
        if (message.content.oneofKind === "fishInfo")
            SceneFishInfo_1.SceneFishInfo.internalBinaryWrite(message.content.fishInfo, writer.tag(50, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.FishtankFishInfo fishtank_fish_info = 51; */
        if (message.content.oneofKind === "fishtankFishInfo")
            FishtankFishInfo_1.FishtankFishInfo.internalBinaryWrite(message.content.fishtankFishInfo, writer.tag(51, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneMonsterInfo
 */
exports.SceneMonsterInfo = new SceneMonsterInfo$Type();
