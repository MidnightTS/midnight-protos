"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformOperationNotify = exports.PerformOperationNotify_OperateType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum PerformOperationNotify.OperateType
 */
var PerformOperationNotify_OperateType;
(function (PerformOperationNotify_OperateType) {
    /**
     * @generated from protobuf enum value: OPERATE_TYPE_NONE = 0;
     */
    PerformOperationNotify_OperateType[PerformOperationNotify_OperateType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: OPERATE_TYPE_EFFECT = 1;
     */
    PerformOperationNotify_OperateType[PerformOperationNotify_OperateType["EFFECT"] = 1] = "EFFECT";
})(PerformOperationNotify_OperateType = exports.PerformOperationNotify_OperateType || (exports.PerformOperationNotify_OperateType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PerformOperationNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PerformOperationNotify", [
            { no: 13, name: "operate_type", kind: "enum", T: () => ["PerformOperationNotify.OperateType", PerformOperationNotify_OperateType, "OPERATE_TYPE_"] },
            { no: 7, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { operateType: 0, index: 0, entityId: 0 };
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
                case /* PerformOperationNotify.OperateType operate_type */ 13:
                    message.operateType = reader.int32();
                    break;
                case /* uint32 index */ 7:
                    message.index = reader.uint32();
                    break;
                case /* Vector pos */ 9:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector rot */ 4:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* PerformOperationNotify.OperateType operate_type = 13; */
        if (message.operateType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.operateType);
        /* uint32 index = 7; */
        if (message.index !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.index);
        /* Vector pos = 9; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 5; */
        if (message.entityId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector rot = 4; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PerformOperationNotify
 */
exports.PerformOperationNotify = new PerformOperationNotify$Type();
