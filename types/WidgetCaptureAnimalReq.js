"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCaptureAnimalReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCaptureAnimalReq$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetCaptureAnimalReq", [
            { no: 6, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { entityId: 0, materialId: 0 };
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
                case /* uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 material_id */ 3:
                    message.materialId = reader.uint32();
                    break;
                case /* Vector pos */ 1:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* uint32 entity_id = 6; */
        if (message.entityId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 material_id = 3; */
        if (message.materialId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.materialId);
        /* Vector pos = 1; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCaptureAnimalReq
 */
exports.WidgetCaptureAnimalReq = new WidgetCaptureAnimalReq$Type();
