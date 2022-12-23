"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const JigsawPictureData_1 = require("./JigsawPictureData");
const GearLevelData_1 = require("./GearLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class GearActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GearActivityDetailInfo", [
            { no: 2, name: "gear_level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GearLevelData_1.GearLevelData },
            { no: 8, name: "jigsaw_picture_data", kind: "message", T: () => JigsawPictureData_1.JigsawPictureData }
        ]);
    }
    create(value) {
        const message = { gearLevelDataList: [] };
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
                case /* repeated GearLevelData gear_level_data_list */ 2:
                    message.gearLevelDataList.push(GearLevelData_1.GearLevelData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* JigsawPictureData jigsaw_picture_data */ 8:
                    message.jigsawPictureData = JigsawPictureData_1.JigsawPictureData.internalBinaryRead(reader, reader.uint32(), options, message.jigsawPictureData);
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
        /* repeated GearLevelData gear_level_data_list = 2; */
        for (let i = 0; i < message.gearLevelDataList.length; i++)
            GearLevelData_1.GearLevelData.internalBinaryWrite(message.gearLevelDataList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* JigsawPictureData jigsaw_picture_data = 8; */
        if (message.jigsawPictureData)
            JigsawPictureData_1.JigsawPictureData.internalBinaryWrite(message.jigsawPictureData, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearActivityDetailInfo
 */
exports.GearActivityDetailInfo = new GearActivityDetailInfo$Type();
