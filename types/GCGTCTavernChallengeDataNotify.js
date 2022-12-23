"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGTCTavernChallengeDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGTCTavernChallengeData_1 = require("./GCGTCTavernChallengeData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernChallengeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGTCTavernChallengeDataNotify", [
            { no: 5, name: "tavern_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGTCTavernChallengeData_1.GCGTCTavernChallengeData }
        ]);
    }
    create(value) {
        const message = { tavernChallengeList: [] };
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
                case /* repeated GCGTCTavernChallengeData tavern_challenge_list */ 5:
                    message.tavernChallengeList.push(GCGTCTavernChallengeData_1.GCGTCTavernChallengeData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated GCGTCTavernChallengeData tavern_challenge_list = 5; */
        for (let i = 0; i < message.tavernChallengeList.length; i++)
            GCGTCTavernChallengeData_1.GCGTCTavernChallengeData.internalBinaryWrite(message.tavernChallengeList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTCTavernChallengeDataNotify
 */
exports.GCGTCTavernChallengeDataNotify = new GCGTCTavernChallengeDataNotify$Type();
