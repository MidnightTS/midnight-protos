"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSelectTeamAndEnterDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoTeamData_1 = require("./SumoTeamData");
// @generated message type with reflection information, may provide speed optimized methods
class SumoSelectTeamAndEnterDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoSelectTeamAndEnterDungeonRsp", [
            { no: 12, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoTeamData_1.SumoTeamData }
        ]);
    }
    create(value) {
        const message = { difficultyId: 0, activityId: 0, stageId: 0, retcode: 0, teamList: [] };
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
                case /* uint32 difficulty_id */ 12:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 9:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 6:
                    message.stageId = reader.uint32();
                    break;
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* repeated SumoTeamData team_list */ 3:
                    message.teamList.push(SumoTeamData_1.SumoTeamData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 difficulty_id = 12; */
        if (message.difficultyId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 activity_id = 9; */
        if (message.activityId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 stage_id = 6; */
        if (message.stageId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.stageId);
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated SumoTeamData team_list = 3; */
        for (let i = 0; i < message.teamList.length; i++)
            SumoTeamData_1.SumoTeamData.internalBinaryWrite(message.teamList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoSelectTeamAndEnterDungeonRsp
 */
exports.SumoSelectTeamAndEnterDungeonRsp = new SumoSelectTeamAndEnterDungeonRsp$Type();
