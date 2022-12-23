"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicleReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class CreateVehicleReq$Type extends runtime_5.MessageType {
    constructor() {
        super("CreateVehicleReq", [
            { no: 11, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "vehicle_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "scene_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { vehicleId: 0, scenePointId: 0 };
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
                case /* Vector pos */ 11:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 vehicle_id */ 4:
                    message.vehicleId = reader.uint32();
                    break;
                case /* uint32 scene_point_id */ 3:
                    message.scenePointId = reader.uint32();
                    break;
                case /* Vector rot */ 6:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* Vector pos = 11; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 vehicle_id = 4; */
        if (message.vehicleId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.vehicleId);
        /* uint32 scene_point_id = 3; */
        if (message.scenePointId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.scenePointId);
        /* Vector rot = 6; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateVehicleReq
 */
exports.CreateVehicleReq = new CreateVehicleReq$Type();
