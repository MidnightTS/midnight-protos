"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerAllDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerFloorRecord_1 = require("./TowerFloorRecord");
const TowerCurLevelRecord_1 = require("./TowerCurLevelRecord");
const TowerMonthlyBrief_1 = require("./TowerMonthlyBrief");
// @generated message type with reflection information, may provide speed optimized methods
class TowerAllDataRsp$Type extends runtime_5.MessageType {
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
            { no: 1245, name: "last_schedule_monthly_brief", kind: "message", T: () => TowerMonthlyBrief_1.TowerMonthlyBrief },
            { no: 12, name: "cur_level_record", kind: "message", T: () => TowerCurLevelRecord_1.TowerCurLevelRecord },
            { no: 13, name: "tower_floor_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerFloorRecord_1.TowerFloorRecord },
            { no: 9, name: "monthly_brief", kind: "message", T: () => TowerMonthlyBrief_1.TowerMonthlyBrief },
            { no: 7, name: "Unk3300_LEKODCFPINJ", kind: "scalar", jsonName: "Unk3300LEKODCFPINJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "skip_floor_granted_reward_item_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "is_finished_entrance_floor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "floor_open_time_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { unk3300HCDFJBHMHHF: 0, nextScheduleChangeTime: 0, isFirstInteract: false, towerScheduleId: 0, unk3300JBACKENDHDG: 0, scheduleStartTime: 0, retcode: 0, unk3300OHCHCJGJIDK: 0, validTowerRecordNum: 0, towerFloorRecordList: [], unk3300LEKODCFPINJ: 0, skipFloorGrantedRewardItemMap: {}, isFinishedEntranceFloor: false, floorOpenTimeMap: {} };
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
                    message.lastScheduleMonthlyBrief = TowerMonthlyBrief_1.TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.lastScheduleMonthlyBrief);
                    break;
                case /* TowerCurLevelRecord cur_level_record */ 12:
                    message.curLevelRecord = TowerCurLevelRecord_1.TowerCurLevelRecord.internalBinaryRead(reader, reader.uint32(), options, message.curLevelRecord);
                    break;
                case /* repeated TowerFloorRecord tower_floor_record_list */ 13:
                    message.towerFloorRecordList.push(TowerFloorRecord_1.TowerFloorRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* TowerMonthlyBrief monthly_brief */ 9:
                    message.monthlyBrief = TowerMonthlyBrief_1.TowerMonthlyBrief.internalBinaryRead(reader, reader.uint32(), options, message.monthlyBrief);
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap3(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field TowerAllDataRsp.skip_floor_granted_reward_item_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap14(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field TowerAllDataRsp.floor_open_time_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_HCDFJBHMHHF = 6 [json_name = "Unk3300HCDFJBHMHHF"]; */
        if (message.unk3300HCDFJBHMHHF !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300HCDFJBHMHHF);
        /* uint32 next_schedule_change_time = 8; */
        if (message.nextScheduleChangeTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.nextScheduleChangeTime);
        /* bool is_first_interact = 5; */
        if (message.isFirstInteract !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.isFirstInteract);
        /* uint32 tower_schedule_id = 1; */
        if (message.towerScheduleId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.towerScheduleId);
        /* uint32 Unk3300_JBACKENDHDG = 10 [json_name = "Unk3300JBACKENDHDG"]; */
        if (message.unk3300JBACKENDHDG !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300JBACKENDHDG);
        /* uint32 schedule_start_time = 610; */
        if (message.scheduleStartTime !== 0)
            writer.tag(610, runtime_1.WireType.Varint).uint32(message.scheduleStartTime);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_OHCHCJGJIDK = 4 [json_name = "Unk3300OHCHCJGJIDK"]; */
        if (message.unk3300OHCHCJGJIDK !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300OHCHCJGJIDK);
        /* uint32 valid_tower_record_num = 2; */
        if (message.validTowerRecordNum !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.validTowerRecordNum);
        /* TowerMonthlyBrief last_schedule_monthly_brief = 1245; */
        if (message.lastScheduleMonthlyBrief)
            TowerMonthlyBrief_1.TowerMonthlyBrief.internalBinaryWrite(message.lastScheduleMonthlyBrief, writer.tag(1245, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerCurLevelRecord cur_level_record = 12; */
        if (message.curLevelRecord)
            TowerCurLevelRecord_1.TowerCurLevelRecord.internalBinaryWrite(message.curLevelRecord, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated TowerFloorRecord tower_floor_record_list = 13; */
        for (let i = 0; i < message.towerFloorRecordList.length; i++)
            TowerFloorRecord_1.TowerFloorRecord.internalBinaryWrite(message.towerFloorRecordList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* TowerMonthlyBrief monthly_brief = 9; */
        if (message.monthlyBrief)
            TowerMonthlyBrief_1.TowerMonthlyBrief.internalBinaryWrite(message.monthlyBrief, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_LEKODCFPINJ = 7 [json_name = "Unk3300LEKODCFPINJ"]; */
        if (message.unk3300LEKODCFPINJ !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300LEKODCFPINJ);
        /* map<uint32, uint32> skip_floor_granted_reward_item_map = 3; */
        for (let k of Object.keys(message.skipFloorGrantedRewardItemMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.skipFloorGrantedRewardItemMap[k]).join();
        /* bool is_finished_entrance_floor = 15; */
        if (message.isFinishedEntranceFloor !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isFinishedEntranceFloor);
        /* map<uint32, uint32> floor_open_time_map = 14; */
        for (let k of Object.keys(message.floorOpenTimeMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.floorOpenTimeMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerAllDataRsp
 */
exports.TowerAllDataRsp = new TowerAllDataRsp$Type();
