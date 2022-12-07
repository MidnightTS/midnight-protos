"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityInfo_1 = require("./ActivityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityInfoNotify", [
            { no: 12, name: "activity_info", kind: "message", T: () => ActivityInfo_1.ActivityInfo }
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
                case /* ActivityInfo activity_info */ 12:
                    message.activityInfo = ActivityInfo_1.ActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.activityInfo);
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
        /* ActivityInfo activity_info = 12; */
        if (message.activityInfo)
            ActivityInfo_1.ActivityInfo.internalBinaryWrite(message.activityInfo, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityInfoNotify
 */
exports.ActivityInfoNotify = new ActivityInfoNotify$Type();
