"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyCrystalDetectorData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SkyCrystalDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("SkyCrystalDetectorData", [
            { no: 1, name: "is_hint_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "hint_center_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isHintValid: false, groupId: 0, configId: 0 };
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
                case /* bool is_hint_valid */ 1:
                    message.isHintValid = reader.bool();
                    break;
                case /* uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* Vector hint_center_pos */ 12:
                    message.hintCenterPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hintCenterPos);
                    break;
                case /* uint32 config_id */ 7:
                    message.configId = reader.uint32();
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
        /* bool is_hint_valid = 1; */
        if (message.isHintValid !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isHintValid);
        /* uint32 group_id = 5; */
        if (message.groupId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* Vector hint_center_pos = 12; */
        if (message.hintCenterPos)
            Vector_1.Vector.internalBinaryWrite(message.hintCenterPos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 config_id = 7; */
        if (message.configId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SkyCrystalDetectorData
 */
exports.SkyCrystalDetectorData = new SkyCrystalDetectorData$Type();
