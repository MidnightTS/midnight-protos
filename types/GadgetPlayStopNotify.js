"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetPlayStopNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GadgetPlayUidInfo_1 = require("./GadgetPlayUidInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GadgetPlayStopNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GadgetPlayStopNotify", [
            { no: 1, name: "uid_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GadgetPlayUidInfo_1.GadgetPlayUidInfo },
            { no: 3, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_win", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cost_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uidInfoList: [], playType: 0, isWin: false, entityId: 0, score: 0, costTime: 0 };
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
                case /* repeated GadgetPlayUidInfo uid_info_list */ 1:
                    message.uidInfoList.push(GadgetPlayUidInfo_1.GadgetPlayUidInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 play_type */ 3:
                    message.playType = reader.uint32();
                    break;
                case /* bool is_win */ 8:
                    message.isWin = reader.bool();
                    break;
                case /* uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 score */ 5:
                    message.score = reader.uint32();
                    break;
                case /* uint32 cost_time */ 14:
                    message.costTime = reader.uint32();
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
        /* repeated GadgetPlayUidInfo uid_info_list = 1; */
        for (let i = 0; i < message.uidInfoList.length; i++)
            GadgetPlayUidInfo_1.GadgetPlayUidInfo.internalBinaryWrite(message.uidInfoList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 play_type = 3; */
        if (message.playType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playType);
        /* bool is_win = 8; */
        if (message.isWin !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isWin);
        /* uint32 entity_id = 15; */
        if (message.entityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 score = 5; */
        if (message.score !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 cost_time = 14; */
        if (message.costTime !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.costTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GadgetPlayStopNotify
 */
exports.GadgetPlayStopNotify = new GadgetPlayStopNotify$Type();
