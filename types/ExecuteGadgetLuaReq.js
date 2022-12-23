"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteGadgetLuaReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGadgetLuaReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ExecuteGadgetLuaReq", [
            { no: 1, name: "param3", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "param2", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "source_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "param1", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { param3: 0, param2: 0, sourceEntityId: 0, param1: 0 };
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
                case /* int32 param3 */ 1:
                    message.param3 = reader.int32();
                    break;
                case /* int32 param2 */ 14:
                    message.param2 = reader.int32();
                    break;
                case /* uint32 source_entity_id */ 15:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* int32 param1 */ 13:
                    message.param1 = reader.int32();
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
        /* int32 param3 = 1; */
        if (message.param3 !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.param3);
        /* int32 param2 = 14; */
        if (message.param2 !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.param2);
        /* uint32 source_entity_id = 15; */
        if (message.sourceEntityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.sourceEntityId);
        /* int32 param1 = 13; */
        if (message.param1 !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.param1);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExecuteGadgetLuaReq
 */
exports.ExecuteGadgetLuaReq = new ExecuteGadgetLuaReq$Type();
