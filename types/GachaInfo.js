"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaUpInfo_1 = require("./GachaUpInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GachaInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaInfo", [
            { no: 5, name: "left_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gacha_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 954, name: "wish_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1532, name: "gacha_prob_url_oversea", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "gacha_record_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "gacha_prob_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 476, name: "display_up5_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "gacha_times_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "gacha_preview_prefab_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 114, name: "title_textmap", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 245, name: "cur_schedule_daily_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 540, name: "display_up4_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "ten_cost_item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1275, name: "wish_max_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "ten_cost_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "gacha_sort_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 967, name: "is_new_wish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "cost_item_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1580, name: "wish_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1259, name: "gacha_record_url_oversea", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1585, name: "gacha_up_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaUpInfo_1.GachaUpInfo },
            { no: 3, name: "cost_item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "gacha_prefab_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { leftGachaTimes: 0, gachaType: 0, wishProgress: 0, gachaProbUrlOversea: "", gachaRecordUrl: "", gachaProbUrl: "", beginTime: 0, scheduleId: 0, displayUp5ItemList: [], gachaTimesLimit: 0, gachaPreviewPrefabPath: "", titleTextmap: "", curScheduleDailyGachaTimes: 0, endTime: 0, displayUp4ItemList: [], tenCostItemNum: 0, wishMaxProgress: 0, tenCostItemId: 0, gachaSortId: 0, isNewWish: false, costItemNum: 0, wishItemId: 0, gachaRecordUrlOversea: "", gachaUpInfoList: [], costItemId: 0, gachaPrefabPath: "" };
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
                case /* uint32 left_gacha_times */ 5:
                    message.leftGachaTimes = reader.uint32();
                    break;
                case /* uint32 gacha_type */ 7:
                    message.gachaType = reader.uint32();
                    break;
                case /* uint32 wish_progress */ 954:
                    message.wishProgress = reader.uint32();
                    break;
                case /* string gacha_prob_url_oversea */ 1532:
                    message.gachaProbUrlOversea = reader.string();
                    break;
                case /* string gacha_record_url */ 15:
                    message.gachaRecordUrl = reader.string();
                    break;
                case /* string gacha_prob_url */ 1:
                    message.gachaProbUrl = reader.string();
                    break;
                case /* uint32 begin_time */ 14:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 8:
                    message.scheduleId = reader.uint32();
                    break;
                case /* repeated uint32 display_up5_item_list */ 476:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.displayUp5ItemList.push(reader.uint32());
                    else
                        message.displayUp5ItemList.push(reader.uint32());
                    break;
                case /* uint32 gacha_times_limit */ 10:
                    message.gachaTimesLimit = reader.uint32();
                    break;
                case /* string gacha_preview_prefab_path */ 4:
                    message.gachaPreviewPrefabPath = reader.string();
                    break;
                case /* string title_textmap */ 114:
                    message.titleTextmap = reader.string();
                    break;
                case /* uint32 cur_schedule_daily_gacha_times */ 245:
                    message.curScheduleDailyGachaTimes = reader.uint32();
                    break;
                case /* uint32 end_time */ 2:
                    message.endTime = reader.uint32();
                    break;
                case /* repeated uint32 display_up4_item_list */ 540:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.displayUp4ItemList.push(reader.uint32());
                    else
                        message.displayUp4ItemList.push(reader.uint32());
                    break;
                case /* uint32 ten_cost_item_num */ 13:
                    message.tenCostItemNum = reader.uint32();
                    break;
                case /* uint32 wish_max_progress */ 1275:
                    message.wishMaxProgress = reader.uint32();
                    break;
                case /* uint32 ten_cost_item_id */ 9:
                    message.tenCostItemId = reader.uint32();
                    break;
                case /* uint32 gacha_sort_id */ 6:
                    message.gachaSortId = reader.uint32();
                    break;
                case /* bool is_new_wish */ 967:
                    message.isNewWish = reader.bool();
                    break;
                case /* uint32 cost_item_num */ 12:
                    message.costItemNum = reader.uint32();
                    break;
                case /* uint32 wish_item_id */ 1580:
                    message.wishItemId = reader.uint32();
                    break;
                case /* string gacha_record_url_oversea */ 1259:
                    message.gachaRecordUrlOversea = reader.string();
                    break;
                case /* repeated GachaUpInfo gacha_up_info_list */ 1585:
                    message.gachaUpInfoList.push(GachaUpInfo_1.GachaUpInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cost_item_id */ 3:
                    message.costItemId = reader.uint32();
                    break;
                case /* string gacha_prefab_path */ 11:
                    message.gachaPrefabPath = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 left_gacha_times = 5; */
        if (message.leftGachaTimes !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.leftGachaTimes);
        /* uint32 gacha_type = 7; */
        if (message.gachaType !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.gachaType);
        /* uint32 wish_progress = 954; */
        if (message.wishProgress !== 0)
            writer.tag(954, runtime_2.WireType.Varint).uint32(message.wishProgress);
        /* string gacha_prob_url_oversea = 1532; */
        if (message.gachaProbUrlOversea !== "")
            writer.tag(1532, runtime_2.WireType.LengthDelimited).string(message.gachaProbUrlOversea);
        /* string gacha_record_url = 15; */
        if (message.gachaRecordUrl !== "")
            writer.tag(15, runtime_2.WireType.LengthDelimited).string(message.gachaRecordUrl);
        /* string gacha_prob_url = 1; */
        if (message.gachaProbUrl !== "")
            writer.tag(1, runtime_2.WireType.LengthDelimited).string(message.gachaProbUrl);
        /* uint32 begin_time = 14; */
        if (message.beginTime !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 schedule_id = 8; */
        if (message.scheduleId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* repeated uint32 display_up5_item_list = 476; */
        if (message.displayUp5ItemList.length) {
            writer.tag(476, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.displayUp5ItemList.length; i++)
                writer.uint32(message.displayUp5ItemList[i]);
            writer.join();
        }
        /* uint32 gacha_times_limit = 10; */
        if (message.gachaTimesLimit !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.gachaTimesLimit);
        /* string gacha_preview_prefab_path = 4; */
        if (message.gachaPreviewPrefabPath !== "")
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.gachaPreviewPrefabPath);
        /* string title_textmap = 114; */
        if (message.titleTextmap !== "")
            writer.tag(114, runtime_2.WireType.LengthDelimited).string(message.titleTextmap);
        /* uint32 cur_schedule_daily_gacha_times = 245; */
        if (message.curScheduleDailyGachaTimes !== 0)
            writer.tag(245, runtime_2.WireType.Varint).uint32(message.curScheduleDailyGachaTimes);
        /* uint32 end_time = 2; */
        if (message.endTime !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.endTime);
        /* repeated uint32 display_up4_item_list = 540; */
        if (message.displayUp4ItemList.length) {
            writer.tag(540, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.displayUp4ItemList.length; i++)
                writer.uint32(message.displayUp4ItemList[i]);
            writer.join();
        }
        /* uint32 ten_cost_item_num = 13; */
        if (message.tenCostItemNum !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.tenCostItemNum);
        /* uint32 wish_max_progress = 1275; */
        if (message.wishMaxProgress !== 0)
            writer.tag(1275, runtime_2.WireType.Varint).uint32(message.wishMaxProgress);
        /* uint32 ten_cost_item_id = 9; */
        if (message.tenCostItemId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.tenCostItemId);
        /* uint32 gacha_sort_id = 6; */
        if (message.gachaSortId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gachaSortId);
        /* bool is_new_wish = 967; */
        if (message.isNewWish !== false)
            writer.tag(967, runtime_2.WireType.Varint).bool(message.isNewWish);
        /* uint32 cost_item_num = 12; */
        if (message.costItemNum !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.costItemNum);
        /* uint32 wish_item_id = 1580; */
        if (message.wishItemId !== 0)
            writer.tag(1580, runtime_2.WireType.Varint).uint32(message.wishItemId);
        /* string gacha_record_url_oversea = 1259; */
        if (message.gachaRecordUrlOversea !== "")
            writer.tag(1259, runtime_2.WireType.LengthDelimited).string(message.gachaRecordUrlOversea);
        /* repeated GachaUpInfo gacha_up_info_list = 1585; */
        for (let i = 0; i < message.gachaUpInfoList.length; i++)
            GachaUpInfo_1.GachaUpInfo.internalBinaryWrite(message.gachaUpInfoList[i], writer.tag(1585, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cost_item_id = 3; */
        if (message.costItemId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.costItemId);
        /* string gacha_prefab_path = 11; */
        if (message.gachaPrefabPath !== "")
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.gachaPrefabPath);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaInfo
 */
exports.GachaInfo = new GachaInfo$Type();
