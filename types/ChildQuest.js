"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildQuest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChildQuest$Type extends runtime_5.MessageType {
    constructor() {
        super("ChildQuest", [
            { no: 15, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "quest_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { state: 0, questConfigId: 0, questId: 0 };
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
                case /* uint32 state */ 15:
                    message.state = reader.uint32();
                    break;
                case /* uint32 quest_config_id */ 9:
                    message.questConfigId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 13:
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
        /* uint32 state = 15; */
        if (message.state !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.state);
        /* uint32 quest_config_id = 9; */
        if (message.questConfigId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.questConfigId);
        /* uint32 quest_id = 13; */
        if (message.questId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChildQuest
 */
exports.ChildQuest = new ChildQuest$Type();
