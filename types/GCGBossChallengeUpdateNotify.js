"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGBossChallengeUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGBossChallengeData_1 = require("./GCGBossChallengeData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGBossChallengeUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGBossChallengeUpdateNotify", [
            { no: 7, name: "boss_challenge", kind: "message", T: () => GCGBossChallengeData_1.GCGBossChallengeData }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* GCGBossChallengeData boss_challenge */ 7:
                    message.bossChallenge = GCGBossChallengeData_1.GCGBossChallengeData.internalBinaryRead(reader, reader.uint32(), options, message.bossChallenge);
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
        /* GCGBossChallengeData boss_challenge = 7; */
        if (message.bossChallenge)
            GCGBossChallengeData_1.GCGBossChallengeData.internalBinaryWrite(message.bossChallenge, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGBossChallengeUpdateNotify
 */
exports.GCGBossChallengeUpdateNotify = new GCGBossChallengeUpdateNotify$Type();