"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAnimatorParameterInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnimatorParameterValueInfo_1 = require("./AnimatorParameterValueInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorParameterInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAnimatorParameterInfo", [
            { no: 10, name: "name_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "value", kind: "message", T: () => AnimatorParameterValueInfo_1.AnimatorParameterValueInfo },
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_server_cache", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { nameId: 0, entityId: 0, isServerCache: false };
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
                case /* int32 name_id */ 10:
                    message.nameId = reader.int32();
                    break;
                case /* AnimatorParameterValueInfo value */ 7:
                    message.value = AnimatorParameterValueInfo_1.AnimatorParameterValueInfo.internalBinaryRead(reader, reader.uint32(), options, message.value);
                    break;
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* bool is_server_cache */ 9:
                    message.isServerCache = reader.bool();
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
        /* int32 name_id = 10; */
        if (message.nameId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.nameId);
        /* AnimatorParameterValueInfo value = 7; */
        if (message.value)
            AnimatorParameterValueInfo_1.AnimatorParameterValueInfo.internalBinaryWrite(message.value, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        /* bool is_server_cache = 9; */
        if (message.isServerCache !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isServerCache);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAnimatorParameterInfo
 */
exports.EvtAnimatorParameterInfo = new EvtAnimatorParameterInfo$Type();
