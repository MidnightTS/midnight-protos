"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteFireworksInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LanternRiteFireworksStageInfo_1 = require("./LanternRiteFireworksStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteFireworksInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteFireworksInfo", [
            { no: 2, name: "stage_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LanternRiteFireworksStageInfo_1.LanternRiteFireworksStageInfo }
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
                case /* repeated LanternRiteFireworksStageInfo stage_info_list */ 2:
                    message.stageInfoList.push(LanternRiteFireworksStageInfo_1.LanternRiteFireworksStageInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated LanternRiteFireworksStageInfo stage_info_list = 2; */
        for (let i = 0; i < message.stageInfoList.length; i++)
            LanternRiteFireworksStageInfo_1.LanternRiteFireworksStageInfo.internalBinaryWrite(message.stageInfoList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteFireworksInfo
 */
exports.LanternRiteFireworksInfo = new LanternRiteFireworksInfo$Type();
