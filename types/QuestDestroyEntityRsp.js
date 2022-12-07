"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestDestroyEntityRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestDestroyEntityRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestDestroyEntityRsp", [
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, sceneId: 0, entityId: 0, questId: 0 };
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
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 scene_id */ 6:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 9:
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
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 scene_id = 6; */
        if (message.sceneId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 quest_id = 9; */
        if (message.questId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestDestroyEntityRsp
 */
exports.QuestDestroyEntityRsp = new QuestDestroyEntityRsp$Type();
