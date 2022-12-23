"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityInvocationFailNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityInvokeEntry_1 = require("./AbilityInvokeEntry");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvocationFailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityInvocationFailNotify", [
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "invoke", kind: "message", T: () => AbilityInvokeEntry_1.AbilityInvokeEntry }
        ]);
    }
    create(value) {
        const message = { entityId: 0, reason: "" };
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
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* string reason */ 8:
                    message.reason = reader.string();
                    break;
                case /* AbilityInvokeEntry invoke */ 11:
                    message.invoke = AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options, message.invoke);
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
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* string reason = 8; */
        if (message.reason !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.reason);
        /* AbilityInvokeEntry invoke = 11; */
        if (message.invoke)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.invoke, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvocationFailNotify
 */
exports.AbilityInvocationFailNotify = new AbilityInvocationFailNotify$Type();
