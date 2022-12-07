"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnounceData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AnnounceData$Type extends runtime_5.MessageType {
    constructor() {
        super("AnnounceData", [
            { no: 10, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "is_center_system_last_5_every_minutes", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "center_system_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "count_down_frequency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "center_system_frequency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "dungeon_confirm_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "count_down_text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { beginTime: 0, isCenterSystemLast5EveryMinutes: false, endTime: 0, configId: 0, centerSystemText: "", countDownFrequency: 0, centerSystemFrequency: 0, dungeonConfirmText: "", countDownText: "" };
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
                case /* uint32 begin_time */ 10:
                    message.beginTime = reader.uint32();
                    break;
                case /* bool is_center_system_last_5_every_minutes */ 3:
                    message.isCenterSystemLast5EveryMinutes = reader.bool();
                    break;
                case /* uint32 end_time */ 1:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* string center_system_text */ 11:
                    message.centerSystemText = reader.string();
                    break;
                case /* uint32 count_down_frequency */ 5:
                    message.countDownFrequency = reader.uint32();
                    break;
                case /* uint32 center_system_frequency */ 13:
                    message.centerSystemFrequency = reader.uint32();
                    break;
                case /* string dungeon_confirm_text */ 4:
                    message.dungeonConfirmText = reader.string();
                    break;
                case /* string count_down_text */ 6:
                    message.countDownText = reader.string();
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
        /* uint32 begin_time = 10; */
        if (message.beginTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* bool is_center_system_last_5_every_minutes = 3; */
        if (message.isCenterSystemLast5EveryMinutes !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isCenterSystemLast5EveryMinutes);
        /* uint32 end_time = 1; */
        if (message.endTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* string center_system_text = 11; */
        if (message.centerSystemText !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.centerSystemText);
        /* uint32 count_down_frequency = 5; */
        if (message.countDownFrequency !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.countDownFrequency);
        /* uint32 center_system_frequency = 13; */
        if (message.centerSystemFrequency !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.centerSystemFrequency);
        /* string dungeon_confirm_text = 4; */
        if (message.dungeonConfirmText !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.dungeonConfirmText);
        /* string count_down_text = 6; */
        if (message.countDownText !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.countDownText);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnnounceData
 */
exports.AnnounceData = new AnnounceData$Type();
