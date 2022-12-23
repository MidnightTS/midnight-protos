"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestVarOp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QuestVarOp$Type extends runtime_5.MessageType {
    constructor() {
        super("QuestVarOp", [
            { no: 9, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_add", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "value", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0, isAdd: false, value: 0 };
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
                case /* uint32 index */ 9:
                    message.index = reader.uint32();
                    break;
                case /* bool is_add */ 3:
                    message.isAdd = reader.bool();
                    break;
                case /* int32 value */ 8:
                    message.value = reader.int32();
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
        /* uint32 index = 9; */
        if (message.index !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.index);
        /* bool is_add = 3; */
        if (message.isAdd !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isAdd);
        /* int32 value = 8; */
        if (message.value !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QuestVarOp
 */
exports.QuestVarOp = new QuestVarOp$Type();
