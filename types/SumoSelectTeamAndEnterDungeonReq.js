"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSelectTeamAndEnterDungeonReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoTeamData_1 = require("./SumoTeamData");
// @generated message type with reflection information, may provide speed optimized methods
class SumoSelectTeamAndEnterDungeonReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoSelectTeamAndEnterDungeonReq", [
            { no: 15, name: "team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoTeamData_1.SumoTeamData },
            { no: 1, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { teamList: [], activityId: 0, difficultyId: 0, stageId: 0 };
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
                case /* repeated SumoTeamData team_list */ 15:
                    message.teamList.push(SumoTeamData_1.SumoTeamData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 activity_id */ 1:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 difficulty_id */ 5:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 7:
                    message.stageId = reader.uint32();
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
        /* repeated SumoTeamData team_list = 15; */
        for (let i = 0; i < message.teamList.length; i++)
            SumoTeamData_1.SumoTeamData.internalBinaryWrite(message.teamList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 activity_id = 1; */
        if (message.activityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 difficulty_id = 5; */
        if (message.difficultyId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 stage_id = 7; */
        if (message.stageId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoSelectTeamAndEnterDungeonReq
 */
exports.SumoSelectTeamAndEnterDungeonReq = new SumoSelectTeamAndEnterDungeonReq$Type();