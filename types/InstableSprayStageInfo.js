"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstableSprayStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InstableSprayTeamInfo_1 = require("./InstableSprayTeamInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InstableSprayStageInfo", [
            { no: 12, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "team_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InstableSprayTeamInfo_1.InstableSprayTeamInfo },
            { no: 7, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFinished: false, stageId: 0, teamInfoList: [], maxScore: 0 };
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
                case /* bool is_finished */ 12:
                    message.isFinished = reader.bool();
                    break;
                case /* uint32 stage_id */ 2:
                    message.stageId = reader.uint32();
                    break;
                case /* repeated InstableSprayTeamInfo team_info_list */ 9:
                    message.teamInfoList.push(InstableSprayTeamInfo_1.InstableSprayTeamInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 max_score */ 7:
                    message.maxScore = reader.uint32();
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
        /* bool is_finished = 12; */
        if (message.isFinished !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isFinished);
        /* uint32 stage_id = 2; */
        if (message.stageId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.stageId);
        /* repeated InstableSprayTeamInfo team_info_list = 9; */
        for (let i = 0; i < message.teamInfoList.length; i++)
            InstableSprayTeamInfo_1.InstableSprayTeamInfo.internalBinaryWrite(message.teamInfoList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 max_score = 7; */
        if (message.maxScore !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.maxScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InstableSprayStageInfo
 */
exports.InstableSprayStageInfo = new InstableSprayStageInfo$Type();
