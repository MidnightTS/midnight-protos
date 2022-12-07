"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusTrainingProgressDetail = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FungusTrainingPoolPreviewDetail_1 = require("./FungusTrainingPoolPreviewDetail");
const FungusFighterMonsterDetail_1 = require("./FungusFighterMonsterDetail");
// @generated message type with reflection information, may provide speed optimized methods
class FungusTrainingProgressDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusTrainingProgressDetail", [
            { no: 10, name: "Unk3300_EEOIMDJOHCM", kind: "scalar", jsonName: "Unk3300EEOIMDJOHCM", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "total_used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "monster_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusFighterMonsterDetail_1.FungusFighterMonsterDetail },
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "monster_pool_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingPoolPreviewDetail_1.FungusTrainingPoolPreviewDetail },
            { no: 9, name: "cur_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_NLHEFGBEOAC", kind: "scalar", jsonName: "Unk3300NLHEFGBEOAC", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300EEOIMDJOHCM: [], totalUsedTime: 0, monsterDetailList: [], dungeonId: 0, monsterPoolPreviewList: [], curRound: 0, unk3300NLHEFGBEOAC: [] };
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
                case /* repeated uint32 Unk3300_EEOIMDJOHCM = 10 [json_name = "Unk3300EEOIMDJOHCM"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EEOIMDJOHCM.push(reader.uint32());
                    else
                        message.unk3300EEOIMDJOHCM.push(reader.uint32());
                    break;
                case /* uint32 total_used_time */ 3:
                    message.totalUsedTime = reader.uint32();
                    break;
                case /* repeated FungusFighterMonsterDetail monster_detail_list */ 14:
                    message.monsterDetailList.push(FungusFighterMonsterDetail_1.FungusFighterMonsterDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated FungusTrainingPoolPreviewDetail monster_pool_preview_list */ 5:
                    message.monsterPoolPreviewList.push(FungusTrainingPoolPreviewDetail_1.FungusTrainingPoolPreviewDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_round */ 9:
                    message.curRound = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_NLHEFGBEOAC = 4 [json_name = "Unk3300NLHEFGBEOAC"];*/ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300NLHEFGBEOAC.push(reader.uint32());
                    else
                        message.unk3300NLHEFGBEOAC.push(reader.uint32());
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
        /* repeated uint32 Unk3300_EEOIMDJOHCM = 10 [json_name = "Unk3300EEOIMDJOHCM"]; */
        if (message.unk3300EEOIMDJOHCM.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EEOIMDJOHCM.length; i++)
                writer.uint32(message.unk3300EEOIMDJOHCM[i]);
            writer.join();
        }
        /* uint32 total_used_time = 3; */
        if (message.totalUsedTime !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.totalUsedTime);
        /* repeated FungusFighterMonsterDetail monster_detail_list = 14; */
        for (let i = 0; i < message.monsterDetailList.length; i++)
            FungusFighterMonsterDetail_1.FungusFighterMonsterDetail.internalBinaryWrite(message.monsterDetailList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* repeated FungusTrainingPoolPreviewDetail monster_pool_preview_list = 5; */
        for (let i = 0; i < message.monsterPoolPreviewList.length; i++)
            FungusTrainingPoolPreviewDetail_1.FungusTrainingPoolPreviewDetail.internalBinaryWrite(message.monsterPoolPreviewList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_round = 9; */
        if (message.curRound !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.curRound);
        /* repeated uint32 Unk3300_NLHEFGBEOAC = 4 [json_name = "Unk3300NLHEFGBEOAC"]; */
        if (message.unk3300NLHEFGBEOAC.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300NLHEFGBEOAC.length; i++)
                writer.uint32(message.unk3300NLHEFGBEOAC[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusTrainingProgressDetail
 */
exports.FungusTrainingProgressDetail = new FungusTrainingProgressDetail$Type();
