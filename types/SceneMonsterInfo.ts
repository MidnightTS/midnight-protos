// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneMonsterInfo.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FishtankFishInfo } from "./FishtankFishInfo";
import { SceneFishInfo } from "./SceneFishInfo";
import { MonsterRoute } from "./MonsterRoute";
import { MonsterBornType } from "./MonsterBornType";
import { SceneWeaponInfo } from "./SceneWeaponInfo";
/**
 * @generated from protobuf message SceneMonsterInfo
 */
export interface SceneMonsterInfo {
    /**
     * @generated from protobuf field: uint32 monster_id = 1;
     */
    monsterId: number;
    /**
     * @generated from protobuf field: uint32 group_id = 2;
     */
    groupId: number;
    /**
     * @generated from protobuf field: uint32 config_id = 3;
     */
    configId: number;
    /**
     * @generated from protobuf field: repeated SceneWeaponInfo weapon_list = 4;
     */
    weaponList: SceneWeaponInfo[];
    /**
     * @generated from protobuf field: uint32 authority_peer_id = 5;
     */
    authorityPeerId: number;
    /**
     * @generated from protobuf field: repeated uint32 affix_list = 6;
     */
    affixList: number[];
    /**
     * @generated from protobuf field: bool is_elite = 7;
     */
    isElite: boolean;
    /**
     * @generated from protobuf field: uint32 owner_entity_id = 8;
     */
    ownerEntityId: number;
    /**
     * @generated from protobuf field: uint32 summoned_tag = 9;
     */
    summonedTag: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> summon_tag_map = 10;
     */
    summonTagMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 pose_id = 11;
     */
    poseId: number;
    /**
     * @generated from protobuf field: MonsterBornType born_type = 12;
     */
    bornType: MonsterBornType;
    /**
     * @generated from protobuf field: uint32 block_id = 13;
     */
    blockId: number;
    /**
     * @generated from protobuf field: uint32 mark_flag = 14;
     */
    markFlag: number;
    /**
     * @generated from protobuf field: uint32 title_id = 15;
     */
    titleId: number;
    /**
     * @generated from protobuf field: uint32 special_name_id = 16;
     */
    specialNameId: number;
    /**
     * @generated from protobuf field: uint32 attack_target_id = 17;
     */
    attackTargetId: number;
    /**
     * @generated from protobuf field: MonsterRoute monster_route = 18;
     */
    monsterRoute?: MonsterRoute;
    /**
     * @generated from protobuf field: uint32 ai_config_id = 19;
     */
    aiConfigId: number;
    /**
     * @generated from protobuf field: uint32 level_route_id = 20;
     */
    levelRouteId: number;
    /**
     * @generated from protobuf field: uint32 init_pose_id = 21;
     */
    initPoseId: number;
    /**
     * @generated from protobuf field: bool is_light = 22;
     */
    isLight: boolean;
    /**
     * @generated from protobuf field: uint32 kill_num = 23;
     */
    killNum: number;
    /**
     * @generated from protobuf oneof: content
     */
    content: {
        oneofKind: "fishInfo";
        /**
         * @generated from protobuf field: SceneFishInfo fish_info = 50;
         */
        fishInfo: SceneFishInfo;
    } | {
        oneofKind: "fishtankFishInfo";
        /**
         * @generated from protobuf field: FishtankFishInfo fishtank_fish_info = 51;
         */
        fishtankFishInfo: FishtankFishInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneMonsterInfo$Type extends MessageType<SceneMonsterInfo> {
    constructor() {
        super("SceneMonsterInfo", [
            { no: 1, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "weapon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneWeaponInfo },
            { no: 5, name: "authority_peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_elite", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "owner_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "summoned_tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "summon_tag_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "pose_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "born_type", kind: "enum", T: () => ["MonsterBornType", MonsterBornType, "MONSTER_BORN_TYPE_"] },
            { no: 13, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "mark_flag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "title_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "special_name_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 17, name: "attack_target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "monster_route", kind: "message", T: () => MonsterRoute },
            { no: 19, name: "ai_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 20, name: "level_route_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "init_pose_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 22, name: "is_light", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "kill_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 50, name: "fish_info", kind: "message", oneof: "content", T: () => SceneFishInfo },
            { no: 51, name: "fishtank_fish_info", kind: "message", oneof: "content", T: () => FishtankFishInfo }
        ]);
    }
    create(value?: PartialMessage<SceneMonsterInfo>): SceneMonsterInfo {
        const message = { monsterId: 0, groupId: 0, configId: 0, weaponList: [], authorityPeerId: 0, affixList: [], isElite: false, ownerEntityId: 0, summonedTag: 0, summonTagMap: {}, poseId: 0, bornType: 0, blockId: 0, markFlag: 0, titleId: 0, specialNameId: 0, attackTargetId: 0, aiConfigId: 0, levelRouteId: 0, initPoseId: 0, isLight: false, killNum: 0, content: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneMonsterInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneMonsterInfo): SceneMonsterInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 monster_id */ 1:
                    message.monsterId = reader.uint32();
                    break;
                case /* uint32 group_id */ 2:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* repeated SceneWeaponInfo weapon_list */ 4:
                    message.weaponList.push(SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 authority_peer_id */ 5:
                    message.authorityPeerId = reader.uint32();
                    break;
                case /* repeated uint32 affix_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
                    break;
                case /* bool is_elite */ 7:
                    message.isElite = reader.bool();
                    break;
                case /* uint32 owner_entity_id */ 8:
                    message.ownerEntityId = reader.uint32();
                    break;
                case /* uint32 summoned_tag */ 9:
                    message.summonedTag = reader.uint32();
                    break;
                case /* map<uint32, uint32> summon_tag_map */ 10:
                    this.binaryReadMap10(message.summonTagMap, reader, options);
                    break;
                case /* uint32 pose_id */ 11:
                    message.poseId = reader.uint32();
                    break;
                case /* MonsterBornType born_type */ 12:
                    message.bornType = reader.int32();
                    break;
                case /* uint32 block_id */ 13:
                    message.blockId = reader.uint32();
                    break;
                case /* uint32 mark_flag */ 14:
                    message.markFlag = reader.uint32();
                    break;
                case /* uint32 title_id */ 15:
                    message.titleId = reader.uint32();
                    break;
                case /* uint32 special_name_id */ 16:
                    message.specialNameId = reader.uint32();
                    break;
                case /* uint32 attack_target_id */ 17:
                    message.attackTargetId = reader.uint32();
                    break;
                case /* MonsterRoute monster_route */ 18:
                    message.monsterRoute = MonsterRoute.internalBinaryRead(reader, reader.uint32(), options, message.monsterRoute);
                    break;
                case /* uint32 ai_config_id */ 19:
                    message.aiConfigId = reader.uint32();
                    break;
                case /* uint32 level_route_id */ 20:
                    message.levelRouteId = reader.uint32();
                    break;
                case /* uint32 init_pose_id */ 21:
                    message.initPoseId = reader.uint32();
                    break;
                case /* bool is_light */ 22:
                    message.isLight = reader.bool();
                    break;
                case /* uint32 kill_num */ 23:
                    message.killNum = reader.uint32();
                    break;
                case /* SceneFishInfo fish_info */ 50:
                    message.content = {
                        oneofKind: "fishInfo",
                        fishInfo: SceneFishInfo.internalBinaryRead(reader, reader.uint32(), options, (message.content as any).fishInfo)
                    };
                    break;
                case /* FishtankFishInfo fishtank_fish_info */ 51:
                    message.content = {
                        oneofKind: "fishtankFishInfo",
                        fishtankFishInfo: FishtankFishInfo.internalBinaryRead(reader, reader.uint32(), options, (message.content as any).fishtankFishInfo)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap10(map: SceneMonsterInfo["summonTagMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof SceneMonsterInfo["summonTagMap"] | undefined, val: SceneMonsterInfo["summonTagMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneMonsterInfo.summon_tag_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: SceneMonsterInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 monster_id = 1; */
        if (message.monsterId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.monsterId);
        /* uint32 group_id = 2; */
        if (message.groupId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.groupId);
        /* uint32 config_id = 3; */
        if (message.configId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.configId);
        /* repeated SceneWeaponInfo weapon_list = 4; */
        for (let i = 0; i < message.weaponList.length; i++)
            SceneWeaponInfo.internalBinaryWrite(message.weaponList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 authority_peer_id = 5; */
        if (message.authorityPeerId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.authorityPeerId);
        /* repeated uint32 affix_list = 6; */
        if (message.affixList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        /* bool is_elite = 7; */
        if (message.isElite !== false)
            writer.tag(7, WireType.Varint).bool(message.isElite);
        /* uint32 owner_entity_id = 8; */
        if (message.ownerEntityId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.ownerEntityId);
        /* uint32 summoned_tag = 9; */
        if (message.summonedTag !== 0)
            writer.tag(9, WireType.Varint).uint32(message.summonedTag);
        /* map<uint32, uint32> summon_tag_map = 10; */
        for (let k of Object.keys(message.summonTagMap))
            writer.tag(10, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.summonTagMap[k as any]).join();
        /* uint32 pose_id = 11; */
        if (message.poseId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.poseId);
        /* MonsterBornType born_type = 12; */
        if (message.bornType !== 0)
            writer.tag(12, WireType.Varint).int32(message.bornType);
        /* uint32 block_id = 13; */
        if (message.blockId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.blockId);
        /* uint32 mark_flag = 14; */
        if (message.markFlag !== 0)
            writer.tag(14, WireType.Varint).uint32(message.markFlag);
        /* uint32 title_id = 15; */
        if (message.titleId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.titleId);
        /* uint32 special_name_id = 16; */
        if (message.specialNameId !== 0)
            writer.tag(16, WireType.Varint).uint32(message.specialNameId);
        /* uint32 attack_target_id = 17; */
        if (message.attackTargetId !== 0)
            writer.tag(17, WireType.Varint).uint32(message.attackTargetId);
        /* MonsterRoute monster_route = 18; */
        if (message.monsterRoute)
            MonsterRoute.internalBinaryWrite(message.monsterRoute, writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        /* uint32 ai_config_id = 19; */
        if (message.aiConfigId !== 0)
            writer.tag(19, WireType.Varint).uint32(message.aiConfigId);
        /* uint32 level_route_id = 20; */
        if (message.levelRouteId !== 0)
            writer.tag(20, WireType.Varint).uint32(message.levelRouteId);
        /* uint32 init_pose_id = 21; */
        if (message.initPoseId !== 0)
            writer.tag(21, WireType.Varint).uint32(message.initPoseId);
        /* bool is_light = 22; */
        if (message.isLight !== false)
            writer.tag(22, WireType.Varint).bool(message.isLight);
        /* uint32 kill_num = 23; */
        if (message.killNum !== 0)
            writer.tag(23, WireType.Varint).uint32(message.killNum);
        /* SceneFishInfo fish_info = 50; */
        if (message.content.oneofKind === "fishInfo")
            SceneFishInfo.internalBinaryWrite(message.content.fishInfo, writer.tag(50, WireType.LengthDelimited).fork(), options).join();
        /* FishtankFishInfo fishtank_fish_info = 51; */
        if (message.content.oneofKind === "fishtankFishInfo")
            FishtankFishInfo.internalBinaryWrite(message.content.fishtankFishInfo, writer.tag(51, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneMonsterInfo
 */
export const SceneMonsterInfo = new SceneMonsterInfo$Type();