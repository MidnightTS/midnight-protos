"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabLoopDungeonSelectConditionRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabLoopDungeonSelectConditionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabLoopDungeonSelectConditionRsp", [
            { no: 1, name: "dungeon_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "condition_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonIndex: 0, conditionIdList: [], difficultyId: 0, retcode: 0 };
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
                case /* uint32 dungeon_index */ 1:
                    message.dungeonIndex = reader.uint32();
                    break;
                case /* repeated uint32 condition_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.conditionIdList.push(reader.uint32());
                    else
                        message.conditionIdList.push(reader.uint32());
                    break;
                case /* uint32 difficulty_id */ 5:
                    message.difficultyId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
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
        /* uint32 dungeon_index = 1; */
        if (message.dungeonIndex !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.dungeonIndex);
        /* repeated uint32 condition_id_list = 10; */
        if (message.conditionIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.conditionIdList.length; i++)
                writer.uint32(message.conditionIdList[i]);
            writer.join();
        }
        /* uint32 difficulty_id = 5; */
        if (message.difficultyId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.difficultyId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabLoopDungeonSelectConditionRsp
 */
exports.ChannelerSlabLoopDungeonSelectConditionRsp = new ChannelerSlabLoopDungeonSelectConditionRsp$Type();
