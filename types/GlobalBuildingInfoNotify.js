"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalBuildingInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BuildingInfo_1 = require("./BuildingInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GlobalBuildingInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GlobalBuildingInfoNotify", [
            { no: 1, name: "max_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "current_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "building_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BuildingInfo_1.BuildingInfo }
        ]);
    }
    create(value) {
        const message = { maxNum: 0, currentNum: 0, buildingList: [] };
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
                case /* uint32 max_num */ 1:
                    message.maxNum = reader.uint32();
                    break;
                case /* uint32 current_num */ 3:
                    message.currentNum = reader.uint32();
                    break;
                case /* repeated BuildingInfo building_list */ 15:
                    message.buildingList.push(BuildingInfo_1.BuildingInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 max_num = 1; */
        if (message.maxNum !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.maxNum);
        /* uint32 current_num = 3; */
        if (message.currentNum !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.currentNum);
        /* repeated BuildingInfo building_list = 15; */
        for (let i = 0; i < message.buildingList.length; i++)
            BuildingInfo_1.BuildingInfo.internalBinaryWrite(message.buildingList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GlobalBuildingInfoNotify
 */
exports.GlobalBuildingInfoNotify = new GlobalBuildingInfoNotify$Type();
