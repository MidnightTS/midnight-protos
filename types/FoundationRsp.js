"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundationRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FoundationOpType_1 = require("./FoundationOpType");
// @generated message type with reflection information, may provide speed optimized methods
class FoundationRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("FoundationRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "op_type", kind: "enum", T: () => ["FoundationOpType", FoundationOpType_1.FoundationOpType, "FOUNDATION_OP_TYPE_"] },
            { no: 2, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "point_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, buildingId: 0, opType: 0, gadgetEntityId: 0, pointConfigId: 0 };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 building_id */ 10:
                    message.buildingId = reader.uint32();
                    break;
                case /* FoundationOpType op_type */ 14:
                    message.opType = reader.int32();
                    break;
                case /* uint32 gadget_entity_id */ 2:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 point_config_id */ 6:
                    message.pointConfigId = reader.uint32();
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
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 building_id = 10; */
        if (message.buildingId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* FoundationOpType op_type = 14; */
        if (message.opType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.opType);
        /* uint32 gadget_entity_id = 2; */
        if (message.gadgetEntityId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 point_config_id = 6; */
        if (message.pointConfigId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.pointConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FoundationRsp
 */
exports.FoundationRsp = new FoundationRsp$Type();
