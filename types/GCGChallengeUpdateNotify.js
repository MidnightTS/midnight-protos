"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGChallengeUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDuelChallenge_1 = require("./GCGDuelChallenge");
// @generated message type with reflection information, may provide speed optimized methods
class GCGChallengeUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGChallengeUpdateNotify", [
            { no: 15, name: "server_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "challenge", kind: "message", T: () => GCGDuelChallenge_1.GCGDuelChallenge }
        ]);
    }
    create(value) {
        const message = { serverSeq: 0 };
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
                case /* uint32 server_seq */ 15:
                    message.serverSeq = reader.uint32();
                    break;
                case /* GCGDuelChallenge challenge */ 1:
                    message.challenge = GCGDuelChallenge_1.GCGDuelChallenge.internalBinaryRead(reader, reader.uint32(), options, message.challenge);
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
        /* uint32 server_seq = 15; */
        if (message.serverSeq !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.serverSeq);
        /* GCGDuelChallenge challenge = 1; */
        if (message.challenge)
            GCGDuelChallenge_1.GCGDuelChallenge.internalBinaryWrite(message.challenge, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGChallengeUpdateNotify
 */
exports.GCGChallengeUpdateNotify = new GCGChallengeUpdateNotify$Type();
