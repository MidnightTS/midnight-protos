"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestCreateEntityRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CreateEntityInfo_1 = require("./CreateEntityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class QuestCreateEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestCreateEntityRsp", [
            { no: 11, name: "entity", kind: "message", T: () => CreateEntityInfo_1.CreateEntityInfo },
            { no: 3, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_rewind", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "parent_quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, isRewind: false, parentQuestId: 0, retcode: 0, questId: 0 };
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
                case /* CreateEntityInfo entity */ 11:
                    message.entity = CreateEntityInfo_1.CreateEntityInfo.internalBinaryRead(reader, reader.uint32(), options, message.entity);
                    break;
                case /* uint32 entity_id */ 3:
                    message.entityId = reader.uint32();
                    break;
                case /* bool is_rewind */ 9:
                    message.isRewind = reader.bool();
                    break;
                case /* uint32 parent_quest_id */ 2:
                    message.parentQuestId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 quest_id */ 1:
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
        /* CreateEntityInfo entity = 11; */
        if (message.entity)
            CreateEntityInfo_1.CreateEntityInfo.internalBinaryWrite(message.entity, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 3; */
        if (message.entityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.entityId);
        /* bool is_rewind = 9; */
        if (message.isRewind !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isRewind);
        /* uint32 parent_quest_id = 2; */
        if (message.parentQuestId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.parentQuestId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 quest_id = 1; */
        if (message.questId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestCreateEntityRsp
 */
exports.QuestCreateEntityRsp = new QuestCreateEntityRsp$Type();
