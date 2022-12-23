"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestUpdateQuestVarNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestUpdateQuestVarNotify", [
            { no: 9, name: "parent_quest_var_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "quest_var", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { parentQuestVarSeq: 0, questVar: [], parentQuestId: 0 };
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
                case /* uint32 parent_quest_var_seq */ 9:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* repeated int32 quest_var */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.questVar.push(reader.int32());
                    else
                        message.questVar.push(reader.int32());
                    break;
                case /* uint32 parent_quest_id */ 7:
                    message.parentQuestId = reader.uint32();
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
        /* uint32 parent_quest_var_seq = 9; */
        if (message.parentQuestVarSeq !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.parentQuestVarSeq);
        /* repeated int32 quest_var = 3; */
        if (message.questVar.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.questVar.length; i++)
                writer.int32(message.questVar[i]);
            writer.join();
        }
        /* uint32 parent_quest_id = 7; */
        if (message.parentQuestId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestUpdateQuestVarNotify
 */
exports.QuestUpdateQuestVarNotify = new QuestUpdateQuestVarNotify$Type();
