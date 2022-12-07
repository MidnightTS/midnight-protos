"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstableSprayDungeonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InstableSprayDungeonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InstableSprayDungeonSettleInfo", [
            { no: 12, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "difficulty", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "score_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, difficulty: 0, isNewRecord: false, scoreList: [] };
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
                case /* uint32 difficulty */ 15:
                    message.difficulty = reader.uint32();
                    break;
                case /* bool is_new_record */ 9:
                    message.isNewRecord = reader.bool();
                    break;
                case /* repeated uint32 score_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.scoreList.push(reader.uint32());
                    else
                        message.scoreList.push(reader.uint32());
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
        /* uint32 difficulty = 15; */
        if (message.difficulty !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.difficulty);
        /* bool is_new_record = 9; */
        if (message.isNewRecord !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isNewRecord);
        /* repeated uint32 score_list = 3; */
        if (message.scoreList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.scoreList.length; i++)
                writer.uint32(message.scoreList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InstableSprayDungeonSettleInfo
 */
exports.InstableSprayDungeonSettleInfo = new InstableSprayDungeonSettleInfo$Type();
