"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntingRevealClueNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HuntingPair_1 = require("./HuntingPair");
// @generated message type with reflection information, may provide speed optimized methods
class HuntingRevealClueNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HuntingRevealClueNotify", [
            { no: 3, name: "hunting_pair", kind: "message", T: () => HuntingPair_1.HuntingPair },
            { no: 6, name: "finished_group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "finish_clue_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "clue_position", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { finishedGroupId: 0, finishClueCount: 0 };
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
                case /* HuntingPair hunting_pair */ 3:
                    message.huntingPair = HuntingPair_1.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
                    break;
                case /* uint32 finished_group_id */ 6:
                    message.finishedGroupId = reader.uint32();
                    break;
                case /* uint32 finish_clue_count */ 14:
                    message.finishClueCount = reader.uint32();
                    break;
                case /* Vector clue_position */ 2:
                    message.cluePosition = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.cluePosition);
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
        /* HuntingPair hunting_pair = 3; */
        if (message.huntingPair)
            HuntingPair_1.HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 finished_group_id = 6; */
        if (message.finishedGroupId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.finishedGroupId);
        /* uint32 finish_clue_count = 14; */
        if (message.finishClueCount !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.finishClueCount);
        /* Vector clue_position = 2; */
        if (message.cluePosition)
            Vector_1.Vector.internalBinaryWrite(message.cluePosition, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HuntingRevealClueNotify
 */
exports.HuntingRevealClueNotify = new HuntingRevealClueNotify$Type();
