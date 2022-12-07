"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoEnterDungeonNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SumoDungeonTeam_1 = require("./SumoDungeonTeam");
// @generated message type with reflection information, may provide speed optimized methods
class SumoEnterDungeonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoEnterDungeonNotify", [
            { no: 15, name: "Unk3300_DJBJACGHGDM", kind: "scalar", jsonName: "Unk3300DJBJACGHGDM", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_CBAMLHDMKJF", kind: "scalar", jsonName: "Unk3300CBAMLHDMKJF", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "dungeon_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SumoDungeonTeam_1.SumoDungeonTeam },
            { no: 5, name: "Unk3300_BNJBIGHIJOC", kind: "scalar", jsonName: "Unk3300BNJBIGHIJOC", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300DJBJACGHGDM: 0, unk3300CBAMLHDMKJF: 0, dungeonTeamList: [], unk3300BNJBIGHIJOC: 0, activityId: 0, stageId: 0 };
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
                case /* uint32 Unk3300_DJBJACGHGDM = 15 [json_name = "Unk3300DJBJACGHGDM"];*/ 15:
                    message.unk3300DJBJACGHGDM = reader.uint32();
                    break;
                case /* uint32 Unk3300_CBAMLHDMKJF = 7 [json_name = "Unk3300CBAMLHDMKJF"];*/ 7:
                    message.unk3300CBAMLHDMKJF = reader.uint32();
                    break;
                case /* repeated SumoDungeonTeam dungeon_team_list */ 14:
                    message.dungeonTeamList.push(SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_BNJBIGHIJOC = 5 [json_name = "Unk3300BNJBIGHIJOC"];*/ 5:
                    message.unk3300BNJBIGHIJOC = reader.uint32();
                    break;
                case /* uint32 activity_id */ 3:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 stage_id */ 11:
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
        /* uint32 Unk3300_DJBJACGHGDM = 15 [json_name = "Unk3300DJBJACGHGDM"]; */
        if (message.unk3300DJBJACGHGDM !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.unk3300DJBJACGHGDM);
        /* uint32 Unk3300_CBAMLHDMKJF = 7 [json_name = "Unk3300CBAMLHDMKJF"]; */
        if (message.unk3300CBAMLHDMKJF !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300CBAMLHDMKJF);
        /* repeated SumoDungeonTeam dungeon_team_list = 14; */
        for (let i = 0; i < message.dungeonTeamList.length; i++)
            SumoDungeonTeam_1.SumoDungeonTeam.internalBinaryWrite(message.dungeonTeamList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_BNJBIGHIJOC = 5 [json_name = "Unk3300BNJBIGHIJOC"]; */
        if (message.unk3300BNJBIGHIJOC !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300BNJBIGHIJOC);
        /* uint32 activity_id = 3; */
        if (message.activityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 stage_id = 11; */
        if (message.stageId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoEnterDungeonNotify
 */
exports.SumoEnterDungeonNotify = new SumoEnterDungeonNotify$Type();
