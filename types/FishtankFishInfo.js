"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishtankFishInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FishtankFishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FishtankFishInfo", [
            { no: 1, name: "fish_distance_from_water", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "fish_scale", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "initial_rotation_y", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { fishDistanceFromWater: 0, fishScale: 0, initialRotationY: 0 };
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
                case /* float fish_distance_from_water */ 1:
                    message.fishDistanceFromWater = reader.float();
                    break;
                case /* float fish_scale */ 2:
                    message.fishScale = reader.float();
                    break;
                case /* float initial_rotation_y */ 3:
                    message.initialRotationY = reader.float();
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
        /* float fish_distance_from_water = 1; */
        if (message.fishDistanceFromWater !== 0)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.fishDistanceFromWater);
        /* float fish_scale = 2; */
        if (message.fishScale !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.fishScale);
        /* float initial_rotation_y = 3; */
        if (message.initialRotationY !== 0)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.initialRotationY);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishtankFishInfo
 */
exports.FishtankFishInfo = new FishtankFishInfo$Type();
