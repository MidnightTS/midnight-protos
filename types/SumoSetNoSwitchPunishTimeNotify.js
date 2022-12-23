"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSetNoSwitchPunishTimeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoDungeonTeam_1 = require("./SumoDungeonTeam");
// @generated message type with reflection information, may provide speed optimized methods
class SumoSetNoSwitchPunishTimeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoSetNoSwitchPunishTimeNotify", [
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_CBAMLHDMKJF", kind: "scalar", jsonName: "Unk3300CBAMLHDMKJF", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_BNJBIGHIJOC", kind: "scalar", jsonName: "Unk3300BNJBIGHIJOC", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_DJBJACGHGDM", kind: "scalar", jsonName: "Unk3300DJBJACGHGDM", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dungeon_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoDungeonTeam_1.SumoDungeonTeam }
        ]);
    }
    create(value) {
        const message = { stageId: 0, unk3300CBAMLHDMKJF: 0, activityId: 0, unk3300BNJBIGHIJOC: 0, unk3300DJBJACGHGDM: 0, dungeonTeamList: [] };
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
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 Unk3300_CBAMLHDMKJF = 10 [json_name = "Unk3300CBAMLHDMKJF"];*/ 10:
                    message.unk3300CBAMLHDMKJF = reader.uint32();
                    break;
                case /* uint32 activity_id */ 5:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 Unk3300_BNJBIGHIJOC = 3 [json_name = "Unk3300BNJBIGHIJOC"];*/ 3:
                    message.unk3300BNJBIGHIJOC = reader.uint32();
                    break;
                case /* uint32 Unk3300_DJBJACGHGDM = 9 [json_name = "Unk3300DJBJACGHGDM"];*/ 9:
                    message.unk3300DJBJACGHGDM = reader.uint32();
                    break;
                case /* repeated SumoDungeonTeam dungeon_team_list */ 2:
                    message.dungeonTeamList.push(SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 Unk3300_CBAMLHDMKJF = 10 [json_name = "Unk3300CBAMLHDMKJF"]; */
        if (message.unk3300CBAMLHDMKJF !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300CBAMLHDMKJF);
        /* uint32 activity_id = 5; */
        if (message.activityId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 Unk3300_BNJBIGHIJOC = 3 [json_name = "Unk3300BNJBIGHIJOC"]; */
        if (message.unk3300BNJBIGHIJOC !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300BNJBIGHIJOC);
        /* uint32 Unk3300_DJBJACGHGDM = 9 [json_name = "Unk3300DJBJACGHGDM"]; */
        if (message.unk3300DJBJACGHGDM !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300DJBJACGHGDM);
        /* repeated SumoDungeonTeam dungeon_team_list = 2; */
        for (let i = 0; i < message.dungeonTeamList.length; i++)
            SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryWrite(message.dungeonTeamList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoSetNoSwitchPunishTimeNotify
 */
exports.SumoSetNoSwitchPunishTimeNotify = new SumoSetNoSwitchPunishTimeNotify$Type();
