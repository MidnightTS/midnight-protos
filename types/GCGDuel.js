"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGDuel = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGPhase_1 = require("./GCGPhase");
const GCGMessagePack_1 = require("./GCGMessagePack");
const GCGDuelChallenge_1 = require("./GCGDuelChallenge");
const GCGPVEIntention_1 = require("./GCGPVEIntention");
const GCGGameBusinessType_1 = require("./GCGGameBusinessType");
const Unk3300_ADHENCIFKNI_1 = require("./Unk3300_ADHENCIFKNI");
const GCGPlayerField_1 = require("./GCGPlayerField");
const GCGCostReviseInfo_1 = require("./GCGCostReviseInfo");
const GCGCard_1 = require("./GCGCard");
const GCGControllerShowInfo_1 = require("./GCGControllerShowInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGDuel$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGDuel", [
            { no: 3, name: "server_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "show_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGControllerShowInfo_1.GCGControllerShowInfo },
            { no: 192, name: "forbid_finish_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGCard_1.GCGCard },
            { no: 9, name: "Unk3300_BIANMOPDEHO", kind: "scalar", jsonName: "Unk3300BIANMOPDEHO", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "cost_revise", kind: "message", T: () => GCGCostReviseInfo_1.GCGCostReviseInfo },
            { no: 4, name: "game_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPlayerField_1.GCGPlayerField },
            { no: 1987, name: "Unk3300_CDCMBOKBLAK", kind: "message", jsonName: "Unk3300CDCMBOKBLAK", repeat: 1 /*RepeatType.PACKED*/, T: () => Unk3300_ADHENCIFKNI_1.Unk3300_ADHENCIFKNI },
            { no: 13, name: "business_type", kind: "enum", T: () => ["GCGGameBusinessType", GCGGameBusinessType_1.GCGGameBusinessType] },
            { no: 2, name: "intention_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPVEIntention_1.GCGPVEIntention },
            { no: 1617, name: "challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDuelChallenge_1.GCGDuelChallenge },
            { no: 1872, name: "history_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGCard_1.GCGCard },
            { no: 11, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 797, name: "history_msg_pack_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGMessagePack_1.GCGMessagePack },
            { no: 10, name: "Unk3300_JHDDNKFPINA", kind: "scalar", jsonName: "Unk3300JHDDNKFPINA", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_JBBMBKGOONO", kind: "scalar", jsonName: "Unk3300JBBMBKGOONO", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "phase", kind: "message", T: () => GCGPhase_1.GCGPhase }
        ]);
    }
    create(value) {
        const message = { serverSeq: 0, showInfoList: [], forbidFinishChallengeList: [], cardList: [], unk3300BIANMOPDEHO: 0, gameId: 0, fieldList: [], unk3300CDCMBOKBLAK: [], businessType: 0, intentionList: [], challengeList: [], historyCardList: [], round: 0, controllerId: 0, historyMsgPackList: [], unk3300JHDDNKFPINA: 0, cardIdList: [], unk3300JBBMBKGOONO: 0 };
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
                case /* uint32 server_seq */ 3:
                    message.serverSeq = reader.uint32();
                    break;
                case /* repeated GCGControllerShowInfo show_info_list */ 7:
                    message.showInfoList.push(GCGControllerShowInfo_1.GCGControllerShowInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 forbid_finish_challenge_list */ 192:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forbidFinishChallengeList.push(reader.uint32());
                    else
                        message.forbidFinishChallengeList.push(reader.uint32());
                    break;
                case /* repeated GCGCard card_list */ 1:
                    message.cardList.push(GCGCard_1.GCGCard.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_BIANMOPDEHO = 9 [json_name = "Unk3300BIANMOPDEHO"];*/ 9:
                    message.unk3300BIANMOPDEHO = reader.uint32();
                    break;
                case /* GCGCostReviseInfo cost_revise */ 8:
                    message.costRevise = GCGCostReviseInfo_1.GCGCostReviseInfo.internalBinaryRead(reader, reader.uint32(), options, message.costRevise);
                    break;
                case /* uint32 game_id */ 4:
                    message.gameId = reader.uint32();
                    break;
                case /* repeated GCGPlayerField field_list */ 5:
                    message.fieldList.push(GCGPlayerField_1.GCGPlayerField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated Unk3300_ADHENCIFKNI Unk3300_CDCMBOKBLAK = 1987 [json_name = "Unk3300CDCMBOKBLAK"];*/ 1987:
                    message.unk3300CDCMBOKBLAK.push(Unk3300_ADHENCIFKNI_1.Unk3300_ADHENCIFKNI.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* GCGGameBusinessType business_type */ 13:
                    message.businessType = reader.int32();
                    break;
                case /* repeated GCGPVEIntention intention_list */ 2:
                    message.intentionList.push(GCGPVEIntention_1.GCGPVEIntention.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGDuelChallenge challenge_list */ 1617:
                    message.challengeList.push(GCGDuelChallenge_1.GCGDuelChallenge.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGCard history_card_list */ 1872:
                    message.historyCardList.push(GCGCard_1.GCGCard.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 round */ 11:
                    message.round = reader.uint32();
                    break;
                case /* uint32 controller_id */ 12:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated GCGMessagePack history_msg_pack_list */ 797:
                    message.historyMsgPackList.push(GCGMessagePack_1.GCGMessagePack.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_JHDDNKFPINA = 10 [json_name = "Unk3300JHDDNKFPINA"];*/ 10:
                    message.unk3300JHDDNKFPINA = reader.uint32();
                    break;
                case /* repeated uint32 card_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.cardIdList.push(reader.uint32());
                    else
                        message.cardIdList.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_JBBMBKGOONO = 15 [json_name = "Unk3300JBBMBKGOONO"];*/ 15:
                    message.unk3300JBBMBKGOONO = reader.uint32();
                    break;
                case /* GCGPhase phase */ 14:
                    message.phase = GCGPhase_1.GCGPhase.internalBinaryRead(reader, reader.uint32(), options, message.phase);
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
        /* uint32 server_seq = 3; */
        if (message.serverSeq !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.serverSeq);
        /* repeated GCGControllerShowInfo show_info_list = 7; */
        for (let i = 0; i < message.showInfoList.length; i++)
            GCGControllerShowInfo_1.GCGControllerShowInfo.internalBinaryWrite(message.showInfoList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 forbid_finish_challenge_list = 192; */
        if (message.forbidFinishChallengeList.length) {
            writer.tag(192, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forbidFinishChallengeList.length; i++)
                writer.uint32(message.forbidFinishChallengeList[i]);
            writer.join();
        }
        /* repeated GCGCard card_list = 1; */
        for (let i = 0; i < message.cardList.length; i++)
            GCGCard_1.GCGCard.internalBinaryWrite(message.cardList[i], writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_BIANMOPDEHO = 9 [json_name = "Unk3300BIANMOPDEHO"]; */
        if (message.unk3300BIANMOPDEHO !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.unk3300BIANMOPDEHO);
        /* GCGCostReviseInfo cost_revise = 8; */
        if (message.costRevise)
            GCGCostReviseInfo_1.GCGCostReviseInfo.internalBinaryWrite(message.costRevise, writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 game_id = 4; */
        if (message.gameId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.gameId);
        /* repeated GCGPlayerField field_list = 5; */
        for (let i = 0; i < message.fieldList.length; i++)
            GCGPlayerField_1.GCGPlayerField.internalBinaryWrite(message.fieldList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated Unk3300_ADHENCIFKNI Unk3300_CDCMBOKBLAK = 1987 [json_name = "Unk3300CDCMBOKBLAK"]; */
        for (let i = 0; i < message.unk3300CDCMBOKBLAK.length; i++)
            Unk3300_ADHENCIFKNI_1.Unk3300_ADHENCIFKNI.internalBinaryWrite(message.unk3300CDCMBOKBLAK[i], writer.tag(1987, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GCGGameBusinessType business_type = 13; */
        if (message.businessType !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.businessType);
        /* repeated GCGPVEIntention intention_list = 2; */
        for (let i = 0; i < message.intentionList.length; i++)
            GCGPVEIntention_1.GCGPVEIntention.internalBinaryWrite(message.intentionList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGDuelChallenge challenge_list = 1617; */
        for (let i = 0; i < message.challengeList.length; i++)
            GCGDuelChallenge_1.GCGDuelChallenge.internalBinaryWrite(message.challengeList[i], writer.tag(1617, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGCard history_card_list = 1872; */
        for (let i = 0; i < message.historyCardList.length; i++)
            GCGCard_1.GCGCard.internalBinaryWrite(message.historyCardList[i], writer.tag(1872, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 round = 11; */
        if (message.round !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.round);
        /* uint32 controller_id = 12; */
        if (message.controllerId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* repeated GCGMessagePack history_msg_pack_list = 797; */
        for (let i = 0; i < message.historyMsgPackList.length; i++)
            GCGMessagePack_1.GCGMessagePack.internalBinaryWrite(message.historyMsgPackList[i], writer.tag(797, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_JHDDNKFPINA = 10 [json_name = "Unk3300JHDDNKFPINA"]; */
        if (message.unk3300JHDDNKFPINA !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300JHDDNKFPINA);
        /* repeated uint32 card_id_list = 6; */
        if (message.cardIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.cardIdList.length; i++)
                writer.uint32(message.cardIdList[i]);
            writer.join();
        }
        /* uint32 Unk3300_JBBMBKGOONO = 15 [json_name = "Unk3300JBBMBKGOONO"]; */
        if (message.unk3300JBBMBKGOONO !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300JBBMBKGOONO);
        /* GCGPhase phase = 14; */
        if (message.phase)
            GCGPhase_1.GCGPhase.internalBinaryWrite(message.phase, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDuel
 */
exports.GCGDuel = new GCGDuel$Type();
