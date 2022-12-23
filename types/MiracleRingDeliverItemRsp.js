"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingDeliverItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InteractType_1 = require("./InteractType");
const InterOpType_1 = require("./InterOpType");
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDeliverItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("MiracleRingDeliverItemRsp", [
            { no: 2, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType_1.InterOpType, "INTER_OP_TYPE_"] },
            { no: 13, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "interact_type", kind: "enum", T: () => ["InteractType", InteractType_1.InteractType, "INTERACT_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { gadgetId: 0, opType: 0, gadgetEntityId: 0, retcode: 0, interactType: 0 };
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
                case /* uint32 gadget_id */ 2:
                    message.gadgetId = reader.uint32();
                    break;
                case /* InterOpType op_type */ 6:
                    message.opType = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 13:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* InteractType interact_type */ 12:
                    message.interactType = reader.int32();
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
        /* uint32 gadget_id = 2; */
        if (message.gadgetId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* InterOpType op_type = 6; */
        if (message.opType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.opType);
        /* uint32 gadget_entity_id = 13; */
        if (message.gadgetEntityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* InteractType interact_type = 12; */
        if (message.interactType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.interactType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MiracleRingDeliverItemRsp
 */
exports.MiracleRingDeliverItemRsp = new MiracleRingDeliverItemRsp$Type();
