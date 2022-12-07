"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChannelerSlabChallengeStage_1 = require("./ChannelerSlabChallengeStage");
const ChannelerSlabBuffInfo_1 = require("./ChannelerSlabBuffInfo");
const ChannelerSlabLoopDungeonStageInfo_1 = require("./ChannelerSlabLoopDungeonStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabActivityDetailInfo", [
            { no: 2, name: "loop_dungeon_stage_info", kind: "message", T: () => ChannelerSlabLoopDungeonStageInfo_1.ChannelerSlabLoopDungeonStageInfo },
            { no: 9, name: "buff_info", kind: "message", T: () => ChannelerSlabBuffInfo_1.ChannelerSlabBuffInfo },
            { no: 8, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabChallengeStage_1.ChannelerSlabChallengeStage },
            { no: 14, name: "play_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageList: [], playEndTime: 0 };
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
                case /* ChannelerSlabLoopDungeonStageInfo loop_dungeon_stage_info */ 2:
                    message.loopDungeonStageInfo = ChannelerSlabLoopDungeonStageInfo_1.ChannelerSlabLoopDungeonStageInfo.internalBinaryRead(reader, reader.uint32(), options, message.loopDungeonStageInfo);
                    break;
                case /* ChannelerSlabBuffInfo buff_info */ 9:
                    message.buffInfo = ChannelerSlabBuffInfo_1.ChannelerSlabBuffInfo.internalBinaryRead(reader, reader.uint32(), options, message.buffInfo);
                    break;
                case /* repeated ChannelerSlabChallengeStage stage_list */ 8:
                    message.stageList.push(ChannelerSlabChallengeStage_1.ChannelerSlabChallengeStage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 play_end_time */ 14:
                    message.playEndTime = reader.uint32();
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
        /* ChannelerSlabLoopDungeonStageInfo loop_dungeon_stage_info = 2; */
        if (message.loopDungeonStageInfo)
            ChannelerSlabLoopDungeonStageInfo_1.ChannelerSlabLoopDungeonStageInfo.internalBinaryWrite(message.loopDungeonStageInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ChannelerSlabBuffInfo buff_info = 9; */
        if (message.buffInfo)
            ChannelerSlabBuffInfo_1.ChannelerSlabBuffInfo.internalBinaryWrite(message.buffInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ChannelerSlabChallengeStage stage_list = 8; */
        for (let i = 0; i < message.stageList.length; i++)
            ChannelerSlabChallengeStage_1.ChannelerSlabChallengeStage.internalBinaryWrite(message.stageList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 play_end_time = 14; */
        if (message.playEndTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playEndTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabActivityDetailInfo
 */
exports.ChannelerSlabActivityDetailInfo = new ChannelerSlabActivityDetailInfo$Type();
