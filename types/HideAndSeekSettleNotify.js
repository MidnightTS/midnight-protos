"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekSettleNotify = exports.HideAndSeekSettleNotify_SettleReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HideAndSeekSettleInfo_1 = require("./HideAndSeekSettleInfo");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
/**
 * @generated from protobuf enum HideAndSeekSettleNotify.SettleReason
 */
var HideAndSeekSettleNotify_SettleReason;
(function (HideAndSeekSettleNotify_SettleReason) {
    /**
     * @generated from protobuf enum value: SETTLE_REASON_TIME_OUT = 0;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["TIME_OUT"] = 0] = "TIME_OUT";
    /**
     * @generated from protobuf enum value: SETTLE_REASON_PLAY_END = 1;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["PLAY_END"] = 1] = "PLAY_END";
    /**
     * @generated from protobuf enum value: SETTLE_REASON_PLAYER_QUIT = 2;
     */
    HideAndSeekSettleNotify_SettleReason[HideAndSeekSettleNotify_SettleReason["PLAYER_QUIT"] = 2] = "PLAYER_QUIT";
})(HideAndSeekSettleNotify_SettleReason = exports.HideAndSeekSettleNotify_SettleReason || (exports.HideAndSeekSettleNotify_SettleReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HideAndSeekSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HideAndSeekSettleNotify", [
            { no: 6, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo },
            { no: 1, name: "reason", kind: "enum", T: () => ["HideAndSeekSettleNotify.SettleReason", HideAndSeekSettleNotify_SettleReason, "SETTLE_REASON_"] },
            { no: 2, name: "winner_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "stage_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_record_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "settle_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HideAndSeekSettleInfo_1.HideAndSeekSettleInfo }
        ]);
    }
    create(value) {
        const message = { playIndex: 0, scoreList: [], reason: 0, winnerList: [], costTime: 0, stageType: 0, isRecordScore: false, settleInfoList: [] };
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
                case /* uint32 play_index */ 6:
                    message.playIndex = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo score_list */ 11:
                    message.scoreList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* HideAndSeekSettleNotify.SettleReason reason */ 1:
                    message.reason = reader.int32();
                    break;
                case /* repeated uint32 winner_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.winnerList.push(reader.uint32());
                    else
                        message.winnerList.push(reader.uint32());
                    break;
                case /* uint32 cost_time */ 15:
                    message.costTime = reader.uint32();
                    break;
                case /* uint32 stage_type */ 7:
                    message.stageType = reader.uint32();
                    break;
                case /* bool is_record_score */ 5:
                    message.isRecordScore = reader.bool();
                    break;
                case /* repeated HideAndSeekSettleInfo settle_info_list */ 4:
                    message.settleInfoList.push(HideAndSeekSettleInfo_1.HideAndSeekSettleInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 play_index = 6; */
        if (message.playIndex !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.playIndex);
        /* repeated ExhibitionDisplayInfo score_list = 11; */
        for (let i = 0; i < message.scoreList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* HideAndSeekSettleNotify.SettleReason reason = 1; */
        if (message.reason !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.reason);
        /* repeated uint32 winner_list = 2; */
        if (message.winnerList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.winnerList.length; i++)
                writer.uint32(message.winnerList[i]);
            writer.join();
        }
        /* uint32 cost_time = 15; */
        if (message.costTime !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.costTime);
        /* uint32 stage_type = 7; */
        if (message.stageType !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.stageType);
        /* bool is_record_score = 5; */
        if (message.isRecordScore !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isRecordScore);
        /* repeated HideAndSeekSettleInfo settle_info_list = 4; */
        for (let i = 0; i < message.settleInfoList.length; i++)
            HideAndSeekSettleInfo_1.HideAndSeekSettleInfo.internalBinaryWrite(message.settleInfoList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HideAndSeekSettleNotify
 */
exports.HideAndSeekSettleNotify = new HideAndSeekSettleNotify$Type();
