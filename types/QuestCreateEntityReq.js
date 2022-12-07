"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestCreateEntityReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CreateEntityInfo_1 = require("./CreateEntityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QuestCreateEntityReq$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestCreateEntityReq", [
            { no: 14, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "entity", kind: "message", T: () => CreateEntityInfo_1.CreateEntityInfo },
            { no: 5, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_rewind", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { parentQuestId: 0, questId: 0, isRewind: false };
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
                case /* uint32 parent_quest_id */ 14:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* CreateEntityInfo entity */ 3:
                    message.entity = CreateEntityInfo_1.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* uint32 quest_id */ 5:
                    message.questId = reader.uint32();
                    break;
                case /* bool is_rewind */ 11:
                    message.isRewind = reader.bool();
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
        /* uint32 parent_quest_id = 14; */
        if (message.parentQuestId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* CreateEntityInfo entity = 3; */
        if (message.entity)
            CreateEntityInfo_1.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 5; */
        if (message.questId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.questId);
        /* bool is_rewind = 11; */
        if (message.isRewind !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isRewind);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestCreateEntityReq
 */
exports.QuestCreateEntityReq = new QuestCreateEntityReq$Type();
