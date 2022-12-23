// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "TowerAllDataRsp.proto" (syntax proto3)
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
import { TowerFloorRecord } from "./TowerFloorRecord";
import { TowerCurLevelRecord } from "./TowerCurLevelRecord";
import { TowerMonthlyBrief } from "./TowerMonthlyBrief";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2478;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message TowerAllDataRsp
 */
export interface TowerAllDataRsp {
    /**
     * @generated from protobuf field: uint32 Unk3300_HCDFJBHMHHF = 6 [json_name = "Unk3300HCDFJBHMHHF"];
     */
    unk3300HCDFJBHMHHF: number;
    /**
     * @generated from protobuf field: uint32 next_schedule_change_time = 8;
     */
    nextScheduleChangeTime: number;
    /**
     * @generated from protobuf field: bool is_first_interact = 5;
     */
    isFirstInteract: boolean;
    /**
     * @generated from protobuf field: uint32 tower_schedule_id = 1;
     */
    towerScheduleId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_JBACKENDHDG = 10 [json_name = "Unk3300JBACKENDHDG"];
     */
    unk3300JBACKENDHDG: number;
    /**
     * @generated from protobuf field: uint32 schedule_start_time = 610;
     */
    scheduleStartTime: number;
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_OHCHCJGJIDK = 4 [json_name = "Unk3300OHCHCJGJIDK"];
     */
    unk3300OHCHCJGJIDK: number;
    /**
     * @generated from protobuf field: uint32 valid_tower_record_num = 2;
     */
    validTowerRecordNum: number;
    /**
     * @generated from protobuf field: TowerMonthlyBrief last_schedule_monthly_brief = 1245;
     */
    lastScheduleMonthlyBrief?: TowerMonthlyBrief;
    /**
     * @generated from protobuf field: TowerCurLevelRecord cur_level_record = 12;
     */
    curLevelRecord?: TowerCurLevelRecord;
    /**
     * @generated from protobuf field: repeated TowerFloorRecord tower_floor_record_list = 13;
     */
    towerFloorRecordList: TowerFloorRecord[];
    /**
     * @generated from protobuf field: TowerMonthlyBrief monthly_brief = 9;
     */
    monthlyBrief?: TowerMonthlyBrief;
    /**
     * @generated from protobuf field: uint32 Unk3300_LEKODCFPINJ = 7 [json_name = "Unk3300LEKODCFPINJ"];
     */
    unk3300LEKODCFPINJ: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> skip_floor_granted_reward_item_map = 3;
     */
    skipFloorGrantedRewardItemMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: bool is_finished_entrance_floor = 15;
     */
    isFinishedEntranceFloor: boolean;
    /**
     * @generated from protobuf field: map<uint32, uint32> floor_open_time_map = 14;
     */
    floorOpenTimeMap: {
        [key: number]: number;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class TowerAllDataRsp$Type extends MessageType<TowerAllDataRsp> {
    constructor() {
        super("TowerAllDataRsp", [
            { no: 6, name: "Unk3300_HCDFJBHMHHF", kind: "scalar", jsonName: "Unk3300HCDFJBHMHHF", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "next_schedule_change_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_first_interact", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "tower_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_JBACKENDHDG", kind: "scalar", jsonName: "Unk3300JBACKENDHDG", T: 13 /*ScalarType.UINT32*/ },
            { no: 610, name: "schedule_start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "Unk3300_OHCHCJGJIDK", kind: "scalar", jsonName: "Unk3300OHCHCJGJIDK", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "valid_tower_record_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1245, name: "last_schedule_monthly_brief", kind: "message", T: () => TowerMonthlyBrief },
            { no: 12, name: "cur_level_record", kind: "message", T: () => TowerCurLevelRecord },
            { no: 13, name: "tower_floor_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerFloorRecord },
            { no: 9, name: "monthly_brief", kind: "message", T: () => TowerMonthlyBrief },
            { no: 7, name: "Unk3300_LEKODCFPINJ", kind: "scalar", jsonName: "Unk3300LEKODCFPINJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "skip_floor_granted_reward_item_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "is_finished_entrance_floor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "floor_open_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value?: PartialMessage<TowerAllDataRsp>): TowerAllDataRsp {
        const message = { unk3300HCDFJBHMHHF: 0, nextScheduleChangeTime: 0, isFirstInteract: false, towerScheduleId: 0, unk3300JBACKENDHDG: 0, scheduleStartTime: 0, retcode: 0, unk3300OHCHCJGJIDK: 0, validTowerRecordNum: 0, towerFloorRecordList: [], unk3300LEKODCFPINJ: 0, skipFloorGrantedRewardItemMap: {}, isFinishedEntranceFloor: false, floorOpenTimeMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TowerAllDataRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TowerAllDataRsp): TowerAllDataRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_HCDFJBHMHHF = 6 [json_name = "Unk3300HCDFJBHMHHF"];*/ 6:
                    message.unk3300HCDFJBHMHHF = reader.uint32();
                    break;
                case /* uint32 next_schedule_change_time */ 8:
                    message.nextScheduleChangeTime = reader.uint32();
                    break;
                case /* bool is_first_interact */ 5:
                    message.isFirstInteract = reader.bool();
                    break;
                case /* uint32 tower_schedule_id */ 1:
                    message.towerScheduleId = reader.uint32();
                    break;
                case /* uint32 Unk3300_JBACKENDHDG = 10 [json_name = "Unk3300JBACKENDHDG"];*/ 10:
                    message.unk3300JBACKENDHDG = reader.uint32();
                    break;
                case /* uint32 schedule_start_time */ 610:
                    message.scheduleStartTime = reader.uint32();
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_OHCHCJGJIDK = 4 [json_name = "Unk3300OHCHCJGJIDK"];*/ 4:
                    message.unk3300OHCHCJGJIDK = reader.uint32();
                    break;
                case /* uint32 valid_tower_record_num */ 2:
                    message.validTowerRecordNum = reader.uint32();
                    break;
                case /* TowerMonthlyBrief last_schedule_monthly_brief */ 1245:
                    message.lastScheduleMonthlyBrief = TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.lastScheduleMonthlyBrief);
                    break;
                case /* TowerCurLevelRecord cur_level_record */ 12:
                    message.curLevelRecord = TowerCurLevelRecord.internalBinaryRead(reader, reader.uint32(), options, message.curLevelRecord);
                    break;
                case /* repeated TowerFloorRecord tower_floor_record_list */ 13:
                    message.towerFloorRecordList.push(TowerFloorRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* TowerMonthlyBrief monthly_brief */ 9:
                    message.monthlyBrief = TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.monthlyBrief);
                    break;
                case /* uint32 Unk3300_LEKODCFPINJ = 7 [json_name = "Unk3300LEKODCFPINJ"];*/ 7:
                    message.unk3300LEKODCFPINJ = reader.uint32();
                    break;
                case /* map<uint32, uint32> skip_floor_granted_reward_item_map */ 3:
                    this.binaryReadMap3(message.skipFloorGrantedRewardItemMap, reader, options);
                    break;
                case /* bool is_finished_entrance_floor */ 15:
                    message.isFinishedEntranceFloor = reader.bool();
                    break;
                case /* map<uint32, uint32> floor_open_time_map */ 14:
                    this.binaryReadMap14(message.floorOpenTimeMap, reader, options);
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
    private binaryReadMap3(map: TowerAllDataRsp["skipFloorGrantedRewardItemMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof TowerAllDataRsp["skipFloorGrantedRewardItemMap"] | undefined, val: TowerAllDataRsp["skipFloorGrantedRewardItemMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field TowerAllDataRsp.skip_floor_granted_reward_item_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap14(map: TowerAllDataRsp["floorOpenTimeMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof TowerAllDataRsp["floorOpenTimeMap"] | undefined, val: TowerAllDataRsp["floorOpenTimeMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field TowerAllDataRsp.floor_open_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: TowerAllDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_HCDFJBHMHHF = 6 [json_name = "Unk3300HCDFJBHMHHF"]; */
        if (message.unk3300HCDFJBHMHHF !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300HCDFJBHMHHF);
        /* uint32 next_schedule_change_time = 8; */
        if (message.nextScheduleChangeTime !== 0)
            writer.tag(8, WireType.Varint).uint32(message.nextScheduleChangeTime);
        /* bool is_first_interact = 5; */
        if (message.isFirstInteract !== false)
            writer.tag(5, WireType.Varint).bool(message.isFirstInteract);
        /* uint32 tower_schedule_id = 1; */
        if (message.towerScheduleId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.towerScheduleId);
        /* uint32 Unk3300_JBACKENDHDG = 10 [json_name = "Unk3300JBACKENDHDG"]; */
        if (message.unk3300JBACKENDHDG !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300JBACKENDHDG);
        /* uint32 schedule_start_time = 610; */
        if (message.scheduleStartTime !== 0)
            writer.tag(610, WireType.Varint).uint32(message.scheduleStartTime);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_OHCHCJGJIDK = 4 [json_name = "Unk3300OHCHCJGJIDK"]; */
        if (message.unk3300OHCHCJGJIDK !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300OHCHCJGJIDK);
        /* uint32 valid_tower_record_num = 2; */
        if (message.validTowerRecordNum !== 0)
            writer.tag(2, WireType.Varint).uint32(message.validTowerRecordNum);
        /* TowerMonthlyBrief last_schedule_monthly_brief = 1245; */
        if (message.lastScheduleMonthlyBrief)
            TowerMonthlyBrief.internalBinaryWrite(message.lastScheduleMonthlyBrief, writer.tag(1245, WireType.LengthDelimited).fork(), options).join();
        /* TowerCurLevelRecord cur_level_record = 12; */
        if (message.curLevelRecord)
            TowerCurLevelRecord.internalBinaryWrite(message.curLevelRecord, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* repeated TowerFloorRecord tower_floor_record_list = 13; */
        for (let i = 0; i < message.towerFloorRecordList.length; i++)
            TowerFloorRecord.internalBinaryWrite(message.towerFloorRecordList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* TowerMonthlyBrief monthly_brief = 9; */
        if (message.monthlyBrief)
            TowerMonthlyBrief.internalBinaryWrite(message.monthlyBrief, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_LEKODCFPINJ = 7 [json_name = "Unk3300LEKODCFPINJ"]; */
        if (message.unk3300LEKODCFPINJ !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300LEKODCFPINJ);
        /* map<uint32, uint32> skip_floor_granted_reward_item_map = 3; */
        for (let k of Object.keys(message.skipFloorGrantedRewardItemMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.skipFloorGrantedRewardItemMap[k as any]).join();
        /* bool is_finished_entrance_floor = 15; */
        if (message.isFinishedEntranceFloor !== false)
            writer.tag(15, WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* map<uint32, uint32> floor_open_time_map = 14; */
        for (let k of Object.keys(message.floorOpenTimeMap))
            writer.tag(14, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.floorOpenTimeMap[k as any]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerAllDataRsp
 */
export const TowerAllDataRsp = new TowerAllDataRsp$Type();
