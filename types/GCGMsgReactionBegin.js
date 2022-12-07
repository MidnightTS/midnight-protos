"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgReactionBegin = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgReactionBegin$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgReactionBegin", [
            { no: 4, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cardGuid: 0, skillId: 0 };
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
                case /* uint32 card_guid */ 4:
                    message.cardGuid = reader.uint32();
                    break;
                case /* uint32 skill_id */ 13:
                    message.skillId = reader.uint32();
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
        /* uint32 card_guid = 4; */
        if (message.cardGuid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cardGuid);
        /* uint32 skill_id = 13; */
        if (message.skillId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgReactionBegin
 */
exports.GCGMsgReactionBegin = new GCGMsgReactionBegin$Type();
