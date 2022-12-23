"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneAudioNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneAudioNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneAudioNotify", [
            { no: 6, name: "source_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "param2", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 13, name: "param3", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "param1", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sourceUid: 0, param2: [], param3: [], type: 0, param1: [] };
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
                case /* uint32 source_uid */ 6:
                    message.sourceUid = reader.uint32();
                    break;
                case /* repeated float param2 */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.param2.push(reader.float());
                    else
                        message.param2.push(reader.float());
                    break;
                case /* repeated string param3 */ 13:
                    message.param3.push(reader.string());
                    break;
                case /* int32 type */ 15:
                    message.type = reader.int32();
                    break;
                case /* repeated uint32 param1 */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.param1.push(reader.uint32());
                    else
                        message.param1.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 source_uid = 6; */
        if (message.sourceUid !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.sourceUid);
        /* repeated float param2 = 11; */
        if (message.param2.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.param2.length; i++)
                writer.float(message.param2[i]);
            writer.join();
        }
        /* repeated string param3 = 13; */
        for (let i = 0; i < message.param3.length; i++)
            writer.tag(13, runtime_2.WireType.LengthDelimited).string(message.param3[i]);
        /* int32 type = 15; */
        if (message.type !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.type);
        /* repeated uint32 param1 = 14; */
        if (message.param1.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.param1.length; i++)
                writer.uint32(message.param1[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneAudioNotify
 */
exports.SceneAudioNotify = new SceneAudioNotify$Type();
