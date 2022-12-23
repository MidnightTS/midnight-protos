"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CityReputationExploreInfo_1 = require("./CityReputationExploreInfo");
const CityReputationHuntInfo_1 = require("./CityReputationHuntInfo");
const CityReputationRequestInfo_1 = require("./CityReputationRequestInfo");
const CityReputationQuestInfo_1 = require("./CityReputationQuestInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationInfo", [
            { no: 8, name: "exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "quest_info", kind: "message", T: () => CityReputationQuestInfo_1.CityReputationQuestInfo },
            { no: 10, name: "taken_level_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "request_info", kind: "message", T: () => CityReputationRequestInfo_1.CityReputationRequestInfo },
            { no: 11, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "total_accept_request_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "hunt_info", kind: "message", T: () => CityReputationHuntInfo_1.CityReputationHuntInfo },
            { no: 3, name: "explore_info", kind: "message", T: () => CityReputationExploreInfo_1.CityReputationExploreInfo },
            { no: 2, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exp: 0, takenLevelRewardList: [], nextRefreshTime: 0, totalAcceptRequestNum: 0, level: 0 };
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
                case /* uint32 exp */ 8:
                    message.exp = reader.uint32();
                    break;
                case /* CityReputationQuestInfo quest_info */ 9:
                    message.questInfo = CityReputationQuestInfo_1.CityReputationQuestInfo.internalBinaryRead(reader, reader.uint32(), options, message.questInfo);
                    break;
                case /* repeated uint32 taken_level_reward_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenLevelRewardList.push(reader.uint32());
                    else
                        message.takenLevelRewardList.push(reader.uint32());
                    break;
                case /* CityReputationRequestInfo request_info */ 5:
                    message.requestInfo = CityReputationRequestInfo_1.CityReputationRequestInfo.internalBinaryRead(reader, reader.uint32(), options, message.requestInfo);
                    break;
                case /* uint32 next_refresh_time */ 11:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 total_accept_request_num */ 12:
                    message.totalAcceptRequestNum = reader.uint32();
                    break;
                case /* CityReputationHuntInfo hunt_info */ 15:
                    message.huntInfo = CityReputationHuntInfo_1.CityReputationHuntInfo.internalBinaryRead(reader, reader.uint32(), options, message.huntInfo);
                    break;
                case /* CityReputationExploreInfo explore_info */ 3:
                    message.exploreInfo = CityReputationExploreInfo_1.CityReputationExploreInfo.internalBinaryRead(reader, reader.uint32(), options, message.exploreInfo);
                    break;
                case /* uint32 level */ 2:
                    message.level = reader.uint32();
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
        /* uint32 exp = 8; */
        if (message.exp !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.exp);
        /* CityReputationQuestInfo quest_info = 9; */
        if (message.questInfo)
            CityReputationQuestInfo_1.CityReputationQuestInfo.internalBinaryWrite(message.questInfo, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 taken_level_reward_list = 10; */
        if (message.takenLevelRewardList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenLevelRewardList.length; i++)
                writer.uint32(message.takenLevelRewardList[i]);
            writer.join();
        }
        /* CityReputationRequestInfo request_info = 5; */
        if (message.requestInfo)
            CityReputationRequestInfo_1.CityReputationRequestInfo.internalBinaryWrite(message.requestInfo, writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 11; */
        if (message.nextRefreshTime !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 total_accept_request_num = 12; */
        if (message.totalAcceptRequestNum !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.totalAcceptRequestNum);
        /* CityReputationHuntInfo hunt_info = 15; */
        if (message.huntInfo)
            CityReputationHuntInfo_1.CityReputationHuntInfo.internalBinaryWrite(message.huntInfo, writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* CityReputationExploreInfo explore_info = 3; */
        if (message.exploreInfo)
            CityReputationExploreInfo_1.CityReputationExploreInfo.internalBinaryWrite(message.exploreInfo, writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level = 2; */
        if (message.level !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationInfo
 */
exports.CityReputationInfo = new CityReputationInfo$Type();
