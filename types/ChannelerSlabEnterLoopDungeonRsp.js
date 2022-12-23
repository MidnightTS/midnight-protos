"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabEnterLoopDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabEnterLoopDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabEnterLoopDungeonRsp", [
            { no: 14, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "condition_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pointId: 0, retcode: 0, difficultyId: 0, dungeonIndex: 0, conditionIdList: [] };
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
                case /* uint32 point_id */ 14:
                    message.pointId = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 difficulty_id */ 8:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 dungeon_index */ 13:
                    message.dungeonIndex = reader.uint32();
                    break;
                case /* repeated uint32 condition_id_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.conditionIdList.push(reader.uint32());
                    else
                        message.conditionIdList.push(reader.uint32());
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
        /* uint32 point_id = 14; */
        if (message.pointId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.pointId);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint32 difficulty_id = 8; */
        if (message.difficultyId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.difficultyId);
        /* uint32 dungeon_index = 13; */
        if (message.dungeonIndex !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.dungeonIndex);
        /* repeated uint32 condition_id_list = 7; */
        if (message.conditionIdList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.conditionIdList.length; i++)
                writer.uint32(message.conditionIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabEnterLoopDungeonRsp
 */
exports.ChannelerSlabEnterLoopDungeonRsp = new ChannelerSlabEnterLoopDungeonRsp$Type();
