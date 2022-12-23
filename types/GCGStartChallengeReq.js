"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGStartChallengeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGLevelType_1 = require("./GCGLevelType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGStartChallengeReq", [
            { no: 12, name: "level_type", kind: "enum", T: () => ["GCGLevelType", GCGLevelType_1.GCGLevelType] },
            { no: 7, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { levelType: 0, configId: 0, levelId: 0 };
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
                case /* GCGLevelType level_type */ 12:
                    message.levelType = reader.int32();
                    break;
                case /* uint32 config_id */ 7:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 level_id */ 2:
                    message.levelId = reader.uint32();
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
        /* GCGLevelType level_type = 12; */
        if (message.levelType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.levelType);
        /* uint32 config_id = 7; */
        if (message.configId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.configId);
        /* uint32 level_id = 2; */
        if (message.levelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGStartChallengeReq
 */
exports.GCGStartChallengeReq = new GCGStartChallengeReq$Type();
