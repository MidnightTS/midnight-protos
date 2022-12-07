"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpcTalkRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class NpcTalkRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("NpcTalkRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "cur_talk_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "npc_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, curTalkId: 0, npcEntityId: 0, entityId: 0 };
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
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cur_talk_id */ 12:
                    message.curTalkId = reader.uint32();
                    break;
                case /* uint32 npc_entity_id */ 4:
                    message.npcEntityId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
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
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 cur_talk_id = 12; */
        if (message.curTalkId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.curTalkId);
        /* uint32 npc_entity_id = 4; */
        if (message.npcEntityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.npcEntityId);
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message NpcTalkRsp
 */
exports.NpcTalkRsp = new NpcTalkRsp$Type();
