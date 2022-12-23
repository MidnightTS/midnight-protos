"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferenceWordInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InferenceWordInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InferenceWordInfo", [
            { no: 12, name: "is_submit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "unlock_by_word_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_associate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "word_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_interpret", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isSubmit: false, unlockByWordId: 0, isAssociate: false, wordId: 0, isInterpret: false };
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
                case /* bool is_submit */ 12:
                    message.isSubmit = reader.bool();
                    break;
                case /* uint32 unlock_by_word_id */ 11:
                    message.unlockByWordId = reader.uint32();
                    break;
                case /* bool is_associate */ 10:
                    message.isAssociate = reader.bool();
                    break;
                case /* uint32 word_id */ 2:
                    message.wordId = reader.uint32();
                    break;
                case /* bool is_interpret */ 3:
                    message.isInterpret = reader.bool();
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
        /* bool is_submit = 12; */
        if (message.isSubmit !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isSubmit);
        /* uint32 unlock_by_word_id = 11; */
        if (message.unlockByWordId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unlockByWordId);
        /* bool is_associate = 10; */
        if (message.isAssociate !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isAssociate);
        /* uint32 word_id = 2; */
        if (message.wordId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.wordId);
        /* bool is_interpret = 3; */
        if (message.isInterpret !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isInterpret);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InferenceWordInfo
 */
exports.InferenceWordInfo = new InferenceWordInfo$Type();
