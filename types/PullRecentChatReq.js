"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullRecentChatReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PullRecentChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PullRecentChatReq", [
            { no: 3, name: "pull_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "begin_sequence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pullNum: 0, beginSequence: 0 };
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
                case /* uint32 pull_num */ 3:
                    message.pullNum = reader.uint32();
                    break;
                case /* uint32 begin_sequence */ 15:
                    message.beginSequence = reader.uint32();
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
        /* uint32 pull_num = 3; */
        if (message.pullNum !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.pullNum);
        /* uint32 begin_sequence = 15; */
        if (message.beginSequence !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.beginSequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PullRecentChatReq
 */
exports.PullRecentChatReq = new PullRecentChatReq$Type();
