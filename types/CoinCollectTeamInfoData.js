"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinCollectTeamInfoData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CoinCollectTeamInfoData$Type extends runtime_5.MessageType {
    constructor() {
        super("CoinCollectTeamInfoData", [
            { no: 2, name: "Unk3300_CPDGJEIOJAB", kind: "scalar", jsonName: "Unk3300CPDGJEIOJAB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "choose_skill_no", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_IFBDFEOGOLH", kind: "scalar", jsonName: "Unk3300IFBDFEOGOLH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "is_host", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CPDGJEIOJAB: [], chooseSkillNo: 0, unk3300IFBDFEOGOLH: [], isHost: false, playerUid: 0, avatarIdList: [] };
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
                case /* repeated uint32 Unk3300_CPDGJEIOJAB = 2 [json_name = "Unk3300CPDGJEIOJAB"];*/ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CPDGJEIOJAB.push(reader.uint32());
                    else
                        message.unk3300CPDGJEIOJAB.push(reader.uint32());
                    break;
                case /* uint32 choose_skill_no */ 11:
                    message.chooseSkillNo = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_IFBDFEOGOLH = 15 [json_name = "Unk3300IFBDFEOGOLH"];*/ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IFBDFEOGOLH.push(reader.uint32());
                    else
                        message.unk3300IFBDFEOGOLH.push(reader.uint32());
                    break;
                case /* bool is_host */ 13:
                    message.isHost = reader.bool();
                    break;
                case /* uint32 player_uid */ 6:
                    message.playerUid = reader.uint32();
                    break;
                case /* repeated uint32 avatar_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 Unk3300_CPDGJEIOJAB = 2 [json_name = "Unk3300CPDGJEIOJAB"]; */
        if (message.unk3300CPDGJEIOJAB.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CPDGJEIOJAB.length; i++)
                writer.uint32(message.unk3300CPDGJEIOJAB[i]);
            writer.join();
        }
        /* uint32 choose_skill_no = 11; */
        if (message.chooseSkillNo !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.chooseSkillNo);
        /* repeated uint32 Unk3300_IFBDFEOGOLH = 15 [json_name = "Unk3300IFBDFEOGOLH"]; */
        if (message.unk3300IFBDFEOGOLH.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IFBDFEOGOLH.length; i++)
                writer.uint32(message.unk3300IFBDFEOGOLH[i]);
            writer.join();
        }
        /* bool is_host = 13; */
        if (message.isHost !== false)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isHost);
        /* uint32 player_uid = 6; */
        if (message.playerUid !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.playerUid);
        /* repeated uint32 avatar_id_list = 7; */
        if (message.avatarIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoinCollectTeamInfoData
 */
exports.CoinCollectTeamInfoData = new CoinCollectTeamInfoData$Type();
