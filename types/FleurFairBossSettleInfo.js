"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairBossSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FleurFairPlayerStatInfo_1 = require("./FleurFairPlayerStatInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairBossSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairBossSettleInfo", [
            { no: 14, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stat_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FleurFairPlayerStatInfo_1.FleurFairPlayerStatInfo },
            { no: 4, name: "energy", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "reward_token_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { costTime: 0, statInfoList: [], energy: 0, isSuccess: false, rewardTokenNum: 0 };
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
                case /* uint32 cost_time */ 14:
                    message.costTime = reader.uint32();
                    break;
                case /* repeated FleurFairPlayerStatInfo stat_info_list */ 11:
                    message.statInfoList.push(FleurFairPlayerStatInfo_1.FleurFairPlayerStatInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 energy */ 4:
                    message.energy = reader.uint32();
                    break;
                case /* bool is_success */ 2:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 reward_token_num */ 15:
                    message.rewardTokenNum = reader.uint32();
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
        /* uint32 cost_time = 14; */
        if (message.costTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.costTime);
        /* repeated FleurFairPlayerStatInfo stat_info_list = 11; */
        for (let i = 0; i < message.statInfoList.length; i++)
            FleurFairPlayerStatInfo_1.FleurFairPlayerStatInfo.internalBinaryWrite(message.statInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 energy = 4; */
        if (message.energy !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.energy);
        /* bool is_success = 2; */
        if (message.isSuccess !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 reward_token_num = 15; */
        if (message.rewardTokenNum !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.rewardTokenNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairBossSettleInfo
 */
exports.FleurFairBossSettleInfo = new FleurFairBossSettleInfo$Type();
