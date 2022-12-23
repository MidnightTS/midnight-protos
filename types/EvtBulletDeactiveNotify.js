"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtBulletDeactiveNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletDeactiveNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtBulletDeactiveNotify", [
            { no: 12, name: "disappear_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
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
                case /* Vector disappear_pos */ 12:
                    message.disappearPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.disappearPos);
                    break;
                case /* ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 entity_id */ 1:
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
        /* Vector disappear_pos = 12; */
        if (message.disappearPos)
            Vector_1.Vector.internalBinaryWrite(message.disappearPos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ForwardType forward_type = 11; */
        if (message.forwardType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBulletDeactiveNotify
 */
exports.EvtBulletDeactiveNotify = new EvtBulletDeactiveNotify$Type();
