"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairMinigameInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FleurFairMusicGameInfo_1 = require("./FleurFairMusicGameInfo");
const FleurFairFallInfo_1 = require("./FleurFairFallInfo");
const FleurFairBalloonInfo_1 = require("./FleurFairBalloonInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairMinigameInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairMinigameInfo", [
            { no: 3, name: "minigame_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "balloon_info", kind: "message", oneof: "detail", T: () => FleurFairBalloonInfo_1.FleurFairBalloonInfo },
            { no: 10, name: "fall_info", kind: "message", oneof: "detail", T: () => FleurFairFallInfo_1.FleurFairFallInfo },
            { no: 14, name: "music_info", kind: "message", oneof: "detail", T: () => FleurFairMusicGameInfo_1.FleurFairMusicGameInfo }
        ]);
    }
    create(value) {
        const message = { minigameId: 0, isOpen: false, openTime: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 minigame_id */ 3:
                    message.minigameId = reader.uint32();
                    break;
                case /* bool is_open */ 15:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 open_time */ 13:
                    message.openTime = reader.uint32();
                    break;
                case /* FleurFairBalloonInfo balloon_info */ 1:
                    message.detail = {
                        oneofKind: "balloonInfo",
                        balloonInfo: FleurFairBalloonInfo_1.FleurFairBalloonInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.balloonInfo)
                    };
                    break;
                case /* FleurFairFallInfo fall_info */ 10:
                    message.detail = {
                        oneofKind: "fallInfo",
                        fallInfo: FleurFairFallInfo_1.FleurFairFallInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.fallInfo)
                    };
                    break;
                case /* FleurFairMusicGameInfo music_info */ 14:
                    message.detail = {
                        oneofKind: "musicInfo",
                        musicInfo: FleurFairMusicGameInfo_1.FleurFairMusicGameInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.musicInfo)
                    };
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
        /* uint32 minigame_id = 3; */
        if (message.minigameId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.minigameId);
        /* bool is_open = 15; */
        if (message.isOpen !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 open_time = 13; */
        if (message.openTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.openTime);
        /* FleurFairBalloonInfo balloon_info = 1; */
        if (message.detail.oneofKind === "balloonInfo")
            FleurFairBalloonInfo_1.FleurFairBalloonInfo.internalBinaryWrite(message.detail.balloonInfo, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FleurFairFallInfo fall_info = 10; */
        if (message.detail.oneofKind === "fallInfo")
            FleurFairFallInfo_1.FleurFairFallInfo.internalBinaryWrite(message.detail.fallInfo, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* FleurFairMusicGameInfo music_info = 14; */
        if (message.detail.oneofKind === "musicInfo")
            FleurFairMusicGameInfo_1.FleurFairMusicGameInfo.internalBinaryWrite(message.detail.musicInfo, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairMinigameInfo
 */
exports.FleurFairMinigameInfo = new FleurFairMinigameInfo$Type();
