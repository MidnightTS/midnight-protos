// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "OtherCustomDungeonBrief.proto" (syntax proto3)
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
import { SocialDetail } from "./SocialDetail";
import { CustomDungeonAbstract } from "./CustomDungeonAbstract";
import { CustomDungeonSocial } from "./CustomDungeonSocial";
import { CustomDungeonSetting } from "./CustomDungeonSetting";
/**
 * @generated from protobuf message OtherCustomDungeonBrief
 */
export interface OtherCustomDungeonBrief {
    /**
     * @generated from protobuf field: bool is_adventure_dungeon = 12;
     */
    isAdventureDungeon: boolean;
    /**
     * @generated from protobuf field: uint32 battle_min_cost_time = 10;
     */
    battleMinCostTime: number;
    /**
     * @generated from protobuf field: repeated uint32 tag_list = 13;
     */
    tagList: number[];
    /**
     * @generated from protobuf field: bool is_stored = 8;
     */
    isStored: boolean;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 15;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: bool is_psn_platform = 1;
     */
    isPsnPlatform: boolean;
    /**
     * @generated from protobuf field: uint64 dungeon_guid = 7;
     */
    dungeonGuid: bigint;
    /**
     * @generated from protobuf field: CustomDungeonSetting setting = 2;
     */
    setting?: CustomDungeonSetting;
    /**
     * @generated from protobuf field: CustomDungeonSocial social = 14;
     */
    social?: CustomDungeonSocial;
    /**
     * @generated from protobuf field: CustomDungeonAbstract abstract = 4;
     */
    abstract?: CustomDungeonAbstract;
    /**
     * @generated from protobuf field: SocialDetail creator_detail = 11;
     */
    creatorDetail?: SocialDetail;
}
// @generated message type with reflection information, may provide speed optimized methods
class OtherCustomDungeonBrief$Type extends MessageType<OtherCustomDungeonBrief> {
    constructor() {
        super("OtherCustomDungeonBrief", [
            { no: 12, name: "is_adventure_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "battle_min_cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_stored", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_psn_platform", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "setting", kind: "message", T: () => CustomDungeonSetting },
            { no: 14, name: "social", kind: "message", T: () => CustomDungeonSocial },
            { no: 4, name: "abstract", kind: "message", T: () => CustomDungeonAbstract },
            { no: 11, name: "creator_detail", kind: "message", T: () => SocialDetail }
        ]);
    }
    create(value?: PartialMessage<OtherCustomDungeonBrief>): OtherCustomDungeonBrief {
        const message = { isAdventureDungeon: false, battleMinCostTime: 0, tagList: [], isStored: false, dungeonId: 0, isPsnPlatform: false, dungeonGuid: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OtherCustomDungeonBrief>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OtherCustomDungeonBrief): OtherCustomDungeonBrief {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_adventure_dungeon */ 12:
                    message.isAdventureDungeon = reader.bool();
                    break;
                case /* uint32 battle_min_cost_time */ 10:
                    message.battleMinCostTime = reader.uint32();
                    break;
                case /* repeated uint32 tag_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* bool is_stored */ 8:
                    message.isStored = reader.bool();
                    break;
                case /* uint32 dungeon_id */ 15:
                    message.dungeonId = reader.uint32();
                    break;
                case /* bool is_psn_platform */ 1:
                    message.isPsnPlatform = reader.bool();
                    break;
                case /* uint64 dungeon_guid */ 7:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* CustomDungeonSetting setting */ 2:
                    message.setting = CustomDungeonSetting.internalBinaryRead(reader, reader.uint32(), options, message.setting);
                    break;
                case /* CustomDungeonSocial social */ 14:
                    message.social = CustomDungeonSocial.internalBinaryRead(reader, reader.uint32(), options, message.social);
                    break;
                case /* CustomDungeonAbstract abstract */ 4:
                    message.abstract = CustomDungeonAbstract.internalBinaryRead(reader, reader.uint32(), options, message.abstract);
                    break;
                case /* SocialDetail creator_detail */ 11:
                    message.creatorDetail = SocialDetail.internalBinaryRead(reader, reader.uint32(), options, message.creatorDetail);
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
    internalBinaryWrite(message: OtherCustomDungeonBrief, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_adventure_dungeon = 12; */
        if (message.isAdventureDungeon !== false)
            writer.tag(12, WireType.Varint).bool(message.isAdventureDungeon);
        /* uint32 battle_min_cost_time = 10; */
        if (message.battleMinCostTime !== 0)
            writer.tag(10, WireType.Varint).uint32(message.battleMinCostTime);
        /* repeated uint32 tag_list = 13; */
        if (message.tagList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* bool is_stored = 8; */
        if (message.isStored !== false)
            writer.tag(8, WireType.Varint).bool(message.isStored);
        /* uint32 dungeon_id = 15; */
        if (message.dungeonId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.dungeonId);
        /* bool is_psn_platform = 1; */
        if (message.isPsnPlatform !== false)
            writer.tag(1, WireType.Varint).bool(message.isPsnPlatform);
        /* uint64 dungeon_guid = 7; */
        if (message.dungeonGuid !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.dungeonGuid);
        /* CustomDungeonSetting setting = 2; */
        if (message.setting)
            CustomDungeonSetting.internalBinaryWrite(message.setting, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonSocial social = 14; */
        if (message.social)
            CustomDungeonSocial.internalBinaryWrite(message.social, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* CustomDungeonAbstract abstract = 4; */
        if (message.abstract)
            CustomDungeonAbstract.internalBinaryWrite(message.abstract, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* SocialDetail creator_detail = 11; */
        if (message.creatorDetail)
            SocialDetail.internalBinaryWrite(message.creatorDetail, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OtherCustomDungeonBrief
 */
export const OtherCustomDungeonBrief = new OtherCustomDungeonBrief$Type();