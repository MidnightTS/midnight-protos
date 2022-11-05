"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopServerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class StopServerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.StopServerInfo", [
            { no: 1, name: "stop_begin_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "stop_end_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "url", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_msg", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 stop_begin_time */ 1:
                    message.stopBeginTime = reader.uint32();
                    break;
                case /* optional uint32 stop_end_time */ 2:
                    message.stopEndTime = reader.uint32();
                    break;
                case /* optional string url */ 3:
                    message.url = reader.string();
                    break;
                case /* optional string content_msg */ 4:
                    message.contentMsg = reader.string();
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
        /* optional uint32 stop_begin_time = 1; */
        if (message.stopBeginTime !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.stopBeginTime);
        /* optional uint32 stop_end_time = 2; */
        if (message.stopEndTime !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.stopEndTime);
        /* optional string url = 3; */
        if (message.url !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.url);
        /* optional string content_msg = 4; */
        if (message.contentMsg !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.contentMsg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.StopServerInfo
 */
exports.StopServerInfo = new StopServerInfo$Type();
