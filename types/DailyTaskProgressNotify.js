"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTaskProgressNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DailyTaskInfo_1 = require("./DailyTaskInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DailyTaskProgressNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DailyTaskProgressNotify", [
            { no: 12, name: "info", kind: "message", T: () => DailyTaskInfo_1.DailyTaskInfo }
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
                case /* DailyTaskInfo info */ 12:
                    message.info = DailyTaskInfo_1.DailyTaskInfo.internalBinaryRead(reader, reader.uint32(), options, message.info);
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
        /* DailyTaskInfo info = 12; */
        if (message.info)
            DailyTaskInfo_1.DailyTaskInfo.internalBinaryWrite(message.info, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DailyTaskProgressNotify
 */
exports.DailyTaskProgressNotify = new DailyTaskProgressNotify$Type();
