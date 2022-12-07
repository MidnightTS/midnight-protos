"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapDetectorData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapDetectorData$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureMapDetectorData", [
            { no: 1, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "is_region_detected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "spot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector },
            { no: 12, name: "center_pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { regionId: 0, isRegionDetected: false, radius: 0, spotList: [] };
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
                case /* uint32 region_id */ 1:
                    message.regionId = reader.uint32();
                    break;
                case /* bool is_region_detected */ 11:
                    message.isRegionDetected = reader.bool();
                    break;
                case /* uint32 radius */ 2:
                    message.radius = reader.uint32();
                    break;
                case /* repeated Vector spot_list */ 7:
                    message.spotList.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* Vector center_pos */ 12:
                    message.centerPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.centerPos);
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
        /* uint32 region_id = 1; */
        if (message.regionId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.regionId);
        /* bool is_region_detected = 11; */
        if (message.isRegionDetected !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isRegionDetected);
        /* uint32 radius = 2; */
        if (message.radius !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.radius);
        /* repeated Vector spot_list = 7; */
        for (let i = 0; i < message.spotList.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.spotList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector center_pos = 12; */
        if (message.centerPos)
            Vector_1.Vector.internalBinaryWrite(message.centerPos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapDetectorData
 */
exports.TreasureMapDetectorData = new TreasureMapDetectorData$Type();
