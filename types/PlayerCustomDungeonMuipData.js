"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCustomDungeonMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CustomDungeonBattleRecordMuipData_1 = require("./CustomDungeonBattleRecordMuipData");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCustomDungeonMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerCustomDungeonMuipData", [
            { no: 1, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "publish_dungeon_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "store_dungeon_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "battle_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CustomDungeonBattleRecordMuipData_1.CustomDungeonBattleRecordMuipData }
        ]);
    }
    create(value) {
        const message = { publishDungeonList: [], storeDungeonList: [], battleRecordList: [] };
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
                case /* optional uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* repeated uint64 publish_dungeon_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.publishDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.publishDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated uint64 store_dungeon_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.storeDungeonList.push(reader.uint64().toBigInt());
                    else
                        message.storeDungeonList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated com.midnights.game.CustomDungeonBattleRecordMuipData battle_record_list */ 4:
                    message.battleRecordList.push(CustomDungeonBattleRecordMuipData_1.CustomDungeonBattleRecordMuipData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 uid = 1; */
        if (message.uid !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.uid);
        /* repeated uint64 publish_dungeon_list = 2; */
        if (message.publishDungeonList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.publishDungeonList.length; i++)
                writer.uint64(message.publishDungeonList[i]);
            writer.join();
        }
        /* repeated uint64 store_dungeon_list = 3; */
        if (message.storeDungeonList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.storeDungeonList.length; i++)
                writer.uint64(message.storeDungeonList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.CustomDungeonBattleRecordMuipData battle_record_list = 4; */
        for (let i = 0; i < message.battleRecordList.length; i++)
            CustomDungeonBattleRecordMuipData_1.CustomDungeonBattleRecordMuipData.internalBinaryWrite(message.battleRecordList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerCustomDungeonMuipData
 */
exports.PlayerCustomDungeonMuipData = new PlayerCustomDungeonMuipData$Type();
