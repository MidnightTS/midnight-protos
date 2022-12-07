"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeEditCustomFurnitureReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeCustomFurnitureInfo_1 = require("./HomeCustomFurnitureInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeEditCustomFurnitureReq$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeEditCustomFurnitureReq", [
            { no: 9, name: "custom_furniture_info", kind: "message", T: () => HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo }
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
                case /* HomeCustomFurnitureInfo custom_furniture_info */ 9:
                    message.customFurnitureInfo = HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo.internalBinaryRead(reader, reader.uint32(), options, message.customFurnitureInfo);
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
        /* HomeCustomFurnitureInfo custom_furniture_info = 9; */
        if (message.customFurnitureInfo)
            HomeCustomFurnitureInfo_1.HomeCustomFurnitureInfo.internalBinaryWrite(message.customFurnitureInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeEditCustomFurnitureReq
 */
exports.HomeEditCustomFurnitureReq = new HomeEditCustomFurnitureReq$Type();
