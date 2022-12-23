"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullPrivateChatReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PullPrivateChatReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PullPrivateChatReq", [
            { no: 5, name: "from_sequence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pull_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fromSequence: 0, targetUid: 0, pullNum: 0 };
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
                case /* uint32 from_sequence */ 5:
                    message.fromSequence = reader.uint32();
                    break;
                case /* uint32 target_uid */ 12:
                    message.targetUid = reader.uint32();
                    break;
                case /* uint32 pull_num */ 11:
                    message.pullNum = reader.uint32();
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
        /* uint32 from_sequence = 5; */
        if (message.fromSequence !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.fromSequence);
        /* uint32 target_uid = 12; */
        if (message.targetUid !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.targetUid);
        /* uint32 pull_num = 11; */
        if (message.pullNum !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.pullNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PullPrivateChatReq
 */
exports.PullPrivateChatReq = new PullPrivateChatReq$Type();
