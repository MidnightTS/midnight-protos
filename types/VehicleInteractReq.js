"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleInteractReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VehicleInteractType_1 = require("./VehicleInteractType");
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInteractReq$Type extends runtime_5.MessageType {
    constructor() {
        super("VehicleInteractReq", [
            { no: 3, name: "interact_type", kind: "enum", T: () => ["VehicleInteractType", VehicleInteractType_1.VehicleInteractType, "VEHICLE_INTERACT_TYPE_"] },
            { no: 11, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "pos", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { interactType: 0, entityId: 0, pos: 0 };
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
                case /* VehicleInteractType interact_type */ 3:
                    message.interactType = reader.int32();
                    break;
                case /* uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 pos */ 4:
                    message.pos = reader.uint32();
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
        /* VehicleInteractType interact_type = 3; */
        if (message.interactType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.interactType);
        /* uint32 entity_id = 11; */
        if (message.entityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 pos = 4; */
        if (message.pos !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VehicleInteractReq
 */
exports.VehicleInteractReq = new VehicleInteractReq$Type();
