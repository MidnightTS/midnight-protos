"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutePointChangeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RoutePointChangeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RoutePointChangeInfo", [
            { no: 12, name: "target_velocity", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 14, name: "wait_time", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "point_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetVelocity: 0, waitTime: 0, pointIndex: 0 };
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
                case /* float target_velocity */ 12:
                    message.targetVelocity = reader.float();
                    break;
                case /* float wait_time */ 14:
                    message.waitTime = reader.float();
                    break;
                case /* uint32 point_index */ 4:
                    message.pointIndex = reader.uint32();
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
        /* float target_velocity = 12; */
        if (message.targetVelocity !== 0)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.targetVelocity);
        /* float wait_time = 14; */
        if (message.waitTime !== 0)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.waitTime);
        /* uint32 point_index = 4; */
        if (message.pointIndex !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pointIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RoutePointChangeInfo
 */
exports.RoutePointChangeInfo = new RoutePointChangeInfo$Type();
