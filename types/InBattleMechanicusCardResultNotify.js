"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusCardResultNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InBattleMechanicusCardInfo_1 = require("./InBattleMechanicusCardInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusCardResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusCardResultNotify", [
            { no: 10, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo },
            { no: 14, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "player_confirmed_card_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "wait_begin_time_us", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "wait_seconds", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { groupId: 0, cardList: [], playIndex: 0, playerConfirmedCardMap: {}, waitBeginTimeUs: 0n, waitSeconds: 0 };
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
                case /* uint32 group_id */ 10:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated InBattleMechanicusCardInfo card_list */ 8:
                    message.cardList.push(InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 play_index */ 14:
                    message.playIndex = reader.uint32();
                    break;
                case /* map<uint32, uint32> player_confirmed_card_map */ 9:
                    this.binaryReadMap9(message.playerConfirmedCardMap, reader, options);
                    break;
                case /* uint64 wait_begin_time_us */ 2:
                    message.waitBeginTimeUs = reader.uint64().toBigInt();
                    break;
                case /* uint32 wait_seconds */ 5:
                    message.waitSeconds = reader.uint32();
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field InBattleMechanicusCardResultNotify.player_confirmed_card_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 group_id = 10; */
        if (message.groupId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated InBattleMechanicusCardInfo card_list = 8; */
        for (let i = 0; i < message.cardList.length; i++)
            InBattleMechanicusCardInfo_1.InBattleMechanicusCardInfo.internalBinaryWrite(message.cardList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 play_index = 14; */
        if (message.playIndex !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* map<uint32, uint32> player_confirmed_card_map = 9; */
        for (let k of Object.keys(message.playerConfirmedCardMap))
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.playerConfirmedCardMap[k]).join();
        /* uint64 wait_begin_time_us = 2; */
        if (message.waitBeginTimeUs !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.waitBeginTimeUs);
        /* uint32 wait_seconds = 5; */
        if (message.waitSeconds !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.waitSeconds);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusCardResultNotify
 */
exports.InBattleMechanicusCardResultNotify = new InBattleMechanicusCardResultNotify$Type();
