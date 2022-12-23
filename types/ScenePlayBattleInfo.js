"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayBattleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayBattleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayBattleInfo", [
            { no: 14, name: "duration", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "prepare_end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "progress_stage_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "mode", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { duration: 0, progress: 0, prepareEndTime: 0, playType: 0, progressStageList: [], state: 0, mode: 0, type: 0, playId: 0, startTime: 0 };
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
                case /* uint32 duration */ 14:
                    message.duration = reader.uint32();
                    break;
                case /* uint32 progress */ 5:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 prepare_end_time */ 1:
                    message.prepareEndTime = reader.uint32();
                    break;
                case /* uint32 play_type */ 12:
                    message.playType = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* uint32 state */ 7:
                    message.state = reader.uint32();
                    break;
                case /* uint32 mode */ 6:
                    message.mode = reader.uint32();
                    break;
                case /* uint32 type */ 10:
                    message.type = reader.uint32();
                    break;
                case /* uint32 play_id */ 11:
                    message.playId = reader.uint32();
                    break;
                case /* uint32 start_time */ 8:
                    message.startTime = reader.uint32();
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
        /* uint32 duration = 14; */
        if (message.duration !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.duration);
        /* uint32 progress = 5; */
        if (message.progress !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.progress);
        /* uint32 prepare_end_time = 1; */
        if (message.prepareEndTime !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.prepareEndTime);
        /* uint32 play_type = 12; */
        if (message.playType !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.playType);
        /* repeated uint32 progress_stage_list = 13; */
        if (message.progressStageList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.progressStageList.length; i++)
                writer.uint32(message.progressStageList[i]);
            writer.join();
        }
        /* uint32 state = 7; */
        if (message.state !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.state);
        /* uint32 mode = 6; */
        if (message.mode !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.mode);
        /* uint32 type = 10; */
        if (message.type !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.type);
        /* uint32 play_id = 11; */
        if (message.playId !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.playId);
        /* uint32 start_time = 8; */
        if (message.startTime !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.startTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayBattleInfo
 */
exports.ScenePlayBattleInfo = new ScenePlayBattleInfo$Type();
