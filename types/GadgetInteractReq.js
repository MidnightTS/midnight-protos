"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetInteractReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InterOpType_1 = require("./InterOpType");
const ResinCostType_1 = require("./ResinCostType");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetInteractReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetInteractReq", [
            { no: 1, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "resin_cost_type", kind: "enum", T: () => ["ResinCostType", ResinCostType_1.ResinCostType, "RESIN_COST_TYPE_"] },
            { no: 8, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType_1.InterOpType, "INTER_OP_TYPE_"] },
            { no: 11, name: "ui_interact_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_use_condense_resin", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { gadgetId: 0, resinCostType: 0, gadgetEntityId: 0, opType: 0, uiInteractId: 0, isUseCondenseResin: false };
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
                case /* uint32 gadget_id */ 1:
                    message.gadgetId = reader.uint32();
                    break;
                case /* ResinCostType resin_cost_type */ 13:
                    message.resinCostType = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 8:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* InterOpType op_type */ 2:
                    message.opType = reader.int32();
                    break;
                case /* uint32 ui_interact_id */ 11:
                    message.uiInteractId = reader.uint32();
                    break;
                case /* bool is_use_condense_resin */ 6:
                    message.isUseCondenseResin = reader.bool();
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
        /* uint32 gadget_id = 1; */
        if (message.gadgetId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* ResinCostType resin_cost_type = 13; */
        if (message.resinCostType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.resinCostType);
        /* uint32 gadget_entity_id = 8; */
        if (message.gadgetEntityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* InterOpType op_type = 2; */
        if (message.opType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.opType);
        /* uint32 ui_interact_id = 11; */
        if (message.uiInteractId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.uiInteractId);
        /* bool is_use_condense_resin = 6; */
        if (message.isUseCondenseResin !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isUseCondenseResin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetInteractReq
 */
exports.GadgetInteractReq = new GadgetInteractReq$Type();
