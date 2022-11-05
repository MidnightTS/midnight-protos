"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveEntityState = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityState$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MassiveEntityState", [
            { no: 1, name: "entity_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "obj_id", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "element_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 entity_type */ 1:
                    message.entityType = reader.uint32();
                    break;
                case /* optional int64 obj_id */ 2:
                    message.objId = reader.int64().toBigInt();
                    break;
                case /* optional uint32 element_state */ 3:
                    message.elementState = reader.uint32();
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
        /* optional uint32 entity_type = 1; */
        if (message.entityType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityType);
        /* optional int64 obj_id = 2; */
        if (message.objId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.objId);
        /* optional uint32 element_state = 3; */
        if (message.elementState !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.elementState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MassiveEntityState
 */
exports.MassiveEntityState = new MassiveEntityState$Type();
