"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoStageData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoTeamData_1 = require("./SumoTeamData");
// @generated message type with reflection information, may provide speed optimized methods
class SumoStageData$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoStageData", [
            { no: 2, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoTeamData_1.SumoTeamData },
            { no: 7, name: "max_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, openTime: 0, teamList: [], maxScore: 0, isOpen: false };
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
                case /* uint32 stage_id */ 2:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 open_time */ 15:
                    message.openTime = reader.uint32();
                    break;
                case /* repeated SumoTeamData team_list */ 1:
                    message.teamList.push(SumoTeamData_1.SumoTeamData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 max_score */ 7:
                    message.maxScore = reader.uint32();
                    break;
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
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
        /* uint32 stage_id = 2; */
        if (message.stageId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 open_time = 15; */
        if (message.openTime !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.openTime);
        /* repeated SumoTeamData team_list = 1; */
        for (let i = 0; i < message.teamList.length; i++)
            SumoTeamData_1.SumoTeamData.internalBinaryWrite(message.teamList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 max_score = 7; */
        if (message.maxScore !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.maxScore);
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoStageData
 */
exports.SumoStageData = new SumoStageData$Type();
