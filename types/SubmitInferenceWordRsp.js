"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitInferenceWordRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SubmitInferenceWordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SubmitInferenceWordRsp", [
            { no: 4, name: "page_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "conclusion_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "word_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pageId: 0, retcode: 0, conclusionId: 0, wordId: 0 };
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
                case /* uint32 page_id */ 4:
                    message.pageId = reader.uint32();
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 conclusion_id */ 12:
                    message.conclusionId = reader.uint32();
                    break;
                case /* uint32 word_id */ 15:
                    message.wordId = reader.uint32();
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
        /* uint32 page_id = 4; */
        if (message.pageId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pageId);
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 conclusion_id = 12; */
        if (message.conclusionId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.conclusionId);
        /* uint32 word_id = 15; */
        if (message.wordId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.wordId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SubmitInferenceWordRsp
 */
exports.SubmitInferenceWordRsp = new SubmitInferenceWordRsp$Type();
