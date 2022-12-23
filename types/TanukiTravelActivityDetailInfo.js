"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanukiTravelActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TanukiTravelLevelData_1 = require("./TanukiTravelLevelData");
// @generated message type with reflection information, may provide speed optimized methods
class TanukiTravelActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TanukiTravelActivityDetailInfo", [
            { no: 5, name: "tanuki_travel_level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TanukiTravelLevelData_1.TanukiTravelLevelData },
            { no: 12, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "finished_level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tanukiTravelLevelDataList: [], isContentClosed: false, finishedLevelIndex: 0 };
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
                case /* repeated TanukiTravelLevelData tanuki_travel_level_data_list */ 5:
                    message.tanukiTravelLevelDataList.push(TanukiTravelLevelData_1.TanukiTravelLevelData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_content_closed */ 12:
                    message.isContentClosed = reader.bool();
                    break;
                case /* uint32 finished_level_index */ 15:
                    message.finishedLevelIndex = reader.uint32();
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
        /* repeated TanukiTravelLevelData tanuki_travel_level_data_list = 5; */
        for (let i = 0; i < message.tanukiTravelLevelDataList.length; i++)
            TanukiTravelLevelData_1.TanukiTravelLevelData.internalBinaryWrite(message.tanukiTravelLevelDataList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_content_closed = 12; */
        if (message.isContentClosed !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* uint32 finished_level_index = 15; */
        if (message.finishedLevelIndex !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.finishedLevelIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TanukiTravelActivityDetailInfo
 */
exports.TanukiTravelActivityDetailInfo = new TanukiTravelActivityDetailInfo$Type();
