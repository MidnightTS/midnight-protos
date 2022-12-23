"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteGroupTriggerReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteGroupTriggerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ExecuteGroupTriggerReq", [
            { no: 7, name: "source_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "param3", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "param1", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "source_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "target_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "param2", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { sourceEntityId: 0, param3: 0, param1: 0, sourceName: "", targetEntityId: 0, param2: 0 };
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
                case /* uint32 source_entity_id */ 7:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* int32 param3 */ 6:
                    message.param3 = reader.int32();
                    break;
                case /* int32 param1 */ 9:
                    message.param1 = reader.int32();
                    break;
                case /* string source_name */ 8:
                    message.sourceName = reader.string();
                    break;
                case /* uint32 target_entity_id */ 15:
                    message.targetEntityId = reader.uint32();
                    break;
                case /* int32 param2 */ 4:
                    message.param2 = reader.int32();
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
        /* uint32 source_entity_id = 7; */
        if (message.sourceEntityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sourceEntityId);
        /* int32 param3 = 6; */
        if (message.param3 !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.param3);
        /* int32 param1 = 9; */
        if (message.param1 !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.param1);
        /* string source_name = 8; */
        if (message.sourceName !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.sourceName);
        /* uint32 target_entity_id = 15; */
        if (message.targetEntityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        /* int32 param2 = 4; */
        if (message.param2 !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.param2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExecuteGroupTriggerReq
 */
exports.ExecuteGroupTriggerReq = new ExecuteGroupTriggerReq$Type();
