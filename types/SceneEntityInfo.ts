// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneEntityInfo.proto" (syntax proto3)
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
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { SceneGadgetInfo } from "./SceneGadgetInfo";
import { SceneNpcInfo } from "./SceneNpcInfo";
import { SceneMonsterInfo } from "./SceneMonsterInfo";
import { SceneAvatarInfo } from "./SceneAvatarInfo";
import { ServerBuff } from "./ServerBuff";
import { EntityAuthorityInfo } from "./EntityAuthorityInfo";
import { EntityEnvironmentInfo } from "./EntityEnvironmentInfo";
import { EntityClientData } from "./EntityClientData";
import { AnimatorParameterValueInfoPair } from "./AnimatorParameterValueInfoPair";
import { FightPropPair } from "./FightPropPair";
import { PropPair } from "./PropPair";
import { MotionInfo } from "./MotionInfo";
import { ProtEntityType } from "./ProtEntityType";
/**
 * @generated from protobuf message SceneEntityInfo
 */
export interface SceneEntityInfo {
    /**
     * @generated from protobuf field: ProtEntityType entity_type = 1;
     */
    entityType: ProtEntityType;
    /**
     * @generated from protobuf field: uint32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: MotionInfo motion_info = 4;
     */
    motionInfo?: MotionInfo;
    /**
     * @generated from protobuf field: repeated PropPair prop_list = 5;
     */
    propList: PropPair[];
    /**
     * @generated from protobuf field: repeated FightPropPair fight_prop_list = 6;
     */
    fightPropList: FightPropPair[];
    /**
     * @generated from protobuf field: uint32 life_state = 7;
     */
    lifeState: number;
    /**
     * @generated from protobuf field: repeated AnimatorParameterValueInfoPair animator_para_list = 9;
     */
    animatorParaList: AnimatorParameterValueInfoPair[];
    /**
     * @generated from protobuf field: uint32 last_move_scene_time_ms = 17;
     */
    lastMoveSceneTimeMs: number;
    /**
     * @generated from protobuf field: uint32 last_move_reliable_seq = 18;
     */
    lastMoveReliableSeq: number;
    /**
     * @generated from protobuf field: EntityClientData entity_client_data = 19;
     */
    entityClientData?: EntityClientData;
    /**
     * @generated from protobuf field: repeated EntityEnvironmentInfo entity_environment_info_list = 20;
     */
    entityEnvironmentInfoList: EntityEnvironmentInfo[];
    /**
     * @generated from protobuf field: EntityAuthorityInfo entity_authority_info = 21;
     */
    entityAuthorityInfo?: EntityAuthorityInfo;
    /**
     * @generated from protobuf field: repeated string tag_list = 22;
     */
    tagList: string[];
    /**
     * @generated from protobuf field: repeated ServerBuff server_buff_list = 23;
     */
    serverBuffList: ServerBuff[];
    /**
     * @generated from protobuf oneof: entity
     */
    entity: {
        oneofKind: "avatar";
        /**
         * @generated from protobuf field: SceneAvatarInfo avatar = 10;
         */
        avatar: SceneAvatarInfo;
    } | {
        oneofKind: "monster";
        /**
         * @generated from protobuf field: SceneMonsterInfo monster = 11;
         */
        monster: SceneMonsterInfo;
    } | {
        oneofKind: "npc";
        /**
         * @generated from protobuf field: SceneNpcInfo npc = 12;
         */
        npc: SceneNpcInfo;
    } | {
        oneofKind: "gadget";
        /**
         * @generated from protobuf field: SceneGadgetInfo gadget = 13;
         */
        gadget: SceneGadgetInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityInfo$Type extends MessageType<SceneEntityInfo> {
    constructor() {
        super("SceneEntityInfo", [
            { no: 1, name: "entity_type", kind: "enum", T: () => ["ProtEntityType", ProtEntityType, "PROT_ENTITY_TYPE_"] },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "motion_info", kind: "message", T: () => MotionInfo },
            { no: 5, name: "prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PropPair },
            { no: 6, name: "fight_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FightPropPair },
            { no: 7, name: "life_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "animator_para_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnimatorParameterValueInfoPair },
            { no: 17, name: "last_move_scene_time_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 18, name: "last_move_reliable_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "entity_client_data", kind: "message", T: () => EntityClientData },
            { no: 20, name: "entity_environment_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityEnvironmentInfo },
            { no: 21, name: "entity_authority_info", kind: "message", T: () => EntityAuthorityInfo },
            { no: 22, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 23, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ServerBuff },
            { no: 10, name: "avatar", kind: "message", oneof: "entity", T: () => SceneAvatarInfo },
            { no: 11, name: "monster", kind: "message", oneof: "entity", T: () => SceneMonsterInfo },
            { no: 12, name: "npc", kind: "message", oneof: "entity", T: () => SceneNpcInfo },
            { no: 13, name: "gadget", kind: "message", oneof: "entity", T: () => SceneGadgetInfo }
        ]);
    }
    create(value?: PartialMessage<SceneEntityInfo>): SceneEntityInfo {
        const message = { entityType: 0, entityId: 0, name: "", propList: [], fightPropList: [], lifeState: 0, animatorParaList: [], lastMoveSceneTimeMs: 0, lastMoveReliableSeq: 0, entityEnvironmentInfoList: [], tagList: [], serverBuffList: [], entity: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneEntityInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneEntityInfo): SceneEntityInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ProtEntityType entity_type */ 1:
                    message.entityType = reader.int32();
                    break;
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* string name */ 3:
                    message.name = reader.string();
                    break;
                case /* MotionInfo motion_info */ 4:
                    message.motionInfo = MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* repeated PropPair prop_list */ 5:
                    message.propList.push(PropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated FightPropPair fight_prop_list */ 6:
                    message.fightPropList.push(FightPropPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 life_state */ 7:
                    message.lifeState = reader.uint32();
                    break;
                case /* repeated AnimatorParameterValueInfoPair animator_para_list */ 9:
                    message.animatorParaList.push(AnimatorParameterValueInfoPair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_move_scene_time_ms */ 17:
                    message.lastMoveSceneTimeMs = reader.uint32();
                    break;
                case /* uint32 last_move_reliable_seq */ 18:
                    message.lastMoveReliableSeq = reader.uint32();
                    break;
                case /* EntityClientData entity_client_data */ 19:
                    message.entityClientData = EntityClientData.internalBinaryRead(reader, reader.uint32(), options, message.entityClientData);
                    break;
                case /* repeated EntityEnvironmentInfo entity_environment_info_list */ 20:
                    message.entityEnvironmentInfoList.push(EntityEnvironmentInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* EntityAuthorityInfo entity_authority_info */ 21:
                    message.entityAuthorityInfo = EntityAuthorityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityAuthorityInfo);
                    break;
                case /* repeated string tag_list */ 22:
                    message.tagList.push(reader.string());
                    break;
                case /* repeated ServerBuff server_buff_list */ 23:
                    message.serverBuffList.push(ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* SceneAvatarInfo avatar */ 10:
                    message.entity = {
                        oneofKind: "avatar",
                        avatar: SceneAvatarInfo.internalBinaryRead(reader, reader.uint32(), options, (message.entity as any).avatar)
                    };
                    break;
                case /* SceneMonsterInfo monster */ 11:
                    message.entity = {
                        oneofKind: "monster",
                        monster: SceneMonsterInfo.internalBinaryRead(reader, reader.uint32(), options, (message.entity as any).monster)
                    };
                    break;
                case /* SceneNpcInfo npc */ 12:
                    message.entity = {
                        oneofKind: "npc",
                        npc: SceneNpcInfo.internalBinaryRead(reader, reader.uint32(), options, (message.entity as any).npc)
                    };
                    break;
                case /* SceneGadgetInfo gadget */ 13:
                    message.entity = {
                        oneofKind: "gadget",
                        gadget: SceneGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, (message.entity as any).gadget)
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
    internalBinaryWrite(message: SceneEntityInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ProtEntityType entity_type = 1; */
        if (message.entityType !== 0)
            writer.tag(1, WireType.Varint).int32(message.entityType);
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.entityId);
        /* string name = 3; */
        if (message.name !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.name);
        /* MotionInfo motion_info = 4; */
        if (message.motionInfo)
            MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated PropPair prop_list = 5; */
        for (let i = 0; i < message.propList.length; i++)
            PropPair.internalBinaryWrite(message.propList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated FightPropPair fight_prop_list = 6; */
        for (let i = 0; i < message.fightPropList.length; i++)
            FightPropPair.internalBinaryWrite(message.fightPropList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 life_state = 7; */
        if (message.lifeState !== 0)
            writer.tag(7, WireType.Varint).uint32(message.lifeState);
        /* repeated AnimatorParameterValueInfoPair animator_para_list = 9; */
        for (let i = 0; i < message.animatorParaList.length; i++)
            AnimatorParameterValueInfoPair.internalBinaryWrite(message.animatorParaList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_move_scene_time_ms = 17; */
        if (message.lastMoveSceneTimeMs !== 0)
            writer.tag(17, WireType.Varint).uint32(message.lastMoveSceneTimeMs);
        /* uint32 last_move_reliable_seq = 18; */
        if (message.lastMoveReliableSeq !== 0)
            writer.tag(18, WireType.Varint).uint32(message.lastMoveReliableSeq);
        /* EntityClientData entity_client_data = 19; */
        if (message.entityClientData)
            EntityClientData.internalBinaryWrite(message.entityClientData, writer.tag(19, WireType.LengthDelimited).fork(), options).join();
        /* repeated EntityEnvironmentInfo entity_environment_info_list = 20; */
        for (let i = 0; i < message.entityEnvironmentInfoList.length; i++)
            EntityEnvironmentInfo.internalBinaryWrite(message.entityEnvironmentInfoList[i], writer.tag(20, WireType.LengthDelimited).fork(), options).join();
        /* EntityAuthorityInfo entity_authority_info = 21; */
        if (message.entityAuthorityInfo)
            EntityAuthorityInfo.internalBinaryWrite(message.entityAuthorityInfo, writer.tag(21, WireType.LengthDelimited).fork(), options).join();
        /* repeated string tag_list = 22; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(22, WireType.LengthDelimited).string(message.tagList[i]);
        /* repeated ServerBuff server_buff_list = 23; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(23, WireType.LengthDelimited).fork(), options).join();
        /* SceneAvatarInfo avatar = 10; */
        if (message.entity.oneofKind === "avatar")
            SceneAvatarInfo.internalBinaryWrite(message.entity.avatar, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* SceneMonsterInfo monster = 11; */
        if (message.entity.oneofKind === "monster")
            SceneMonsterInfo.internalBinaryWrite(message.entity.monster, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* SceneNpcInfo npc = 12; */
        if (message.entity.oneofKind === "npc")
            SceneNpcInfo.internalBinaryWrite(message.entity.npc, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* SceneGadgetInfo gadget = 13; */
        if (message.entity.oneofKind === "gadget")
            SceneGadgetInfo.internalBinaryWrite(message.entity.gadget, writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneEntityInfo
 */
export const SceneEntityInfo = new SceneEntityInfo$Type();
