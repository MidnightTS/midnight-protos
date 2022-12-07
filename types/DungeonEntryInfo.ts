// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "DungeonEntryInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message DungeonEntryInfo
 */
export interface DungeonEntryInfo {
    /**
     * @generated from protobuf field: uint32 end_time = 14;
     */
    endTime: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_KNKFCOKMECI = 9 [json_name = "Unk3300KNKFCOKMECI"];
     */
    unk3300KNKFCOKMECI: number;
    /**
     * @generated from protobuf field: bool is_passed = 13;
     */
    isPassed: boolean;
    /**
     * @generated from protobuf field: WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 6;
     */
    weeklyBossResinDiscountInfo?: WeeklyBossResinDiscountInfo;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 8;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IDMPGPKMMEH = 5 [json_name = "Unk3300IDMPGPKMMEH"];
     */
    unk3300IDMPGPKMMEH: number;
    /**
     * @generated from protobuf field: uint32 next_refresh_time = 10;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_ONLALCCKIEE = 3 [json_name = "Unk3300ONLALCCKIEE"];
     */
    unk3300ONLALCCKIEE: number;
    /**
     * @generated from protobuf field: uint32 start_time = 11;
     */
    startTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonEntryInfo$Type extends MessageType<DungeonEntryInfo> {
    constructor() {
        super("DungeonEntryInfo", [
            { no: 14, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_KNKFCOKMECI", kind: "scalar", jsonName: "Unk3300KNKFCOKMECI", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_passed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "weekly_boss_resin_discount_info", kind: "message", T: () => WeeklyBossResinDiscountInfo },
            { no: 8, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_IDMPGPKMMEH", kind: "scalar", jsonName: "Unk3300IDMPGPKMMEH", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_ONLALCCKIEE", kind: "scalar", jsonName: "Unk3300ONLALCCKIEE", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DungeonEntryInfo>): DungeonEntryInfo {
        const message = { endTime: 0, unk3300KNKFCOKMECI: 0, isPassed: false, dungeonId: 0, unk3300IDMPGPKMMEH: 0, nextRefreshTime: 0, unk3300ONLALCCKIEE: 0, startTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonEntryInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonEntryInfo): DungeonEntryInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 end_time */ 14:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_KNKFCOKMECI = 9 [json_name = "Unk3300KNKFCOKMECI"];*/ 9:
                    message.unk3300KNKFCOKMECI = reader.uint32();
                    break;
                case /* bool is_passed */ 13:
                    message.isPassed = reader.bool();
                    break;
                case /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info */ 6:
                    message.weeklyBossResinDiscountInfo = WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options, message.weeklyBossResinDiscountInfo);
                    break;
                case /* uint32 dungeon_id */ 8:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 Unk3300_IDMPGPKMMEH = 5 [json_name = "Unk3300IDMPGPKMMEH"];*/ 5:
                    message.unk3300IDMPGPKMMEH = reader.uint32();
                    break;
                case /* uint32 next_refresh_time */ 10:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_ONLALCCKIEE = 3 [json_name = "Unk3300ONLALCCKIEE"];*/ 3:
                    message.unk3300ONLALCCKIEE = reader.uint32();
                    break;
                case /* uint32 start_time */ 11:
                    message.startTime = reader.uint32();
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
    internalBinaryWrite(message: DungeonEntryInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 end_time = 14; */
        if (message.endTime !== 0)
            writer.tag(14, WireType.Varint).uint32(message.endTime);
        /* uint32 Unk3300_KNKFCOKMECI = 9 [json_name = "Unk3300KNKFCOKMECI"]; */
        if (message.unk3300KNKFCOKMECI !== 0)
            writer.tag(9, WireType.Varint).uint32(message.unk3300KNKFCOKMECI);
        /* bool is_passed = 13; */
        if (message.isPassed !== false)
            writer.tag(13, WireType.Varint).bool(message.isPassed);
        /* WeeklyBossResinDiscountInfo weekly_boss_resin_discount_info = 6; */
        if (message.weeklyBossResinDiscountInfo)
            WeeklyBossResinDiscountInfo.internalBinaryWrite(message.weeklyBossResinDiscountInfo, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_id = 8; */
        if (message.dungeonId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.dungeonId);
        /* uint32 Unk3300_IDMPGPKMMEH = 5 [json_name = "Unk3300IDMPGPKMMEH"]; */
        if (message.unk3300IDMPGPKMMEH !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300IDMPGPKMMEH);
        /* uint32 next_refresh_time = 10; */
        if (message.nextRefreshTime !== 0)
            writer.tag(10, WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 Unk3300_ONLALCCKIEE = 3 [json_name = "Unk3300ONLALCCKIEE"]; */
        if (message.unk3300ONLALCCKIEE !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300ONLALCCKIEE);
        /* uint32 start_time = 11; */
        if (message.startTime !== 0)
            writer.tag(11, WireType.Varint).uint32(message.startTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonEntryInfo
 */
export const DungeonEntryInfo = new DungeonEntryInfo$Type();
