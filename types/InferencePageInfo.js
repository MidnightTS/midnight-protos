"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferencePageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InferenceWordInfo_1 = require("./InferenceWordInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InferencePageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InferencePageInfo", [
            { no: 3, name: "unlock_word_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InferenceWordInfo_1.InferenceWordInfo },
            { no: 5, name: "page_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockWordList: [], pageId: 0 };
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
                case /* repeated InferenceWordInfo unlock_word_list */ 3:
                    message.unlockWordList.push(InferenceWordInfo_1.InferenceWordInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 page_id */ 5:
                    message.pageId = reader.uint32();
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
        /* repeated InferenceWordInfo unlock_word_list = 3; */
        for (let i = 0; i < message.unlockWordList.length; i++)
            InferenceWordInfo_1.InferenceWordInfo.internalBinaryWrite(message.unlockWordList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 page_id = 5; */
        if (message.pageId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.pageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InferencePageInfo
 */
exports.InferencePageInfo = new InferencePageInfo$Type();
