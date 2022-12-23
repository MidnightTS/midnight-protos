"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoGachaRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaItem_1 = require("./GachaItem");
// @generated message type with reflection information, may provide speed optimized methods
class DoGachaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DoGachaRsp", [
            { no: 1812, name: "Unk3300_OHFMHIHJHPJ", kind: "scalar", jsonName: "Unk3300OHFMHIHJHPJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "left_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "gacha_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaItem_1.GachaItem },
            { no: 1887, name: "Unk3300_HBILIAEIHNK", kind: "scalar", jsonName: "Unk3300HBILIAEIHNK", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "new_gacha_random", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "wish_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "wish_max_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "gacha_times_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "wish_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "ten_cost_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cost_item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "ten_cost_item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1550, name: "cur_schedule_daily_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "cost_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gacha_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 467, name: "daily_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300OHFMHIHJHPJ: false, leftGachaTimes: 0, gachaItemList: [], unk3300HBILIAEIHNK: false, gachaType: 0, newGachaRandom: 0, wishProgress: 0, wishMaxProgress: 0, gachaTimes: 0, gachaTimesLimit: 0, wishItemId: 0, tenCostItemId: 0, costItemNum: 0, tenCostItemNum: 0, curScheduleDailyGachaTimes: 0, costItemId: 0, gachaScheduleId: 0, dailyGachaTimes: 0, retcode: 0 };
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
                case /* bool Unk3300_OHFMHIHJHPJ = 1812 [json_name = "Unk3300OHFMHIHJHPJ"];*/ 1812:
                    message.unk3300OHFMHIHJHPJ = reader.bool();
                    break;
                case /* uint32 left_gacha_times */ 3:
                    message.leftGachaTimes = reader.uint32();
                    break;
                case /* repeated GachaItem gacha_item_list */ 9:
                    message.gachaItemList.push(GachaItem_1.GachaItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_HBILIAEIHNK = 1887 [json_name = "Unk3300HBILIAEIHNK"];*/ 1887:
                    message.unk3300HBILIAEIHNK = reader.bool();
                    break;
                case /* uint32 gacha_type */ 10:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 new_gacha_random */ 6:
                    message.newGachaRandom = reader.uint32();
                    break;
                case /* uint32 wish_progress */ 1:
                    message.wishProgress = reader.uint32();
                    break;
                case /* uint32 wish_max_progress */ 5:
                    message.wishMaxProgress = reader.uint32();
                    break;
                case /* uint32 gacha_times */ 4:
                    message.gachaTimes = reader.uint32();
                    break;
                case /* uint32 gacha_times_limit */ 15:
                    message.gachaTimesLimit = reader.uint32();
                    break;
                case /* uint32 wish_item_id */ 12:
                    message.wishItemId = reader.uint32();
                    break;
                case /* uint32 ten_cost_item_id */ 13:
                    message.tenCostItemId = reader.uint32();
                    break;
                case /* uint32 cost_item_num */ 8:
                    message.costItemNum = reader.uint32();
                    break;
                case /* uint32 ten_cost_item_num */ 2:
                    message.tenCostItemNum = reader.uint32();
                    break;
                case /* uint32 cur_schedule_daily_gacha_times */ 1550:
                    message.curScheduleDailyGachaTimes = reader.uint32();
                    break;
                case /* uint32 cost_item_id */ 7:
                    message.costItemId = reader.uint32();
                    break;
                case /* uint32 gacha_schedule_id */ 14:
                    message.gachaScheduleId = reader.uint32();
                    break;
                case /* uint32 daily_gacha_times */ 467:
                    message.dailyGachaTimes = reader.uint32();
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
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
        /* bool Unk3300_OHFMHIHJHPJ = 1812 [json_name = "Unk3300OHFMHIHJHPJ"]; */
        if (message.unk3300OHFMHIHJHPJ !== false)
            writer.tag(1812, runtime_1.WireType.Varint).bool(message.unk3300OHFMHIHJHPJ);
        /* uint32 left_gacha_times = 3; */
        if (message.leftGachaTimes !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.leftGachaTimes);
        /* repeated GachaItem gacha_item_list = 9; */
        for (let i = 0; i < message.gachaItemList.length; i++)
            GachaItem_1.GachaItem.internalBinaryWrite(message.gachaItemList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_HBILIAEIHNK = 1887 [json_name = "Unk3300HBILIAEIHNK"]; */
        if (message.unk3300HBILIAEIHNK !== false)
            writer.tag(1887, runtime_1.WireType.Varint).bool(message.unk3300HBILIAEIHNK);
        /* uint32 gacha_type = 10; */
        if (message.gachaType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.gachaType);
        /* uint32 new_gacha_random = 6; */
        if (message.newGachaRandom !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.newGachaRandom);
        /* uint32 wish_progress = 1; */
        if (message.wishProgress !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.wishProgress);
        /* uint32 wish_max_progress = 5; */
        if (message.wishMaxProgress !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.wishMaxProgress);
        /* uint32 gacha_times = 4; */
        if (message.gachaTimes !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gachaTimes);
        /* uint32 gacha_times_limit = 15; */
        if (message.gachaTimesLimit !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.gachaTimesLimit);
        /* uint32 wish_item_id = 12; */
        if (message.wishItemId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.wishItemId);
        /* uint32 ten_cost_item_id = 13; */
        if (message.tenCostItemId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.tenCostItemId);
        /* uint32 cost_item_num = 8; */
        if (message.costItemNum !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.costItemNum);
        /* uint32 ten_cost_item_num = 2; */
        if (message.tenCostItemNum !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.tenCostItemNum);
        /* uint32 cur_schedule_daily_gacha_times = 1550; */
        if (message.curScheduleDailyGachaTimes !== 0)
            writer.tag(1550, runtime_1.WireType.Varint).uint32(message.curScheduleDailyGachaTimes);
        /* uint32 cost_item_id = 7; */
        if (message.costItemId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.costItemId);
        /* uint32 gacha_schedule_id = 14; */
        if (message.gachaScheduleId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.gachaScheduleId);
        /* uint32 daily_gacha_times = 467; */
        if (message.dailyGachaTimes !== 0)
            writer.tag(467, runtime_1.WireType.Varint).uint32(message.dailyGachaTimes);
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DoGachaRsp
 */
exports.DoGachaRsp = new DoGachaRsp$Type();
