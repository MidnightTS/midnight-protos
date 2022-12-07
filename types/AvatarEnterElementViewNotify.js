"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEnterElementViewNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEnterElementViewNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarEnterElementViewNotify", [
            { no: 6, name: "is_triggered", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "avatar_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isTriggered: false, avatarEntityId: 0 };
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
                case /* bool is_triggered */ 6:
                    message.isTriggered = reader.bool();
                    break;
                case /* uint32 avatar_entity_id */ 15:
                    message.avatarEntityId = reader.uint32();
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
        /* bool is_triggered = 6; */
        if (message.isTriggered !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isTriggered);
        /* uint32 avatar_entity_id = 15; */
        if (message.avatarEntityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.avatarEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEnterElementViewNotify
 */
exports.AvatarEnterElementViewNotify = new AvatarEnterElementViewNotify$Type();
