"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResinCardDataUpdateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ResinCardData_1 = require("./ResinCardData");
// @generated message type with reflection information, may provide speed optimized methods
class ResinCardDataUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ResinCardDataUpdateNotify", [
            { no: 4, name: "today_start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "card_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ResinCardData_1.ResinCardData }
        ]);
    }
    create(value) {
        const message = { todayStartTime: 0, cardDataList: [] };
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
                case /* uint32 today_start_time */ 4:
                    message.todayStartTime = reader.uint32();
                    break;
                case /* repeated ResinCardData card_data_list */ 14:
                    message.cardDataList.push(ResinCardData_1.ResinCardData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 today_start_time = 4; */
        if (message.todayStartTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.todayStartTime);
        /* repeated ResinCardData card_data_list = 14; */
        for (let i = 0; i < message.cardDataList.length; i++)
            ResinCardData_1.ResinCardData.internalBinaryWrite(message.cardDataList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ResinCardDataUpdateNotify
 */
exports.ResinCardDataUpdateNotify = new ResinCardDataUpdateNotify$Type();
