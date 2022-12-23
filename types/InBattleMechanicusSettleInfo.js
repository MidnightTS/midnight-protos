"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MultistageSettleWatcherInfo_1 = require("./MultistageSettleWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusSettleInfo", [
            { no: 12, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_EKAIAPLNIPM", kind: "scalar", jsonName: "Unk3300EKAIAPLNIPM", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_HAEOPAOBBFE", kind: "scalar", jsonName: "Unk3300HAEOPAOBBFE", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NAMBBHMJJLN", kind: "scalar", jsonName: "Unk3300NAMBBHMJJLN", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo }
        ]);
    }
    create(value) {
        const message = { sceneTimeMs: 0n, isSuccess: false, groupId: 0, unk3300EKAIAPLNIPM: 0, unk3300HAEOPAOBBFE: 0, unk3300NAMBBHMJJLN: 0, playIndex: 0, watcherList: [] };
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
                case /* uint64 scene_time_ms */ 12:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* bool is_success */ 13:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 group_id */ 10:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKAIAPLNIPM = 9 [json_name = "Unk3300EKAIAPLNIPM"];*/ 9:
                    message.unk3300EKAIAPLNIPM = reader.uint32();
                    break;
                case /* uint32 Unk3300_HAEOPAOBBFE = 4 [json_name = "Unk3300HAEOPAOBBFE"];*/ 4:
                    message.unk3300HAEOPAOBBFE = reader.uint32();
                    break;
                case /* uint32 Unk3300_NAMBBHMJJLN = 11 [json_name = "Unk3300NAMBBHMJJLN"];*/ 11:
                    message.unk3300NAMBBHMJJLN = reader.uint32();
                    break;
                case /* uint32 play_index */ 8:
                    message.playIndex = reader.uint32();
                    break;
                case /* repeated MultistageSettleWatcherInfo watcher_list */ 15:
                    message.watcherList.push(MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint64 scene_time_ms = 12; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(12, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* bool is_success = 13; */
        if (message.isSuccess !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 group_id = 10; */
        if (message.groupId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 Unk3300_EKAIAPLNIPM = 9 [json_name = "Unk3300EKAIAPLNIPM"]; */
        if (message.unk3300EKAIAPLNIPM !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300EKAIAPLNIPM);
        /* uint32 Unk3300_HAEOPAOBBFE = 4 [json_name = "Unk3300HAEOPAOBBFE"]; */
        if (message.unk3300HAEOPAOBBFE !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300HAEOPAOBBFE);
        /* uint32 Unk3300_NAMBBHMJJLN = 11 [json_name = "Unk3300NAMBBHMJJLN"]; */
        if (message.unk3300NAMBBHMJJLN !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300NAMBBHMJJLN);
        /* uint32 play_index = 8; */
        if (message.playIndex !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* repeated MultistageSettleWatcherInfo watcher_list = 15; */
        for (let i = 0; i < message.watcherList.length; i++)
            MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusSettleInfo
 */
exports.InBattleMechanicusSettleInfo = new InBattleMechanicusSettleInfo$Type();
