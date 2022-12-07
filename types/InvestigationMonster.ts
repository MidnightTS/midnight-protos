// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "InvestigationMonster.proto" (syntax proto3)
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
import { WeeklyBossResinDiscountInfo } from "./WeeklyBossResinDiscountInfo";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message InvestigationMonster
 */
export interface InvestigationMonster {
    /**
     * @generated from protobuf field: bool is_alive = 13;
     */
    isAlive: boolean;
    /**
     * @generated from protobuf field: Vector pos = 7;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: uint32 scene_id = 12;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 next_refresh_time = 8;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: uint32 city_id = 14;
     */
    cityId: number;
    /**
     * @generated from protobuf field: uint32 group_id = 1735;
     */
    groupId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_ONLALCCKIEE = 1 [json_name = "Unk3300ONLALCCKIEE"];
     */
    unk3300ONLALCCKIEE: number;
    /**
     * @generated from protobuf field: WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 3;
     */
    weeklyBossResinDiscountInfo?: WeeklyBossResinDiscountInfo;
    /**
     * @generated from protobuf field: uint32 Unk3300_DKKOBDIEKPP = 6 [json_name = "Unk3300DKKOBDIEKPP"];
     */
    unk3300DKKOBDIEKPP: number;
    /**
     * @generated from protobuf field: uint32 id = 9;
     */
    id: number;
    /**
     * @generated from protobuf field: uint32 monster_id = 562;
     */
    monsterId: number;
    /**
     * @generated from protobuf field: InvestigationMonster.LockState lock_state = 4;
     */
    lockState: InvestigationMonster_LockState;
    /**
     * @generated from protobuf field: uint32 Unk3300_JHLEHEOOGGB = 10 [json_name = "Unk3300JHLEHEOOGGB"];
     */
    unk3300JHLEHEOOGGB: number;
    /**
     * @generated from protobuf field: bool is_area_locked = 5;
     */
    isAreaLocked: boolean;
    /**
     * @generated from protobuf field: uint32 level = 2;
     */
    level: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_KNKFCOKMECI = 11 [json_name = "Unk3300KNKFCOKMECI"];
     */
    unk3300KNKFCOKMECI: number;
    /**
     * @generated from protobuf field: uint32 resin = 15;
     */
    resin: number;
}
/**
 * @generated from protobuf enum InvestigationMonster.LockState
 */
