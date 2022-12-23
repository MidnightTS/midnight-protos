"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetCaptureAnimalRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCaptureAnimalRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WidgetCaptureAnimalRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { retcode: 0, materialId: 0, entityId: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 material_id */ 7:
                    message.materialId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector pos */ 10:
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 material_id = 7; */
        if (message.materialId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.materialId);
        /* uint32 entity_id = 11; */
        if (message.entityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector pos = 10; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCaptureAnimalRsp
 */
exports.WidgetCaptureAnimalRsp = new WidgetCaptureAnimalRsp$Type();
