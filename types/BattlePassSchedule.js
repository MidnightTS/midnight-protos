"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassSchedule = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BattlePassRewardTag_1 = require("./BattlePassRewardTag");
const BattlePassProduct_1 = require("./BattlePassProduct");
const BattlePassUnlockStatus_1 = require("./BattlePassUnlockStatus");
const BattlePassCycle_1 = require("./BattlePassCycle");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassSchedule$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassSchedule", [
            { no: 5, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_MAAJDKMIODC", kind: "scalar", jsonName: "Unk3300MAAJDKMIODC", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KODFJENCJLE", kind: "scalar", jsonName: "Unk3300KODFJENCJLE", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_ELMNFBOLEOA", kind: "scalar", jsonName: "Unk3300ELMNFBOLEOA", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_KALOGHHMJJE", kind: "scalar", jsonName: "Unk3300KALOGHHMJJE", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_FILCIPPAHHL", kind: "scalar", jsonName: "Unk3300FILCIPPAHHL", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cur_cycle", kind: "message", T: () => BattlePassCycle_1.BattlePassCycle },
            { no: 1, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "unlock_status", kind: "enum", T: () => ["BattlePassUnlockStatus", BattlePassUnlockStatus_1.BattlePassUnlockStatus, "BATTLE_PASS_UNLOCK_STATUS_"] },
            { no: 10, name: "product_info", kind: "message", T: () => BattlePassProduct_1.BattlePassProduct },
            { no: 13, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "reward_taken_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BattlePassRewardTag_1.BattlePassRewardTag }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, unk3300MAAJDKMIODC: 0, level: 0, unk3300KODFJENCJLE: false, unk3300ELMNFBOLEOA: 0, unk3300KALOGHHMJJE: false, unk3300FILCIPPAHHL: 0, beginTime: 0, unlockStatus: 0, endTime: 0, rewardTakenList: [] };
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
                case /* uint32 schedule_id */ 5:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 Unk3300_MAAJDKMIODC = 2 [json_name = "Unk3300MAAJDKMIODC"];*/ 2:
                    message.unk3300MAAJDKMIODC = reader.uint32();
                    break;
                case /* uint32 level */ 7:
                    message.level = reader.uint32();
                    break;
                case /* bool Unk3300_KODFJENCJLE = 8 [json_name = "Unk3300KODFJENCJLE"];*/ 8:
                    message.unk3300KODFJENCJLE = reader.bool();
                    break;
                case /* uint32 Unk3300_ELMNFBOLEOA = 14 [json_name = "Unk3300ELMNFBOLEOA"];*/ 14:
                    message.unk3300ELMNFBOLEOA = reader.uint32();
                    break;
                case /* bool Unk3300_KALOGHHMJJE = 12 [json_name = "Unk3300KALOGHHMJJE"];*/ 12:
                    message.unk3300KALOGHHMJJE = reader.bool();
                    break;
                case /* uint32 Unk3300_FILCIPPAHHL = 4 [json_name = "Unk3300FILCIPPAHHL"];*/ 4:
                    message.unk3300FILCIPPAHHL = reader.uint32();
                    break;
                case /* BattlePassCycle cur_cycle */ 11:
                    message.curCycle = BattlePassCycle_1.BattlePassCycle.internalBinaryRead(reader, reader.uint32(), options, message.curCycle);
                    break;
                case /* uint32 begin_time */ 1:
                    message.beginTime = reader.uint32();
                    break;
                case /* BattlePassUnlockStatus unlock_status */ 15:
                    message.unlockStatus = reader.int32();
                    break;
                case /* BattlePassProduct product_info */ 10:
                    message.productInfo = BattlePassProduct_1.BattlePassProduct.internalBinaryRead(reader, reader.uint32(), options, message.productInfo);
                    break;
                case /* uint32 end_time */ 13:
                    message.endTime = reader.uint32();
                    break;
                case /* repeated BattlePassRewardTag reward_taken_list */ 3:
                    message.rewardTakenList.push(BattlePassRewardTag_1.BattlePassRewardTag.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message, writer, options) {
        /* uint32 schedule_id = 5; */
        if (message.scheduleId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 Unk3300_MAAJDKMIODC = 2 [json_name = "Unk3300MAAJDKMIODC"]; */
        if (message.unk3300MAAJDKMIODC !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300MAAJDKMIODC);
        /* uint32 level = 7; */
        if (message.level !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.level);
        /* bool Unk3300_KODFJENCJLE = 8 [json_name = "Unk3300KODFJENCJLE"]; */
        if (message.unk3300KODFJENCJLE !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300KODFJENCJLE);
        /* uint32 Unk3300_ELMNFBOLEOA = 14 [json_name = "Unk3300ELMNFBOLEOA"]; */
        if (message.unk3300ELMNFBOLEOA !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300ELMNFBOLEOA);
        /* bool Unk3300_KALOGHHMJJE = 12 [json_name = "Unk3300KALOGHHMJJE"]; */
        if (message.unk3300KALOGHHMJJE !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.unk3300KALOGHHMJJE);
        /* uint32 Unk3300_FILCIPPAHHL = 4 [json_name = "Unk3300FILCIPPAHHL"]; */
        if (message.unk3300FILCIPPAHHL !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300FILCIPPAHHL);
        /* BattlePassCycle cur_cycle = 11; */
        if (message.curCycle)
            BattlePassCycle_1.BattlePassCycle.internalBinaryWrite(message.curCycle, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 begin_time = 1; */
        if (message.beginTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* BattlePassUnlockStatus unlock_status = 15; */
        if (message.unlockStatus !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.unlockStatus);
        /* BattlePassProduct product_info = 10; */
        if (message.productInfo)
            BattlePassProduct_1.BattlePassProduct.internalBinaryWrite(message.productInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 end_time = 13; */
        if (message.endTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.endTime);
        /* repeated BattlePassRewardTag reward_taken_list = 3; */
        for (let i = 0; i < message.rewardTakenList.length; i++)
            BattlePassRewardTag_1.BattlePassRewardTag.internalBinaryWrite(message.rewardTakenList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassSchedule
 */
exports.BattlePassSchedule = new BattlePassSchedule$Type();
