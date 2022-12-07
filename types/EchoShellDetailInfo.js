"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoShellDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SummerTimeDungeonInfo_1 = require("./SummerTimeDungeonInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EchoShellDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EchoShellDetailInfo", [
            { no: 6, name: "Unk3300_OOCDFANFFDG", kind: "scalar", jsonName: "Unk3300OOCDFANFFDG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "taken_reward_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "summer_time_dungeon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SummerTimeDungeonInfo_1.SummerTimeDungeonInfo },
            { no: 10, name: "Unk3300_NEFBJPKBEHF", kind: "scalar", jsonName: "Unk3300NEFBJPKBEHF", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300OOCDFANFFDG: [], takenRewardList: [], summerTimeDungeonList: [], unk3300NEFBJPKBEHF: [] };
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
                case /* repeated uint32 Unk3300_OOCDFANFFDG = 6 [json_name = "Unk3300OOCDFANFFDG"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300OOCDFANFFDG.push(reader.uint32());
                    else
                        message.unk3300OOCDFANFFDG.push(reader.uint32());
                    break;
                case /* repeated uint32 taken_reward_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.takenRewardList.push(reader.uint32());
                    else
                        message.takenRewardList.push(reader.uint32());
                    break;
                case /* repeated SummerTimeDungeonInfo summer_time_dungeon_list */ 3:
                    message.summerTimeDungeonList.push(SummerTimeDungeonInfo_1.SummerTimeDungeonInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_NEFBJPKBEHF = 10 [json_name = "Unk3300NEFBJPKBEHF"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300NEFBJPKBEHF.push(reader.uint32());
                    else
                        message.unk3300NEFBJPKBEHF.push(reader.uint32());
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
        /* repeated uint32 Unk3300_OOCDFANFFDG = 6 [json_name = "Unk3300OOCDFANFFDG"]; */
        if (message.unk3300OOCDFANFFDG.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300OOCDFANFFDG.length; i++)
                writer.uint32(message.unk3300OOCDFANFFDG[i]);
            writer.join();
        }
        /* repeated uint32 taken_reward_list = 5; */
        if (message.takenRewardList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.takenRewardList.length; i++)
                writer.uint32(message.takenRewardList[i]);
            writer.join();
        }
        /* repeated SummerTimeDungeonInfo summer_time_dungeon_list = 3; */
        for (let i = 0; i < message.summerTimeDungeonList.length; i++)
            SummerTimeDungeonInfo_1.SummerTimeDungeonInfo.internalBinaryWrite(message.summerTimeDungeonList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_NEFBJPKBEHF = 10 [json_name = "Unk3300NEFBJPKBEHF"]; */
        if (message.unk3300NEFBJPKBEHF.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300NEFBJPKBEHF.length; i++)
                writer.uint32(message.unk3300NEFBJPKBEHF[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EchoShellDetailInfo
 */
exports.EchoShellDetailInfo = new EchoShellDetailInfo$Type();
