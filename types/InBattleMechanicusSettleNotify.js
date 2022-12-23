"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MultistageSettleWatcherInfo_1 = require("./MultistageSettleWatcherInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusSettleNotify", [
            { no: 15, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "watcher_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo },
            { no: 13, name: "Unk3300_NAMBBHMJJLN", kind: "scalar", jsonName: "Unk3300NAMBBHMJJLN", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_HAEOPAOBBFE", kind: "scalar", jsonName: "Unk3300HAEOPAOBBFE", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_EKAIAPLNIPM", kind: "scalar", jsonName: "Unk3300EKAIAPLNIPM", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sceneTimeMs: 0n, groupId: 0, watcherList: [], unk3300NAMBBHMJJLN: 0, unk3300HAEOPAOBBFE: 0, unk3300EKAIAPLNIPM: 0, playIndex: 0, isSuccess: false };
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
                case /* uint64 scene_time_ms */ 15:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* repeated MultistageSettleWatcherInfo watcher_list */ 2:
                    message.watcherList.push(MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_NAMBBHMJJLN = 13 [json_name = "Unk3300NAMBBHMJJLN"];*/ 13:
                    message.unk3300NAMBBHMJJLN = reader.uint32();
                    break;
                case /* uint32 Unk3300_HAEOPAOBBFE = 3 [json_name = "Unk3300HAEOPAOBBFE"];*/ 3:
                    message.unk3300HAEOPAOBBFE = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKAIAPLNIPM = 10 [json_name = "Unk3300EKAIAPLNIPM"];*/ 10:
                    message.unk3300EKAIAPLNIPM = reader.uint32();
                    break;
                case /* uint32 play_index */ 6:
                    message.playIndex = reader.uint32();
                    break;
                case /* bool is_success */ 1:
                    message.isSuccess = reader.bool();
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
        /* uint64 scene_time_ms = 15; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.sceneTimeMs);
        /* uint32 group_id = 5; */
        if (message.groupId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* repeated MultistageSettleWatcherInfo watcher_list = 2; */
        for (let i = 0; i < message.watcherList.length; i++)
            MultistageSettleWatcherInfo_1.MultistageSettleWatcherInfo.internalBinaryWrite(message.watcherList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_NAMBBHMJJLN = 13 [json_name = "Unk3300NAMBBHMJJLN"]; */
        if (message.unk3300NAMBBHMJJLN !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300NAMBBHMJJLN);
        /* uint32 Unk3300_HAEOPAOBBFE = 3 [json_name = "Unk3300HAEOPAOBBFE"]; */
        if (message.unk3300HAEOPAOBBFE !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300HAEOPAOBBFE);
        /* uint32 Unk3300_EKAIAPLNIPM = 10 [json_name = "Unk3300EKAIAPLNIPM"]; */
        if (message.unk3300EKAIAPLNIPM !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300EKAIAPLNIPM);
        /* uint32 play_index = 6; */
        if (message.playIndex !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* bool is_success = 1; */
        if (message.isSuccess !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSuccess);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusSettleNotify
 */
exports.InBattleMechanicusSettleNotify = new InBattleMechanicusSettleNotify$Type();
