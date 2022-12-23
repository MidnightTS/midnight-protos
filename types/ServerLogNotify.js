"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerLogNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ServerLogType_1 = require("./ServerLogType");
const ServerLogLevel_1 = require("./ServerLogLevel");
// @generated message type with reflection information, may provide speed optimized methods
class ServerLogNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ServerLogNotify", [
            { no: 11, name: "server_log", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "log_level", kind: "enum", T: () => ["ServerLogLevel", ServerLogLevel_1.ServerLogLevel, "SERVER_LOG_LEVEL_"] },
            { no: 9, name: "log_type", kind: "enum", T: () => ["ServerLogType", ServerLogType_1.ServerLogType, "SERVER_LOG_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { serverLog: "", logLevel: 0, logType: 0 };
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
                case /* string server_log */ 11:
                    message.serverLog = reader.string();
                    break;
                case /* ServerLogLevel log_level */ 5:
                    message.logLevel = reader.int32();
                    break;
                case /* ServerLogType log_type */ 9:
                    message.logType = reader.int32();
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
        /* string server_log = 11; */
        if (message.serverLog !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.serverLog);
        /* ServerLogLevel log_level = 5; */
        if (message.logLevel !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.logLevel);
        /* ServerLogType log_type = 9; */
        if (message.logType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.logType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ServerLogNotify
 */
exports.ServerLogNotify = new ServerLogNotify$Type();
