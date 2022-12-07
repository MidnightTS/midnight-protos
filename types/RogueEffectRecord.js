"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueEffectRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RogueEffectRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueEffectRecord", [
            { no: 9, name: "source_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "extra_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sourceId: 0, isNew: false, count: 0, extraParamList: [] };
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
                case /* uint32 source_id */ 9:
                    message.sourceId = reader.uint32();
                    break;
                case /* bool is_new */ 8:
                    message.isNew = reader.bool();
                    break;
                case /* uint32 count */ 3:
                    message.count = reader.uint32();
                    break;
                case /* repeated uint32 extra_param_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.extraParamList.push(reader.uint32());
                    else
                        message.extraParamList.push(reader.uint32());
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
        /* uint32 source_id = 9; */
        if (message.sourceId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.sourceId);
        /* bool is_new = 8; */
        if (message.isNew !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isNew);
        /* uint32 count = 3; */
        if (message.count !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.count);
        /* repeated uint32 extra_param_list = 15; */
        if (message.extraParamList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.extraParamList.length; i++)
                writer.uint32(message.extraParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueEffectRecord
 */
exports.RogueEffectRecord = new RogueEffectRecord$Type();
