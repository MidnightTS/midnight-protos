"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonSetting = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonSetting$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonSetting", [
            { no: 3, name: "start_room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "time_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "open_room_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "coin_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_forbid_skill", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_arrive_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "life_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { startRoomId: 0, timeLimit: 0, openRoomList: [], coinLimit: 0, isForbidSkill: false, isArriveFinish: false, lifeNum: 0 };
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
                case /* uint32 start_room_id */ 3:
                    message.startRoomId = reader.uint32();
                    break;
                case /* uint32 time_limit */ 9:
                    message.timeLimit = reader.uint32();
                    break;
                case /* repeated uint32 open_room_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openRoomList.push(reader.uint32());
                    else
                        message.openRoomList.push(reader.uint32());
                    break;
                case /* uint32 coin_limit */ 5:
                    message.coinLimit = reader.uint32();
                    break;
                case /* bool is_forbid_skill */ 7:
                    message.isForbidSkill = reader.bool();
                    break;
                case /* bool is_arrive_finish */ 6:
                    message.isArriveFinish = reader.bool();
                    break;
                case /* uint32 life_num */ 8:
                    message.lifeNum = reader.uint32();
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
        /* uint32 start_room_id = 3; */
        if (message.startRoomId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.startRoomId);
        /* uint32 time_limit = 9; */
        if (message.timeLimit !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.timeLimit);
        /* repeated uint32 open_room_list = 14; */
        if (message.openRoomList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.openRoomList.length; i++)
                writer.uint32(message.openRoomList[i]);
            writer.join();
        }
        /* uint32 coin_limit = 5; */
        if (message.coinLimit !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.coinLimit);
        /* bool is_forbid_skill = 7; */
        if (message.isForbidSkill !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isForbidSkill);
        /* bool is_arrive_finish = 6; */
        if (message.isArriveFinish !== false)
            writer.tag(6, runtime_2.WireType.Varint).bool(message.isArriveFinish);
        /* uint32 life_num = 8; */
        if (message.lifeNum !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.lifeNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonSetting
 */
exports.CustomDungeonSetting = new CustomDungeonSetting$Type();
