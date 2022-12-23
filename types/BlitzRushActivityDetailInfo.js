"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlitzRushActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BlitzRushStage_1 = require("./BlitzRushStage");
const ParkourLevelInfo_1 = require("./ParkourLevelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BlitzRushActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BlitzRushActivityDetailInfo", [
            { no: 1, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "parkour_level_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ParkourLevelInfo_1.ParkourLevelInfo },
            { no: 6, name: "stage_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BlitzRushStage_1.BlitzRushStage }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, contentCloseTime: 0, parkourLevelInfoList: [], stageList: [] };
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
                case /* bool is_content_closed */ 1:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 content_close_time */ 8:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* repeated ParkourLevelInfo parkour_level_info_list */ 4:
                    message.parkourLevelInfoList.push(ParkourLevelInfo_1.ParkourLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated BlitzRushStage stage_list */ 6:
                    message.stageList.push(BlitzRushStage_1.BlitzRushStage.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_content_closed = 1; */
        if (message.isContentClosed !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 content_close_time = 8; */
        if (message.contentCloseTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* repeated ParkourLevelInfo parkour_level_info_list = 4; */
        for (let i = 0; i < message.parkourLevelInfoList.length; i++)
            ParkourLevelInfo_1.ParkourLevelInfo.internalBinaryWrite(message.parkourLevelInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated BlitzRushStage stage_list = 6; */
        for (let i = 0; i < message.stageList.length; i++)
            BlitzRushStage_1.BlitzRushStage.internalBinaryWrite(message.stageList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlitzRushActivityDetailInfo
 */
exports.BlitzRushActivityDetailInfo = new BlitzRushActivityDetailInfo$Type();
