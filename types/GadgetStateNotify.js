"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetStateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetStateNotify", [
            { no: 7, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "gadget_state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_enable_interact", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { gadgetEntityId: 0, gadgetState: 0, isEnableInteract: false };
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
                case /* uint32 gadget_entity_id */ 7:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 gadget_state */ 5:
                    message.gadgetState = reader.uint32();
                    break;
                case /* bool is_enable_interact */ 6:
                    message.isEnableInteract = reader.bool();
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
        /* uint32 gadget_entity_id = 7; */
        if (message.gadgetEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 gadget_state = 5; */
        if (message.gadgetState !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.gadgetState);
        /* bool is_enable_interact = 6; */
        if (message.isEnableInteract !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isEnableInteract);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetStateNotify
 */
exports.GadgetStateNotify = new GadgetStateNotify$Type();
