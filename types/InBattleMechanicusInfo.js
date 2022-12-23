"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InBattleMechanicusCardInfo_1 = require("./InBattleMechanicusCardInfo");
const InBattleMechanicusMonsterInfo_1 = require("./InBattleMechanicusMonsterInfo");
const InBattleMechanicusPlayerInfo_1 = require("./InBattleMechanicusPlayerInfo");
const InBattleMechanicusStageType_1 = require("./InBattleMechanicusStageType");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusInfo", [
            { no: 656, name: "Unk3300_MNNDELKIBLG", kind: "scalar", jsonName: "Unk3300MNNDELKIBLG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 683, name: "Unk3300_GHBEHPGBBIH", kind: "scalar", jsonName: "Unk3300GHBEHPGBBIH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "stage", kind: "enum", T: () => ["InBattleMechanicusStageType", InBattleMechanicusStageType_1.InBattleMechanicusStageType, "IN_BATTLE_MECHANICUS_STAGE_TYPE_"] },
            { no: 4, name: "Unk3300_EBOIGFMOKHK", kind: "scalar", jsonName: "Unk3300EBOIGFMOKHK", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "wait_seconds", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "left_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_IFIPKLOGEOF", kind: "scalar", jsonName: "Unk3300IFIPKLOGEOF", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "player_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusPlayerInfo_1.InBattleMechanicusPlayerInfo },
            { no: 1, name: "total_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_IAPINOLIALF", kind: "scalar", jsonName: "Unk3300IAPINOLIALF", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "monster_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusMonsterInfo_1.InBattleMechanicusMonsterInfo },
            { no: 3, name: "Unk3300_CIJALCAMHCD", kind: "scalar", jsonName: "Unk3300CIJALCAMHCD", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "wait_begin_time_us", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "history_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo },
            { no: 8, name: "pick_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo },
            { no: 10, name: "escaped_monster_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300MNNDELKIBLG: [], unk3300GHBEHPGBBIH: [], stage: 0, unk3300EBOIGFMOKHK: 0, waitSeconds: 0, leftMonsterNum: 0, unk3300IFIPKLOGEOF: 0n, playerList: [], totalRound: 0, unk3300IAPINOLIALF: 0n, monsterList: [], unk3300CIJALCAMHCD: 0, waitBeginTimeUs: 0n, historyCardList: [], pickCardList: [], escapedMonsterNum: 0, round: 0 };
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
                case /* repeated uint32 Unk3300_MNNDELKIBLG = 656 [json_name = "Unk3300MNNDELKIBLG"];*/ 656:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MNNDELKIBLG.push(reader.uint32());
                    else
                        message.unk3300MNNDELKIBLG.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_GHBEHPGBBIH = 683 [json_name = "Unk3300GHBEHPGBBIH"];*/ 683:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300GHBEHPGBBIH.push(reader.uint32());
                    else
                        message.unk3300GHBEHPGBBIH.push(reader.uint32());
                    break;
                case /* InBattleMechanicusStageType stage */ 7:
                    message.stage = reader.int32();
                    break;
                case /* uint32 Unk3300_EBOIGFMOKHK = 4 [json_name = "Unk3300EBOIGFMOKHK"];*/ 4:
                    message.unk3300EBOIGFMOKHK = reader.uint32();
                    break;
                case /* uint32 wait_seconds */ 13:
                    message.waitSeconds = reader.uint32();
                    break;
                case /* uint32 left_monster_num */ 15:
                    message.leftMonsterNum = reader.uint32();
                    break;
                case /* uint64 Unk3300_IFIPKLOGEOF = 6 [json_name = "Unk3300IFIPKLOGEOF"];*/ 6:
                    message.unk3300IFIPKLOGEOF = reader.uint64().toBigInt();
                    break;
                case /* repeated InBattleMechanicusPlayerInfo player_list */ 12:
                    message.playerList.push(InBattleMechanicusPlayerInfo_1.InBattleMechanicusPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 total_round */ 1:
                    message.totalRound = reader.uint32();
                    break;
                case /* uint64 Unk3300_IAPINOLIALF = 14 [json_name = "Unk3300IAPINOLIALF"];*/ 14:
                    message.unk3300IAPINOLIALF = reader.uint64().toBigInt();
                    break;
                case /* repeated InBattleMechanicusMonsterInfo monster_list */ 9:
                    message.monsterList.push(InBattleMechanicusMonsterInfo_1.InBattleMechanicusMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_CIJALCAMHCD = 3 [json_name = "Unk3300CIJALCAMHCD"];*/ 3:
                    message.unk3300CIJALCAMHCD = reader.uint32();
                    break;
                case /* uint64 wait_begin_time_us */ 2:
                    message.waitBeginTimeUs = reader.uint64().toBigInt();
                    break;
                case /* repeated InBattleMechanicusCardInfo history_card_list */ 5:
                    message.historyCardList.push(InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated InBattleMechanicusCardInfo pick_card_list */ 8:
                    message.pickCardList.push(InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 escaped_monster_num */ 10:
                    message.escapedMonsterNum = reader.uint32();
                    break;
                case /* uint32 round */ 11:
                    message.round = reader.uint32();
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
        /* repeated uint32 Unk3300_MNNDELKIBLG = 656 [json_name = "Unk3300MNNDELKIBLG"]; */
        if (message.unk3300MNNDELKIBLG.length) {
            writer.tag(656, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MNNDELKIBLG.length; i++)
                writer.uint32(message.unk3300MNNDELKIBLG[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_GHBEHPGBBIH = 683 [json_name = "Unk3300GHBEHPGBBIH"]; */
        if (message.unk3300GHBEHPGBBIH.length) {
            writer.tag(683, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300GHBEHPGBBIH.length; i++)
                writer.uint32(message.unk3300GHBEHPGBBIH[i]);
            writer.join();
        }
        /* InBattleMechanicusStageType stage = 7; */
        if (message.stage !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.stage);
        /* uint32 Unk3300_EBOIGFMOKHK = 4 [json_name = "Unk3300EBOIGFMOKHK"]; */
        if (message.unk3300EBOIGFMOKHK !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300EBOIGFMOKHK);
        /* uint32 wait_seconds = 13; */
        if (message.waitSeconds !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.waitSeconds);
        /* uint32 left_monster_num = 15; */
        if (message.leftMonsterNum !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.leftMonsterNum);
        /* uint64 Unk3300_IFIPKLOGEOF = 6 [json_name = "Unk3300IFIPKLOGEOF"]; */
        if (message.unk3300IFIPKLOGEOF !== 0n)
            writer.tag(6, runtime_2.WireType.Varint).uint64(message.unk3300IFIPKLOGEOF);
        /* repeated InBattleMechanicusPlayerInfo player_list = 12; */
        for (let i = 0; i < message.playerList.length; i++)
            InBattleMechanicusPlayerInfo_1.InBattleMechanicusPlayerInfo.internalBinaryWrite(message.playerList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 total_round = 1; */
        if (message.totalRound !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.totalRound);
        /* uint64 Unk3300_IAPINOLIALF = 14 [json_name = "Unk3300IAPINOLIALF"]; */
        if (message.unk3300IAPINOLIALF !== 0n)
            writer.tag(14, runtime_2.WireType.Varint).uint64(message.unk3300IAPINOLIALF);
        /* repeated InBattleMechanicusMonsterInfo monster_list = 9; */
        for (let i = 0; i < message.monsterList.length; i++)
            InBattleMechanicusMonsterInfo_1.InBattleMechanicusMonsterInfo.internalBinaryWrite(message.monsterList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_CIJALCAMHCD = 3 [json_name = "Unk3300CIJALCAMHCD"]; */
        if (message.unk3300CIJALCAMHCD !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.unk3300CIJALCAMHCD);
        /* uint64 wait_begin_time_us = 2; */
        if (message.waitBeginTimeUs !== 0n)
            writer.tag(2, runtime_2.WireType.Varint).uint64(message.waitBeginTimeUs);
        /* repeated InBattleMechanicusCardInfo history_card_list = 5; */
        for (let i = 0; i < message.historyCardList.length; i++)
            InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryWrite(message.historyCardList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated InBattleMechanicusCardInfo pick_card_list = 8; */
        for (let i = 0; i < message.pickCardList.length; i++)
            InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryWrite(message.pickCardList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 escaped_monster_num = 10; */
        if (message.escapedMonsterNum !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.escapedMonsterNum);
        /* uint32 round = 11; */
        if (message.round !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.round);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusInfo
 */
exports.InBattleMechanicusInfo = new InBattleMechanicusInfo$Type();
