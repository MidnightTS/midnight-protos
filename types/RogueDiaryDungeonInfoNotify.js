"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDiaryDungeonInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueDiaryRoomInfo_1 = require("./RogueDiaryRoomInfo");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDiaryDungeonInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDiaryDungeonInfoNotify", [
            { no: 12, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_MMBEJGDFCGE", kind: "scalar", jsonName: "Unk3300MMBEJGDFCGE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "cur_room", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_DKCFGLAKPJL", kind: "scalar", jsonName: "Unk3300DKCFGLAKPJL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "room_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RogueDiaryRoomInfo_1.RogueDiaryRoomInfo },
            { no: 14, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "cur_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, time: 0, unk3300MMBEJGDFCGE: [], curRoom: 0, unk3300DKCFGLAKPJL: [], dungeonId: 0, roomList: [], difficulty: 0, curRound: 0, coin: 0 };
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
                case /* uint32 stage_id */ 12:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 time */ 9:
                    message.time = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_MMBEJGDFCGE = 6 [json_name = "Unk3300MMBEJGDFCGE"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MMBEJGDFCGE.push(reader.uint32());
                    else
                        message.unk3300MMBEJGDFCGE.push(reader.uint32());
                    break;
                case /* uint32 cur_room */ 1:
                    message.curRoom = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_DKCFGLAKPJL = 8 [json_name = "Unk3300DKCFGLAKPJL"];*/ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300DKCFGLAKPJL.push(reader.uint32());
                    else
                        message.unk3300DKCFGLAKPJL.push(reader.uint32());
                    break;
                case /* uint32 dungeon_id */ 7:
                    message.dungeonId = reader.uint32();
                    break;
                case /* repeated RogueDiaryRoomInfo room_list */ 5:
                    message.roomList.push(RogueDiaryRoomInfo_1.RogueDiaryRoomInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 difficulty */ 14:
                    message.difficulty = reader.uint32();
                    break;
                case /* uint32 cur_round */ 10:
                    message.curRound = reader.uint32();
                    break;
                case /* uint32 coin */ 3:
                    message.coin = reader.uint32();
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
        /* uint32 stage_id = 12; */
        if (message.stageId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.stageId);
        /* uint32 time = 9; */
        if (message.time !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.time);
        /* repeated uint32 Unk3300_MMBEJGDFCGE = 6 [json_name = "Unk3300MMBEJGDFCGE"]; */
        if (message.unk3300MMBEJGDFCGE.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MMBEJGDFCGE.length; i++)
                writer.uint32(message.unk3300MMBEJGDFCGE[i]);
            writer.join();
        }
        /* uint32 cur_room = 1; */
        if (message.curRoom !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.curRoom);
        /* repeated uint32 Unk3300_DKCFGLAKPJL = 8 [json_name = "Unk3300DKCFGLAKPJL"]; */
        if (message.unk3300DKCFGLAKPJL.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300DKCFGLAKPJL.length; i++)
                writer.uint32(message.unk3300DKCFGLAKPJL[i]);
            writer.join();
        }
        /* uint32 dungeon_id = 7; */
        if (message.dungeonId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* repeated RogueDiaryRoomInfo room_list = 5; */
        for (let i = 0; i < message.roomList.length; i++)
            RogueDiaryRoomInfo_1.RogueDiaryRoomInfo.internalBinaryWrite(message.roomList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 difficulty = 14; */
        if (message.difficulty !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.difficulty);
        /* uint32 cur_round = 10; */
        if (message.curRound !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.curRound);
        /* uint32 coin = 3; */
        if (message.coin !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDiaryDungeonInfoNotify
 */
exports.RogueDiaryDungeonInfoNotify = new RogueDiaryDungeonInfoNotify$Type();
