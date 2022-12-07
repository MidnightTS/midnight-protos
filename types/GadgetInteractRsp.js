"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetInteractRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InterOpType_1 = require("./InterOpType");
const InteractType_1 = require("./InteractType");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetInteractRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetInteractRsp", [
            { no: 2, name: "interact_type", kind: "enum", T: () => ["InteractType", InteractType_1.InteractType, "INTERACT_TYPE_"] },
            { no: 11, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType_1.InterOpType, "INTER_OP_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { interactType: 0, gadgetId: 0, retcode: 0, gadgetEntityId: 0, opType: 0 };
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
                case /* InteractType interact_type */ 2:
                    message.interactType = reader.int32();
                    break;
                case /* uint32 gadget_id */ 11:
                    message.gadgetId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 1:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* InterOpType op_type */ 8:
                    message.opType = reader.int32();
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
        /* InteractType interact_type = 2; */
        if (message.interactType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.interactType);
        /* uint32 gadget_id = 11; */
        if (message.gadgetId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 gadget_entity_id = 1; */
        if (message.gadgetEntityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* InterOpType op_type = 8; */
        if (message.opType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetInteractRsp
 */
exports.GadgetInteractRsp = new GadgetInteractRsp$Type();
