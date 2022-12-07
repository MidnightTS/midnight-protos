"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusBuildingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusBuildingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusBuildingInfo", [
            { no: 8, name: "refund_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "building_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { refundPoints: 0, costPoints: 0, level: 0, buildingId: 0 };
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
                case /* uint32 refund_points */ 8:
                    message.refundPoints = reader.uint32();
                    break;
                case /* uint32 cost_points */ 15:
                    message.costPoints = reader.uint32();
                    break;
                case /* uint32 level */ 13:
                    message.level = reader.uint32();
                    break;
                case /* uint32 building_id */ 3:
                    message.buildingId = reader.uint32();
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
        /* uint32 refund_points = 8; */
        if (message.refundPoints !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.refundPoints);
        /* uint32 cost_points = 15; */
        if (message.costPoints !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.costPoints);
        /* uint32 level = 13; */
        if (message.level !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.level);
        /* uint32 building_id = 3; */
        if (message.buildingId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.buildingId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusBuildingInfo
 */
exports.InBattleMechanicusBuildingInfo = new InBattleMechanicusBuildingInfo$Type();
