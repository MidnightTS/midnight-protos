"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSwitchTeamRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoDungeonTeam_1 = require("./SumoDungeonTeam");
// @generated message type with reflection information, may provide speed optimized methods
class SumoSwitchTeamRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoSwitchTeamRsp", [
            { no: 8, name: "Unk3300_BNJBIGHIJOC", kind: "scalar", jsonName: "Unk3300BNJBIGHIJOC", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_DJBJACGHGDM", kind: "scalar", jsonName: "Unk3300DJBJACGHGDM", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "dungeon_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoDungeonTeam_1.SumoDungeonTeam },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300BNJBIGHIJOC: 0, stageId: 0, activityId: 0, unk3300DJBJACGHGDM: 0, dungeonTeamList: [], retcode: 0 };
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
                case /* uint32 Unk3300_BNJBIGHIJOC = 8 [json_name = "Unk3300BNJBIGHIJOC"];*/ 8:
                    message.unk3300BNJBIGHIJOC = reader.uint32();
                    break;
                case /* uint32 stage_id */ 2:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 activity_id */ 15:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_DJBJACGHGDM = 1 [json_name = "Unk3300DJBJACGHGDM"];*/ 1:
                    message.unk3300DJBJACGHGDM = reader.uint32();
                    break;
                case /* repeated SumoDungeonTeam dungeon_team_list */ 12:
                    message.dungeonTeamList.push(SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
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
        /* uint32 Unk3300_BNJBIGHIJOC = 8 [json_name = "Unk3300BNJBIGHIJOC"]; */
        if (message.unk3300BNJBIGHIJOC !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300BNJBIGHIJOC);
        /* uint32 stage_id = 2; */
        if (message.stageId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 activity_id = 15; */
        if (message.activityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 Unk3300_DJBJACGHGDM = 1 [json_name = "Unk3300DJBJACGHGDM"]; */
        if (message.unk3300DJBJACGHGDM !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300DJBJACGHGDM);
        /* repeated SumoDungeonTeam dungeon_team_list = 12; */
        for (let i = 0; i < message.dungeonTeamList.length; i++)
            SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryWrite(message.dungeonTeamList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoSwitchTeamRsp
 */
exports.SumoSwitchTeamRsp = new SumoSwitchTeamRsp$Type();
