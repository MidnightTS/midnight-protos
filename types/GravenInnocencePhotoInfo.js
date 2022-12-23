"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravenInnocencePhotoInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GravenInnocencePhotoObjectInfo_1 = require("./GravenInnocencePhotoObjectInfo");
const GravenInnocencePhotoStageInfo_1 = require("./GravenInnocencePhotoStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocencePhotoInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GravenInnocencePhotoInfo", [
            { no: 3, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GravenInnocencePhotoStageInfo_1.GravenInnocencePhotoStageInfo },
            { no: 15, name: "object_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GravenInnocencePhotoObjectInfo_1.GravenInnocencePhotoObjectInfo }
        ]);
    }
    create(value) {
        const message = { stageInfoList: [], objectInfoList: [] };
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
                case /* repeated GravenInnocencePhotoStageInfo stage_info_list */ 3:
                    message.stageInfoList.push(GravenInnocencePhotoStageInfo_1.GravenInnocencePhotoStageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GravenInnocencePhotoObjectInfo object_info_list */ 15:
                    message.objectInfoList.push(GravenInnocencePhotoObjectInfo_1.GravenInnocencePhotoObjectInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated GravenInnocencePhotoStageInfo stage_info_list = 3; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            GravenInnocencePhotoStageInfo_1.GravenInnocencePhotoStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated GravenInnocencePhotoObjectInfo object_info_list = 15; */
        for (let i = 0; i < message.objectInfoList.length; i++)
            GravenInnocencePhotoObjectInfo_1.GravenInnocencePhotoObjectInfo.internalBinaryWrite(message.objectInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocencePhotoInfo
 */
exports.GravenInnocencePhotoInfo = new GravenInnocencePhotoInfo$Type();
