"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFurnitureGroupData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeFurnitureData_1 = require("./HomeFurnitureData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeFurnitureGroupData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeFurnitureGroupData", [
            { no: 1, name: "virtual_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFurnitureData_1.HomeFurnitureData },
            { no: 15, name: "group_furniture_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { virtualFurnitureList: [], groupFurnitureIndex: 0 };
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
                case /* repeated HomeFurnitureData virtual_furniture_list */ 1:
                    message.virtualFurnitureList.push(HomeFurnitureData_1.HomeFurnitureData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 group_furniture_index */ 15:
                    message.groupFurnitureIndex = reader.uint32();
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
        /* repeated HomeFurnitureData virtual_furniture_list = 1; */
        for (let i = 0; i < message.virtualFurnitureList.length; i++)
            HomeFurnitureData_1.HomeFurnitureData.internalBinaryWrite(message.virtualFurnitureList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 group_furniture_index = 15; */
        if (message.groupFurnitureIndex !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.groupFurnitureIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeFurnitureGroupData
 */
exports.HomeFurnitureGroupData = new HomeFurnitureGroupData$Type();
