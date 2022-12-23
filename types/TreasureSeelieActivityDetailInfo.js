"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureSeelieActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TreasureSeelieRegionData_1 = require("./TreasureSeelieRegionData");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureSeelieActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureSeelieActivityDetailInfo", [
            { no: 13, name: "treasure_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "region_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TreasureSeelieRegionData_1.TreasureSeelieRegionData }
        ]);
    }
    create(value) {
        const message = { treasureCloseTime: 0, isContentClosed: false, regionDataList: [] };
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
                case /* uint32 treasure_close_time */ 13:
                    message.treasureCloseTime = reader.uint32();
                    break;
                case /* bool is_content_closed */ 15:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated TreasureSeelieRegionData region_data_list */ 6:
                    message.regionDataList.push(TreasureSeelieRegionData_1.TreasureSeelieRegionData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 treasure_close_time = 13; */
        if (message.treasureCloseTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.treasureCloseTime);
        /* bool is_content_closed = 15; */
        if (message.isContentClosed !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isContentClosed);
        /* repeated TreasureSeelieRegionData region_data_list = 6; */
        for (let i = 0; i < message.regionDataList.length; i++)
            TreasureSeelieRegionData_1.TreasureSeelieRegionData.internalBinaryWrite(message.regionDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureSeelieActivityDetailInfo
 */
exports.TreasureSeelieActivityDetailInfo = new TreasureSeelieActivityDetailInfo$Type();
