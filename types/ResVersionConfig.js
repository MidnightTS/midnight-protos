"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResVersionConfig = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ResVersionConfig$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ResVersionConfig", [
            { no: 1, name: "version", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "relogin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "md5", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "release_total_size", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "version_suffix", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "branch", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "next_script_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
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
                case /* optional uint32 version */ 1:
                    message.version = reader.uint32();
                    break;
                case /* optional bool relogin */ 2:
                    message.relogin = reader.bool();
                    break;
                case /* optional string md5 */ 3:
                    message.md5 = reader.string();
                    break;
                case /* optional string release_total_size */ 4:
                    message.releaseTotalSize = reader.string();
                    break;
                case /* optional string version_suffix */ 5:
                    message.versionSuffix = reader.string();
                    break;
                case /* optional string branch */ 6:
                    message.branch = reader.string();
                    break;
                case /* optional string next_script_version */ 7:
                    message.nextScriptVersion = reader.string();
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
        /* optional uint32 version = 1; */
        if (message.version !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.version);
        /* optional bool relogin = 2; */
        if (message.relogin !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.relogin);
        /* optional string md5 = 3; */
        if (message.md5 !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.md5);
        /* optional string release_total_size = 4; */
        if (message.releaseTotalSize !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.releaseTotalSize);
        /* optional string version_suffix = 5; */
        if (message.versionSuffix !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.versionSuffix);
        /* optional string branch = 6; */
        if (message.branch !== undefined)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.branch);
        /* optional string next_script_version = 7; */
        if (message.nextScriptVersion !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.nextScriptVersion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ResVersionConfig
 */
exports.ResVersionConfig = new ResVersionConfig$Type();
