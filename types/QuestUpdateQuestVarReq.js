"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestUpdateQuestVarReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const QuestVarOp_1 = require("./QuestVarOp");
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestUpdateQuestVarReq", [
            { no: 7, name: "parent_quest_var_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "quest_var_op_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => QuestVarOp_1.QuestVarOp },
            { no: 5, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { parentQuestVarSeq: 0, questVarOpList: [], questId: 0, parentQuestId: 0 };
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
                case /* uint32 parent_quest_var_seq */ 7:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* repeated QuestVarOp quest_var_op_list */ 11:
                    message.questVarOpList.push(QuestVarOp_1.QuestVarOp.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 quest_id */ 5:
                    message.questId = reader.uint32();
                    break;
                case /* uint32 parent_quest_id */ 2:
                    message.parentQuestId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 parent_quest_var_seq = 7; */
        if (message.parentQuestVarSeq !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.parentQuestVarSeq);
        /* repeated QuestVarOp quest_var_op_list = 11; */
        for (let i = 0; i < message.questVarOpList.length; i++)
            QuestVarOp_1.QuestVarOp.internalBinaryWrite(message.questVarOpList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 5; */
        if (message.questId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.questId);
        /* uint32 parent_quest_id = 2; */
        if (message.parentQuestId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestUpdateQuestVarReq
 */
exports.QuestUpdateQuestVarReq = new QuestUpdateQuestVarReq$Type();
