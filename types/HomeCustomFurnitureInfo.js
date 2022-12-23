"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeCustomFurnitureInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomCommonNodeInfo_1 = require("./CustomCommonNodeInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeCustomFurnitureInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeCustomFurnitureInfo", [
            { no: 7, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "sub_furniture_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomCommonNodeInfo_1.CustomCommonNodeInfo }
        ]);
    }
    create(value) {
        const message = { guid: 0, subFurnitureList: [] };
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
                case /* uint32 guid */ 7:
                    message.guid = reader.uint32();
                    break;
                case /* repeated CustomCommonNodeInfo sub_furniture_list */ 11:
                    message.subFurnitureList.push(CustomCommonNodeInfo_1.CustomCommonNodeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 guid = 7; */
        if (message.guid !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.guid);
        /* repeated CustomCommonNodeInfo sub_furniture_list = 11; */
        for (let i = 0; i < message.subFurnitureList.length; i++)
            CustomCommonNodeInfo_1.CustomCommonNodeInfo.internalBinaryWrite(message.subFurnitureList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeCustomFurnitureInfo
 */
exports.HomeCustomFurnitureInfo = new HomeCustomFurnitureInfo$Type();
