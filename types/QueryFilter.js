"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilter = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class QueryFilter$Type extends runtime_5.MessageType {
    constructor() {
        super("QueryFilter", [
            { no: 4, name: "area_mask", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "type_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { areaMask: 0, typeId: 0 };
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
                case /* int32 area_mask */ 4:
                    message.areaMask = reader.int32();
                    break;
                case /* int32 type_id */ 3:
                    message.typeId = reader.int32();
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
        /* int32 area_mask = 4; */
        if (message.areaMask !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.areaMask);
        /* int32 type_id = 3; */
        if (message.typeId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.typeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message QueryFilter
 */
exports.QueryFilter = new QueryFilter$Type();
