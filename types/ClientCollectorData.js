"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCollectorData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ClientCollectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientCollectorData", [
            { no: 2, name: "max_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "curr_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { maxPoints: 0, currPoints: 0, materialId: 0 };
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
                case /* uint32 max_points */ 2:
                    message.maxPoints = reader.uint32();
                    break;
                case /* uint32 curr_points */ 3:
                    message.currPoints = reader.uint32();
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
        /* uint32 max_points = 2; */
        if (message.maxPoints !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.maxPoints);
        /* uint32 curr_points = 3; */
        if (message.currPoints !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.currPoints);
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
 * @generated MessageType for protobuf message ClientCollectorData
 */
exports.ClientCollectorData = new ClientCollectorData$Type();
