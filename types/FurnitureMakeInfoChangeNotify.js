"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeInfoChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FurnitureMakeInfo_1 = require("./FurnitureMakeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeInfoChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeInfoChangeNotify", [
            { no: 10, name: "make_info", kind: "message", T: () => FurnitureMakeInfo_1.FurnitureMakeInfo }
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
                case /* FurnitureMakeInfo make_info */ 10:
                    message.makeInfo = FurnitureMakeInfo_1.FurnitureMakeInfo.internalBinaryRead(reader, reader.uint32(), options, message.makeInfo);
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
        /* FurnitureMakeInfo make_info = 10; */
        if (message.makeInfo)
            FurnitureMakeInfo_1.FurnitureMakeInfo.internalBinaryWrite(message.makeInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeInfoChangeNotify
 */
exports.FurnitureMakeInfoChangeNotify = new FurnitureMakeInfoChangeNotify$Type();
