"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestUpdateQuestVarRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestUpdateQuestVarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestUpdateQuestVarRsp", [
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "parent_quest_var_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, parentQuestVarSeq: 0, parentQuestId: 0, questId: 0 };
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
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 parent_quest_var_seq */ 1:
                    message.parentQuestVarSeq = reader.uint32();
                    break;
                case /* uint32 parent_quest_id */ 8:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 11:
                    message.questId = reader.uint32();
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
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 parent_quest_var_seq = 1; */
        if (message.parentQuestVarSeq !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.parentQuestVarSeq);
        /* uint32 parent_quest_id = 8; */
        if (message.parentQuestId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* uint32 quest_id = 11; */
        if (message.questId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestUpdateQuestVarRsp
 */
exports.QuestUpdateQuestVarRsp = new QuestUpdateQuestVarRsp$Type();
