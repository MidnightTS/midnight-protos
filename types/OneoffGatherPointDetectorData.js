"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneoffGatherPointDetectorData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class OneoffGatherPointDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("OneoffGatherPointDetectorData", [
            { no: 4, name: "hint_radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_hint_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "hint_center_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "is_all_collected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hintRadius: 0, configId: 0, isHintValid: false, isAllCollected: false, groupId: 0, materialId: 0 };
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
                case /* uint32 hint_radius */ 4:
                    message.hintRadius = reader.uint32();
                    break;
                case /* uint32 config_id */ 3:
                    message.configId = reader.uint32();
                    break;
                case /* bool is_hint_valid */ 11:
                    message.isHintValid = reader.bool();
                    break;
                case /* Vector hint_center_pos */ 12:
                    message.hintCenterPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hintCenterPos);
                    break;
                case /* bool is_all_collected */ 10:
                    message.isAllCollected = reader.bool();
                    break;
                case /* uint32 group_id */ 1:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 material_id */ 9:
                    message.materialId = reader.uint32();
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
        /* uint32 hint_radius = 4; */
        if (message.hintRadius !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.hintRadius);
        /* uint32 config_id = 3; */
        if (message.configId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.configId);
        /* bool is_hint_valid = 11; */
        if (message.isHintValid !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isHintValid);
        /* Vector hint_center_pos = 12; */
        if (message.hintCenterPos)
            Vector_1.Vector.internalBinaryWrite(message.hintCenterPos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_all_collected = 10; */
        if (message.isAllCollected !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAllCollected);
        /* uint32 group_id = 1; */
        if (message.groupId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 material_id = 9; */
        if (message.materialId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.materialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OneoffGatherPointDetectorData
 */
exports.OneoffGatherPointDetectorData = new OneoffGatherPointDetectorData$Type();
