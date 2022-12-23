"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGEndReason_1 = require("./GCGEndReason");
const GCGGameBusinessType_1 = require("./GCGGameBusinessType");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSettleNotify", [
            { no: 8, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 1, name: "finished_challenge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "game_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_win", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "business_type", kind: "enum", T: () => ["GCGGameBusinessType", GCGGameBusinessType_1.GCGGameBusinessType] },
            { no: 11, name: "win_controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "forbid_finish_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reason", kind: "enum", T: () => ["GCGEndReason", GCGEndReason_1.GCGEndReason] }
        ]);
    }
    create(value) {
        const message = { rewardItemList: [], finishedChallengeIdList: [], gameId: 0, isWin: false, businessType: 0, winControllerId: 0, forbidFinishChallengeList: [], reason: 0 };
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
                case /* repeated ItemParam reward_item_list */ 8:
                    message.rewardItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 finished_challenge_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedChallengeIdList.push(reader.uint32());
                    else
                        message.finishedChallengeIdList.push(reader.uint32());
                    break;
                case /* uint32 game_id */ 3:
                    message.gameId = reader.uint32();
                    break;
                case /* bool is_win */ 2:
                    message.isWin = reader.bool();
                    break;
                case /* GCGGameBusinessType business_type */ 5:
                    message.businessType = reader.int32();
                    break;
                case /* uint32 win_controller_id */ 11:
                    message.winControllerId = reader.uint32();
                    break;
                case /* repeated uint32 forbid_finish_challenge_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forbidFinishChallengeList.push(reader.uint32());
                    else
                        message.forbidFinishChallengeList.push(reader.uint32());
                    break;
                case /* GCGEndReason reason */ 4:
                    message.reason = reader.int32();
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
        /* repeated ItemParam reward_item_list = 8; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 finished_challenge_id_list = 1; */
        if (message.finishedChallengeIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedChallengeIdList.length; i++)
                writer.uint32(message.finishedChallengeIdList[i]);
            writer.join();
        }
        /* uint32 game_id = 3; */
        if (message.gameId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.gameId);
        /* bool is_win = 2; */
        if (message.isWin !== false)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isWin);
        /* GCGGameBusinessType business_type = 5; */
        if (message.businessType !== 0)
            writer.tag(5, runtime_2.WireType.Varint).int32(message.businessType);
        /* uint32 win_controller_id = 11; */
        if (message.winControllerId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.winControllerId);
        /* repeated uint32 forbid_finish_challenge_list = 10; */
        if (message.forbidFinishChallengeList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forbidFinishChallengeList.length; i++)
                writer.uint32(message.forbidFinishChallengeList[i]);
            writer.join();
        }
        /* GCGEndReason reason = 4; */
        if (message.reason !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSettleNotify
 */
exports.GCGSettleNotify = new GCGSettleNotify$Type();
