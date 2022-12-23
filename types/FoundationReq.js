"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundationReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FoundationOpType_1 = require("./FoundationOpType");
// @generated message type with reflection information, may provide speed optimized methods
class FoundationReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FoundationReq", [
            { no: 1, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "point_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "op_type", kind: "enum", T: () => ["FoundationOpType", FoundationOpType_1.FoundationOpType, "FOUNDATION_OP_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { gadgetEntityId: 0, buildingId: 0, pointConfigId: 0, opType: 0 };
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
                case /* uint32 gadget_entity_id */ 1:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 building_id */ 11:
                    message.buildingId = reader.uint32();
                    break;
                case /* uint32 point_config_id */ 10:
                    message.pointConfigId = reader.uint32();
                    break;
                case /* FoundationOpType op_type */ 6:
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
        /* uint32 gadget_entity_id = 1; */
        if (message.gadgetEntityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 building_id = 11; */
        if (message.buildingId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* uint32 point_config_id = 10; */
        if (message.pointConfigId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.pointConfigId);
        /* FoundationOpType op_type = 6; */
        if (message.opType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FoundationReq
 */
exports.FoundationReq = new FoundationReq$Type();
