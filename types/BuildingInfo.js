"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BuildingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.BuildingInfo", [
            { no: 1, name: "building_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "point_config_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cost", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "refund", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "current_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "max_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 building_id */ 1:
                    message.buildingId = reader.uint32();
                    break;
                case /* optional uint32 point_config_id */ 2:
                    message.pointConfigId = reader.uint32();
                    break;
                case /* optional uint32 cost */ 3:
                    message.cost = reader.uint32();
                    break;
                case /* optional uint32 refund */ 5:
                    message.refund = reader.uint32();
                    break;
                case /* optional uint32 owner_uid */ 6:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 current_num */ 7:
                    message.currentNum = reader.uint32();
                    break;
                case /* optional uint32 max_num */ 8:
                    message.maxNum = reader.uint32();
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
        /* optional uint32 building_id = 1; */
        if (message.buildingId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.buildingId);
        /* optional uint32 point_config_id = 2; */
        if (message.pointConfigId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.pointConfigId);
        /* optional uint32 cost = 3; */
        if (message.cost !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cost);
        /* optional uint32 refund = 5; */
        if (message.refund !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.refund);
        /* optional uint32 owner_uid = 6; */
        if (message.ownerUid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 current_num = 7; */
        if (message.currentNum !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.currentNum);
        /* optional uint32 max_num = 8; */
        if (message.maxNum !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.maxNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.BuildingInfo
 */
exports.BuildingInfo = new BuildingInfo$Type();
