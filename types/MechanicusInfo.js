"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicusInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class MechanicusInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MechanicusInfo", [
            { no: 1, name: "mechanicus_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "punish_over_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_finish_teach_dungeon", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_KJLGFEPIENG", kind: "scalar", jsonName: "Unk3300KJLGFEPIENG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_EEBEOCMAIKN", kind: "scalar", jsonName: "Unk3300EEBEOCMAIKN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gear_level_pair_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { mechanicusId: 0, punishOverTime: 0, isFinishTeachDungeon: false, unk3300KJLGFEPIENG: [], unk3300EEBEOCMAIKN: [], coin: 0, gearLevelPairList: [] };
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
                case /* uint32 mechanicus_id */ 1:
                    message.mechanicusId = reader.uint32();
                    break;
                case /* uint32 punish_over_time */ 11:
                    message.punishOverTime = reader.uint32();
                    break;
                case /* bool is_finish_teach_dungeon */ 7:
                    message.isFinishTeachDungeon = reader.bool();
                    break;
                case /* repeated uint32 Unk3300_KJLGFEPIENG = 6 [json_name = "Unk3300KJLGFEPIENG"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300KJLGFEPIENG.push(reader.uint32());
                    else
                        message.unk3300KJLGFEPIENG.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_EEBEOCMAIKN = 9 [json_name = "Unk3300EEBEOCMAIKN"];*/ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300EEBEOCMAIKN.push(reader.uint32());
                    else
                        message.unk3300EEBEOCMAIKN.push(reader.uint32());
                    break;
                case /* uint32 coin */ 10:
                    message.coin = reader.uint32();
                    break;
                case /* repeated Uint32Pair gear_level_pair_list */ 13:
                    message.gearLevelPairList.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 mechanicus_id = 1; */
        if (message.mechanicusId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.mechanicusId);
        /* uint32 punish_over_time = 11; */
        if (message.punishOverTime !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.punishOverTime);
        /* bool is_finish_teach_dungeon = 7; */
        if (message.isFinishTeachDungeon !== false)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isFinishTeachDungeon);
        /* repeated uint32 Unk3300_KJLGFEPIENG = 6 [json_name = "Unk3300KJLGFEPIENG"]; */
        if (message.unk3300KJLGFEPIENG.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300KJLGFEPIENG.length; i++)
                writer.uint32(message.unk3300KJLGFEPIENG[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_EEBEOCMAIKN = 9 [json_name = "Unk3300EEBEOCMAIKN"]; */
        if (message.unk3300EEBEOCMAIKN.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300EEBEOCMAIKN.length; i++)
                writer.uint32(message.unk3300EEBEOCMAIKN[i]);
            writer.join();
        }
        /* uint32 coin = 10; */
        if (message.coin !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.coin);
        /* repeated Uint32Pair gear_level_pair_list = 13; */
        for (let i = 0; i < message.gearLevelPairList.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.gearLevelPairList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MechanicusInfo
 */
exports.MechanicusInfo = new MechanicusInfo$Type();
