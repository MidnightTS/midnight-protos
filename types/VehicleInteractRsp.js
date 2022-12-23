"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleInteractRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VehicleInteractType_1 = require("./VehicleInteractType");
const VehicleMember_1 = require("./VehicleMember");
// @generated message type with reflection information, may provide speed optimized methods
class VehicleInteractRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("VehicleInteractRsp", [
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "member", kind: "message", T: () => VehicleMember_1.VehicleMember },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "interact_type", kind: "enum", T: () => ["VehicleInteractType", VehicleInteractType_1.VehicleInteractType, "VEHICLE_INTERACT_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { entityId: 0, retcode: 0, interactType: 0 };
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
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* VehicleMember member */ 11:
                    message.member = VehicleMember_1.VehicleMember.internalBinaryRead(reader, reader.uint32(), options, message.member);
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* VehicleInteractType interact_type */ 7:
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
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* VehicleMember member = 11; */
        if (message.member)
            VehicleMember_1.VehicleMember.internalBinaryWrite(message.member, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* VehicleInteractType interact_type = 7; */
        if (message.interactType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.interactType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VehicleInteractRsp
 */
exports.VehicleInteractRsp = new VehicleInteractRsp$Type();
