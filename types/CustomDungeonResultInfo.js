"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonResultInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChallengeBrief_1 = require("./ChallengeBrief");
const CustomDungeonFinishType_1 = require("./CustomDungeonFinishType");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonResultInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonResultInfo", [
            { no: 13, name: "is_liked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_arrive_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "finish_type", kind: "enum", T: () => ["CustomDungeonFinishType", CustomDungeonFinishType_1.CustomDungeonFinishType, "CUSTOM_DUNGEON_FINISH_TYPE_"] },
            { no: 1, name: "child_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChallengeBrief_1.ChallengeBrief },
            { no: 6, name: "is_stored", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "time_cost", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "got_coin_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isLiked: false, isArriveFinish: false, dungeonGuid: 0n, finishType: 0, childChallengeList: [], isStored: false, timeCost: 0, gotCoinNum: 0 };
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
                case /* bool is_liked */ 13:
                    message.isLiked = reader.bool();
                    break;
                case /* bool is_arrive_finish */ 2:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* uint64 dungeon_guid */ 5:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* CustomDungeonFinishType finish_type */ 8:
                    message.finishType = reader.int32();
                    break;
                case /* repeated ChallengeBrief child_challenge_list */ 1:
                    message.childChallengeList.push(ChallengeBrief_1.ChallengeBrief.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_stored */ 6:
                    message.isStored = reader.bool();
                    break;
                case /* uint32 time_cost */ 9:
                    message.timeCost = reader.uint32();
                    break;
                case /* uint32 got_coin_num */ 4:
                    message.gotCoinNum = reader.uint32();
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
        /* bool is_liked = 13; */
        if (message.isLiked !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isLiked);
        /* bool is_arrive_finish = 2; */
        if (message.isArriveFinish !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isArriveFinish);
        /* uint64 dungeon_guid = 5; */
        if (message.dungeonGuid !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* CustomDungeonFinishType finish_type = 8; */
        if (message.finishType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.finishType);
        /* repeated ChallengeBrief child_challenge_list = 1; */
        for (let i = 0; i < message.childChallengeList.length; i++)
            ChallengeBrief_1.ChallengeBrief.internalBinaryWrite(message.childChallengeList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_stored = 6; */
        if (message.isStored !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isStored);
        /* uint32 time_cost = 9; */
        if (message.timeCost !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.timeCost);
        /* uint32 got_coin_num = 4; */
        if (message.gotCoinNum !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.gotCoinNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonResultInfo
 */
exports.CustomDungeonResultInfo = new CustomDungeonResultInfo$Type();
