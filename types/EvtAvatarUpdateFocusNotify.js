"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarUpdateFocusNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarUpdateFocusNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAvatarUpdateFocusNotify", [
            { no: 4, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 3, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "focus_forward", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, entityId: 0 };
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
                case /* ForwardType forward_type */ 4:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 entity_id */ 3:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector focus_forward */ 6:
                    message.focusForward = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.focusForward);
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
        /* ForwardType forward_type = 4; */
        if (message.forwardType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 entity_id = 3; */
        if (message.entityId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector focus_forward = 6; */
        if (message.focusForward)
            Vector_1.Vector.internalBinaryWrite(message.focusForward, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarUpdateFocusNotify
 */
exports.EvtAvatarUpdateFocusNotify = new EvtAvatarUpdateFocusNotify$Type();
