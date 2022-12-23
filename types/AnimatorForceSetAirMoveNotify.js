"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatorForceSetAirMoveNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class AnimatorForceSetAirMoveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AnimatorForceSetAirMoveNotify", [
            { no: 12, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 6, name: "in_air_move", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, inAirMove: false, entityId: 0 };
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
                case /* ForwardType forward_type */ 12:
                    message.forwardType = reader.int32();
                    break;
                case /* bool in_air_move */ 6:
                    message.inAirMove = reader.bool();
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
        /* ForwardType forward_type = 12; */
        if (message.forwardType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.forwardType);
        /* bool in_air_move = 6; */
        if (message.inAirMove !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.inAirMove);
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
 * @generated MessageType for protobuf message AnimatorForceSetAirMoveNotify
 */
exports.AnimatorForceSetAirMoveNotify = new AnimatorForceSetAirMoveNotify$Type();
