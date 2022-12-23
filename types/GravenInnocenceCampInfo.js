"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravenInnocenceCampInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GravenInnocenceCampStageInfo_1 = require("./GravenInnocenceCampStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocenceCampInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GravenInnocenceCampInfo", [
            { no: 14, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GravenInnocenceCampStageInfo_1.GravenInnocenceCampStageInfo }
        ]);
    }
    create(value) {
        const message = { stageInfoList: [] };
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
                case /* repeated GravenInnocenceCampStageInfo stage_info_list */ 14:
                    message.stageInfoList.push(GravenInnocenceCampStageInfo_1.GravenInnocenceCampStageInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated GravenInnocenceCampStageInfo stage_info_list = 14; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            GravenInnocenceCampStageInfo_1.GravenInnocenceCampStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocenceCampInfo
 */
exports.GravenInnocenceCampInfo = new GravenInnocenceCampInfo$Type();