export enum InvestigationMonster_LockState {
    /**
     * @generated from protobuf enum value: LOCK_STATE_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: LOCK_STATE_QUEST = 1;
     */
    QUEST = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationMonster$Type extends MessageType<InvestigationMonster> {
    constructor() {
        super("InvestigationMonster", [
            { no: 13, name: "is_alive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "pos", kind: "message", T: () => Vector },
            { no: 12, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1735, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_ONLALCCKIEE", kind: "scalar", jsonName: "Unk3300ONLALCCKIEE", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "weekly_boss_resin_discount_info", kind: "message", T: () => WeeklyBossResinDiscountInfo },
            { no: 6, name: "Unk3300_DKKOBDIEKPP", kind: "scalar", jsonName: "Unk3300DKKOBDIEKPP", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 562, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "lock_state", kind: "enum", T: () => ["InvestigationMonster.LockState", InvestigationMonster_LockState, "LOCK_STATE_"] },
            { no: 10, name: "Unk3300_JHLEHEOOGGB", kind: "scalar", jsonName: "Unk3300JHLEHEOOGGB", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_area_locked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_KNKFCOKMECI", kind: "scalar", jsonName: "Unk3300KNKFCOKMECI", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InvestigationMonster>): InvestigationMonster {
        const message = { isAlive: false, sceneId: 0, nextRefreshTime: 0, cityId: 0, groupId: 0, unk3300ONLALCCKIEE: 0, unk3300DKKOBDIEKPP: 0, id: 0, monsterId: 0, lockState: 0, unk3300JHLEHEOOGGB: 0, isAreaLocked: false, level: 0, unk3300KNKFCOKMECI: 0, resin: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InvestigationMonster>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InvestigationMonster): InvestigationMonster {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_alive */ 13:
                    message.isAlive = reader.bool();
                    break;
                case /* Vector pos */ 7:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 8:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 group_id */ 1735:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 Unk3300_ONLALCCKIEE = 1 [json_name = "Unk3300ONLALCCKIEE"];*/ 1:
                    message.unk3300ONLALCCKIEE = reader.uint32();
                    break;
                case /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 3:
                    message.weeklyBossResinDiscountInfo = WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* uint32 Unk3300_DKKOBDIEKPP = 6 [json_name = "Unk3300DKKOBDIEKPP"];*/ 6:
                    message.unk3300DKKOBDIEKPP = reader.uint32();
                    break;
                case /* uint32 id */ 9:
                    message.id = reader.uint32();
                    break;
                case /* uint32 monster_id */ 562:
                    message.monsterId = reader.uint32();
                    break;
                case /* InvestigationMonster.LockState lock_state */ 4:
                    message.lockState = reader.int32();
                    break;
                case /* uint32 Unk3300_JHLEHEOOGGB = 10 [json_name = "Unk3300JHLEHEOOGGB"];*/ 10:
                    message.unk3300JHLEHEOOGGB = reader.uint32();
                    break;
                case /* bool is_area_locked */ 5:
                    message.isAreaLocked = reader.bool();
                    break;
                case /* uint32 level */ 2:
                    message.level = reader.uint32();
                    break;
                case /* uint32 Unk3300_KNKFCOKMECI = 11 [json_name = "Unk3300KNKFCOKMECI"];*/ 11:
                    message.unk3300KNKFCOKMECI = reader.uint32();
                    break;
                case /* uint32 resin */ 15:
                    message.resin = reader.uint32();
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
    internalBinaryWrite(message: InvestigationMonster, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_alive = 13; */
        if (message.isAlive !== false)
            writer.tag(13, WireType.Varint).bool(message.isAlive);
        /* Vector pos = 7; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 12; */
        if (message.sceneId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.sceneId);
        /* uint32 next_refresh_time = 8; */
        if (message.nextRefreshTime !== 0)
            writer.tag(8, WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 14; */
        if (message.cityId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.cityId);
        /* uint32 group_id = 1735; */
        if (message.groupId !== 0)
            writer.tag(1735, WireType.Varint).uint32(message.groupId);
        /* uint32 Unk3300_ONLALCCKIEE = 1 [json_name = "Unk3300ONLALCCKIEE"]; */
        if (message.unk3300ONLALCCKIEE !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300ONLALCCKIEE);
        /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 3; */
        if (message.weeklyBossResinDiscountInfo)
            WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_DKKOBDIEKPP = 6 [json_name = "Unk3300DKKOBDIEKPP"]; */
        if (message.unk3300DKKOBDIEKPP !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300DKKOBDIEKPP);
        /* uint32 id = 9; */
        if (message.id !== 0)
            writer.tag(9, WireType.Varint).uint32(message.id);
        /* uint32 monster_id = 562; */
        if (message.monsterId !== 0)
            writer.tag(562, WireType.Varint).uint32(message.monsterId);
        /* InvestigationMonster.LockState lock_state = 4; */
        if (message.lockState !== 0)
            writer.tag(4, WireType.Varint).int32(message.lockState);
        /* uint32 Unk3300_JHLEHEOOGGB = 10 [json_name = "Unk3300JHLEHEOOGGB"]; */
        if (message.unk3300JHLEHEOOGGB !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300JHLEHEOOGGB);
        /* bool is_area_locked = 5; */
        if (message.isAreaLocked !== false)
            writer.tag(5, WireType.Varint).bool(message.isAreaLocked);
        /* uint32 level = 2; */
        if (message.level !== 0)
            writer.tag(2, WireType.Varint).uint32(message.level);
        /* uint32 Unk3300_KNKFCOKMECI = 11 [json_name = "Unk3300KNKFCOKMECI"]; */
        if (message.unk3300KNKFCOKMECI !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300KNKFCOKMECI);
        /* uint32 resin = 15; */
        if (message.resin !== 0)
            writer.tag(15, WireType.Varint).uint32(message.resin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InvestigationMonster
 */
export const InvestigationMonster = new InvestigationMonster$Type();
