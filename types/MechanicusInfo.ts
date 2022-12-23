// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MechanicusInfo.proto" (syntax proto3)
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
import { Uint32Pair } from "./Uint32Pair";
/**
 * @generated from protobuf message MechanicusInfo
 */
export interface MechanicusInfo {
    /**
     * @generated from protobuf field: uint32 mechanicus_id = 1;
     */
    mechanicusId: number;
    /**
     * @generated from protobuf field: uint32 punish_over_time = 11;
     */
    punishOverTime: number;
    /**
     * @generated from protobuf field: bool is_finish_teach_dungeon = 7;
     */
    isFinishTeachDungeon: boolean;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_KJLGFEPIENG = 6 [json_name = "Unk3300KJLGFEPIENG"];
     */
    unk3300KJLGFEPIENG: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_EEBEOCMAIKN = 9 [json_name = "Unk3300EEBEOCMAIKN"];
     */
    unk3300EEBEOCMAIKN: number[];
    /**
     * @generated from protobuf field: uint32 coin = 10;
     */
    coin: number;
    /**
     * @generated from protobuf field: repeated Uint32Pair gear_level_pair_list = 13;
     */
    gearLevelPairList: Uint32Pair[];
}
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusInfo$Type extends MessageType<MechanicusInfo> {
    constructor() {
        super("MechanicusInfo", [
            { no: 1, name: "mechanicus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "punish_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finish_teach_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_KJLGFEPIENG", kind: "scalar", jsonName: "Unk3300KJLGFEPIENG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_EEBEOCMAIKN", kind: "scalar", jsonName: "Unk3300EEBEOCMAIKN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gear_level_pair_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair }
        ]);
    }
    create(value?: PartialMessage<MechanicusInfo>): MechanicusInfo {
        const message = { mechanicusId: 0, punishOverTime: 0, isFinishTeachDungeon: false, unk3300KJLGFEPIENG: [], unk3300EEBEOCMAIKN: [], coin: 0, gearLevelPairList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MechanicusInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MechanicusInfo): MechanicusInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 mechanicus_id */ 1:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* uint32 punish_over_time */ 11:
                    message.punishOverTime = reader.uint32();
                    break;
                case /* bool is_finish_teach_dungeon */ 7:
                    message.isFinishTeachDungeon = reader.bool();
                    break;
                case /* repeated uint32 Unk3300_KJLGFEPIENG = 6 [json_name = "Unk3300KJLGFEPIENG"];*/ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300KJLGFEPIENG.push(reader.uint32());
                    else
                        message.unk3300KJLGFEPIENG.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_EEBEOCMAIKN = 9 [json_name = "Unk3300EEBEOCMAIKN"];*/ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EEBEOCMAIKN.push(reader.uint32());
                    else
                        message.unk3300EEBEOCMAIKN.push(reader.uint32());
                    break;
                case /* uint32 coin */ 10:
                    message.coin = reader.uint32();
                    break;
                case /* repeated Uint32Pair gear_level_pair_list */ 13:
                    message.gearLevelPairList.push(Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: MechanicusInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 mechanicus_id = 1; */
        if (message.mechanicusId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.mechanicusId);
        /* uint32 punish_over_time = 11; */
        if (message.punishOverTime !== 0)
            writer.tag(11, WireType.Varint).uint32(message.punishOverTime);
        /* bool is_finish_teach_dungeon = 7; */
        if (message.isFinishTeachDungeon !== false)
            writer.tag(7, WireType.Varint).bool(message.isFinishTeachDungeon);
        /* repeated uint32 Unk3300_KJLGFEPIENG = 6 [json_name = "Unk3300KJLGFEPIENG"]; */
        if (message.unk3300KJLGFEPIENG.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300KJLGFEPIENG.length; i++)
                writer.uint32(message.unk3300KJLGFEPIENG[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_EEBEOCMAIKN = 9 [json_name = "Unk3300EEBEOCMAIKN"]; */
        if (message.unk3300EEBEOCMAIKN.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EEBEOCMAIKN.length; i++)
                writer.uint32(message.unk3300EEBEOCMAIKN[i]);
            writer.join();
        }
        /* uint32 coin = 10; */
        if (message.coin !== 0)
            writer.tag(10, WireType.Varint).uint32(message.coin);
        /* repeated Uint32Pair gear_level_pair_list = 13; */
        for (let i = 0; i < message.gearLevelPairList.length; i++)
            Uint32Pair.internalBinaryWrite(message.gearLevelPairList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MechanicusInfo
 */
export const MechanicusInfo = new MechanicusInfo$Type();