"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGStartChallengeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGLevelType_1 = require("./GCGLevelType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGStartChallengeRsp", [
            { no: 8, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "level_type", kind: "enum", T: () => ["GCGLevelType", GCGLevelType_1.GCGLevelType] },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { configId: 0, levelId: 0, levelType: 0, retcode: 0 };
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
                case /* uint32 config_id */ 8:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* GCGLevelType level_type */ 11:
                    message.levelType = reader.int32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
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
        /* uint32 config_id = 8; */
        if (message.configId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.configId);
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.levelId);
        /* GCGLevelType level_type = 11; */
        if (message.levelType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.levelType);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGStartChallengeRsp
 */
exports.GCGStartChallengeRsp = new GCGStartChallengeRsp$Type();
