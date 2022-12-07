"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeBrief = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ChallengeBrief$Type extends runtime_5.MessageType {
    constructor() {
        super("ChallengeBrief", [
            { no: 5, name: "challenge_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { challengeIndex: 0, curProgress: 0, isSuccess: false, challengeId: 0 };
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
                case /* uint32 challenge_index */ 5:
                    message.challengeIndex = reader.uint32();
                    break;
                case /* uint32 cur_progress */ 15:
                    message.curProgress = reader.uint32();
                    break;
                case /* bool is_success */ 12:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 challenge_id */ 1:
                    message.challengeId = reader.uint32();
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
        /* uint32 challenge_index = 5; */
        if (message.challengeIndex !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.challengeIndex);
        /* uint32 cur_progress = 15; */
        if (message.curProgress !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* bool is_success = 12; */
        if (message.isSuccess !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 challenge_id = 1; */
        if (message.challengeId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.challengeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChallengeBrief
 */
exports.ChallengeBrief = new ChallengeBrief$Type();
