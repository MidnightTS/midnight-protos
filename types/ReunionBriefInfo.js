"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReunionBriefInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ReunionPrivilegeInfo_1 = require("./ReunionPrivilegeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ReunionBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ReunionBriefInfo", [
            { no: 1, name: "first_day_start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "mission_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_OKGAAEDENEI", kind: "scalar", jsonName: "Unk3300OKGAAEDENEI", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "privilege_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "privilege_info", kind: "message", T: () => ReunionPrivilegeInfo_1.ReunionPrivilegeInfo },
            { no: 14, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "first_gift_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_ODKLPOMKKPD", kind: "scalar", jsonName: "Unk3300ODKLPOMKKPD", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_MHHLEJIFFIM", kind: "scalar", jsonName: "Unk3300MHHLEJIFFIM", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "sign_in_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { firstDayStartTime: 0, version: "", missionId: 0, finishTime: 0, unk3300OKGAAEDENEI: false, privilegeId: 0, startTime: 0, firstGiftRewardId: 0, unk3300ODKLPOMKKPD: false, unk3300MHHLEJIFFIM: false, signInConfigId: 0 };
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
                case /* uint32 first_day_start_time */ 1:
                    message.firstDayStartTime = reader.uint32();
                    break;
                case /* string version */ 11:
                    message.version = reader.string();
                    break;
                case /* uint32 mission_id */ 6:
                    message.missionId = reader.uint32();
                    break;
                case /* uint32 finish_time */ 2:
                    message.finishTime = reader.uint32();
                    break;
                case /* bool Unk3300_OKGAAEDENEI = 13 [json_name = "Unk3300OKGAAEDENEI"];*/ 13:
                    message.unk3300OKGAAEDENEI = reader.bool();
                    break;
                case /* uint32 privilege_id */ 5:
                    message.privilegeId = reader.uint32();
                    break;
                case /* ReunionPrivilegeInfo privilege_info */ 10:
                    message.privilegeInfo = ReunionPrivilegeInfo_1.ReunionPrivilegeInfo.internalBinaryRead(reader, reader.uint32(), options, message.privilegeInfo);
                    break;
                case /* uint32 start_time */ 14:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 first_gift_reward_id */ 9:
                    message.firstGiftRewardId = reader.uint32();
                    break;
                case /* bool Unk3300_ODKLPOMKKPD = 8 [json_name = "Unk3300ODKLPOMKKPD"];*/ 8:
                    message.unk3300ODKLPOMKKPD = reader.bool();
                    break;
                case /* bool Unk3300_MHHLEJIFFIM = 7 [json_name = "Unk3300MHHLEJIFFIM"];*/ 7:
                    message.unk3300MHHLEJIFFIM = reader.bool();
                    break;
                case /* uint32 sign_in_config_id */ 12:
                    message.signInConfigId = reader.uint32();
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
        /* uint32 first_day_start_time = 1; */
        if (message.firstDayStartTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.firstDayStartTime);
        /* string version = 11; */
        if (message.version !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.version);
        /* uint32 mission_id = 6; */
        if (message.missionId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.missionId);
        /* uint32 finish_time = 2; */
        if (message.finishTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.finishTime);
        /* bool Unk3300_OKGAAEDENEI = 13 [json_name = "Unk3300OKGAAEDENEI"]; */
        if (message.unk3300OKGAAEDENEI !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300OKGAAEDENEI);
        /* uint32 privilege_id = 5; */
        if (message.privilegeId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.privilegeId);
        /* ReunionPrivilegeInfo privilege_info = 10; */
        if (message.privilegeInfo)
            ReunionPrivilegeInfo_1.ReunionPrivilegeInfo.internalBinaryWrite(message.privilegeInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 start_time = 14; */
        if (message.startTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.startTime);
        /* uint32 first_gift_reward_id = 9; */
        if (message.firstGiftRewardId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.firstGiftRewardId);
        /* bool Unk3300_ODKLPOMKKPD = 8 [json_name = "Unk3300ODKLPOMKKPD"]; */
        if (message.unk3300ODKLPOMKKPD !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300ODKLPOMKKPD);
        /* bool Unk3300_MHHLEJIFFIM = 7 [json_name = "Unk3300MHHLEJIFFIM"]; */
        if (message.unk3300MHHLEJIFFIM !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300MHHLEJIFFIM);
        /* uint32 sign_in_config_id = 12; */
        if (message.signInConfigId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.signInConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReunionBriefInfo
 */
exports.ReunionBriefInfo = new ReunionBriefInfo$Type();
