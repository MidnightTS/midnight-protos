"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChessActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessActivityDetailInfo", [
            { no: 9, name: "punish_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_LPDDFGGKGBP", kind: "scalar", jsonName: "Unk3300LPDDFGGKGBP", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "exp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HBGEGIPIANG", kind: "scalar", jsonName: "Unk3300HBGEGIPIANG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_teach_dungeon_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "finished_map_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { punishOverTime: 0, unk3300LPDDFGGKGBP: 0, level: 0, exp: 0, unk3300HBGEGIPIANG: 0, contentCloseTime: 0, isTeachDungeonFinished: false, isContentClosed: false, finishedMapIdList: [] };
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
                case /* uint32 punish_over_time */ 9:
                    message.punishOverTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_LPDDFGGKGBP = 4 [json_name = "Unk3300LPDDFGGKGBP"];*/ 4:
                    message.unk3300LPDDFGGKGBP = reader.uint32();
                    break;
                case /* uint32 level */ 14:
                    message.level = reader.uint32();
                    break;
                case /* uint32 exp */ 6:
                    message.exp = reader.uint32();
                    break;
                case /* uint32 Unk3300_HBGEGIPIANG = 15 [json_name = "Unk3300HBGEGIPIANG"];*/ 15:
                    message.unk3300HBGEGIPIANG = reader.uint32();
                    break;
                case /* uint32 content_close_time */ 1:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* bool is_teach_dungeon_finished */ 11:
                    message.isTeachDungeonFinished = reader.bool();
                    break;
                case /* bool is_content_closed */ 5:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated uint32 finished_map_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedMapIdList.push(reader.uint32());
                    else
                        message.finishedMapIdList.push(reader.uint32());
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
        /* uint32 punish_over_time = 9; */
        if (message.punishOverTime !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.punishOverTime);
        /* uint32 Unk3300_LPDDFGGKGBP = 4 [json_name = "Unk3300LPDDFGGKGBP"]; */
        if (message.unk3300LPDDFGGKGBP !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300LPDDFGGKGBP);
        /* uint32 level = 14; */
        if (message.level !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.level);
        /* uint32 exp = 6; */
        if (message.exp !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.exp);
        /* uint32 Unk3300_HBGEGIPIANG = 15 [json_name = "Unk3300HBGEGIPIANG"]; */
        if (message.unk3300HBGEGIPIANG !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300HBGEGIPIANG);
        /* uint32 content_close_time = 1; */
        if (message.contentCloseTime !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.contentCloseTime);
        /* bool is_teach_dungeon_finished = 11; */
        if (message.isTeachDungeonFinished !== false)
            writer.tag(11, runtime_2.WireType.Varint).bool(message.isTeachDungeonFinished);
        /* bool is_content_closed = 5; */
        if (message.isContentClosed !== false)
            writer.tag(5, runtime_2.WireType.Varint).bool(message.isContentClosed);
        /* repeated uint32 finished_map_id_list = 13; */
        if (message.finishedMapIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedMapIdList.length; i++)
                writer.uint32(message.finishedMapIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessActivityDetailInfo
 */
exports.ChessActivityDetailInfo = new ChessActivityDetailInfo$Type();
