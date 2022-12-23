"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGLevelChallengeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGLevelData_1 = require("./GCGLevelData");
const GCGBossChallengeData_1 = require("./GCGBossChallengeData");
// @generated message type with reflection information, may provide speed optimized methods
class GCGLevelChallengeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGLevelChallengeNotify", [
            { no: 11, name: "unlock_boss_challenge_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGBossChallengeData_1.GCGBossChallengeData },
            { no: 3, name: "unlock_world_challenge_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGLevelData_1.GCGLevelData }
        ]);
    }
    create(value) {
        const message = { unlockBossChallengeList: [], unlockWorldChallengeList: [], levelList: [] };
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
                case /* repeated GCGBossChallengeData unlock_boss_challenge_list */ 11:
                    message.unlockBossChallengeList.push(GCGBossChallengeData_1.GCGBossChallengeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_world_challenge_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockWorldChallengeList.push(reader.uint32());
                    else
                        message.unlockWorldChallengeList.push(reader.uint32());
                    break;
                case /* repeated GCGLevelData level_list */ 4:
                    message.levelList.push(GCGLevelData_1.GCGLevelData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated GCGBossChallengeData unlock_boss_challenge_list = 11; */
        for (let i = 0; i < message.unlockBossChallengeList.length; i++)
            GCGBossChallengeData_1.GCGBossChallengeData.internalBinaryWrite(message.unlockBossChallengeList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_world_challenge_list = 3; */
        if (message.unlockWorldChallengeList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockWorldChallengeList.length; i++)
                writer.uint32(message.unlockWorldChallengeList[i]);
            writer.join();
        }
        /* repeated GCGLevelData level_list = 4; */
        for (let i = 0; i < message.levelList.length; i++)
            GCGLevelData_1.GCGLevelData.internalBinaryWrite(message.levelList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGLevelChallengeNotify
 */
exports.GCGLevelChallengeNotify = new GCGLevelChallengeNotify$Type();
